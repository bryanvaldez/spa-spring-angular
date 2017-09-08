/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.ParameterMode;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.PadronDao;
import pe.gob.onpe.adan.model.adan.Padron;

/**
 *
 * @author bvaldez
 */
@Repository("padronDao")
public class PadronDaoImpl extends AbstractDao<Integer, Padron> implements PadronDao{

    @Override
    public Padron findElectorByDni(String dni) {
        Padron padron = (Padron) getEntityManager()
                .createQuery("SELECT p FROM Padron p WHERE p.NUMELE = :dni")
                .setParameter("dni", dni)
                .getSingleResult();        
        return padron; 
    }
    
    @Override
    public List<String> listUbigeosPadron() {
        try {
            List<String> lstUbigeo = getEntityManager()
                    .createNativeQuery("SELECT UBIGEO FROM (SELECT DISTINCT P.UBIGEO FROM TAB_PADRON P UNION SELECT DISTINCT P1.UBIGEO_RENIEC FROM TAB_PADRON P1) WHERE UBIGEO IS NOT NULL")
                    .getResultList();
            return lstUbigeo; 
        } catch (Exception ex) {
            return null;
        }    
    }
    
    @Override
    public List<String> listUbigeosOdpe() {
        try {
            List<String> lstUbigeo = getEntityManager()
                    .createNativeQuery("SELECT DISTINCT P.UBIGEO FROM TAB_UBIGEO P WHERE P.UBIGEO IS NOT NULL")
                    .getResultList();
            return lstUbigeo; 
        } catch (Exception ex) {
            return null;
        }    
    }

    @Override
    public String findElectorByPreference(String dni) {
        final String sql = "SELECT FN_PREFEFENCIAL(:dni) FROM DUAL";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("dni", dni);
            String result = query.getSingleResult().toString();
            return result;
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public void updateElectorByVip(String dni, int status) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery("UPDATE TAB_PADRON SET N_VIP = :status WHERE  NUMELE = :dni");
            query.setParameter("dni", dni);
            query.setParameter("status", status); 
            query.executeUpdate();
            query = null; 
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }                
    }

    @Override
    public void updatePadron(Padron padron) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(padron);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }

    @Override
    public String executeAsignacionElector(String dni, String oldLocal, String newLocal, String user) {
        JsonObject jResponse = new JsonObject();
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REASIGNACIONES.SP_ASIGNACION_ELECTOR")                    
                        .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)   
                        .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(3, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(4, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(5, Integer.class, ParameterMode.OUT)
                        .registerStoredProcedureParameter(6, String.class, ParameterMode.OUT)
                        .setParameter(1, dni)
                        .setParameter(2, oldLocal)  
                        .setParameter(3, newLocal)  
                        .setParameter(4, user);                    
            query.execute(); 
            Integer status = (Integer) query.getOutputParameterValue(5);  
            String message = (String) query.getOutputParameterValue(6);  
            
            jResponse.addProperty("status", status);
            jResponse.addProperty("message", message);      
            return new Gson().toJson(jResponse);           
        } catch (Exception e) {
            return "false";  
        } 
    }
    
}
