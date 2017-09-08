/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureQuery;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.LocalDao;
import pe.gob.onpe.adan.model.adan.Local;

/**
 *
 * @author bvaldez
 */
@Repository("localDao")
public class LocalDaoImpl extends AbstractDao<Integer, Local> implements LocalDao{

    @Override
    public List<Local> findAllLocalByUbigeo(String ubigeo, String code) {
        List<Local> local = new ArrayList<>();        
        if (!code.equalsIgnoreCase("undefined")) {            
            local = getEntityManager()
                .createQuery("SELECT l FROM Local l WHERE l.C_UBIGEO = :ubigeo AND l.N_ESTADO = 1 AND l.C_CODIGO <> :code ORDER BY l.C_NOMBRE ASC")
                .setParameter("ubigeo", ubigeo)
                .setParameter("code", code)
                .getResultList();
        } else {
            local = getEntityManager()
                .createQuery("SELECT l FROM Local l WHERE l.C_UBIGEO = :ubigeo AND l.N_ESTADO = 1 ORDER BY l.C_NOMBRE ASC")
                .setParameter("ubigeo", ubigeo)                
                .getResultList();
        }        
        return local;
    }

    @Override
    public List<Local> findAllLocal() {
        List<Local> local = getEntityManager()
                .createQuery("SELECT l FROM Local l")
                .getResultList();
        return local;
    }
    
    @Override
    public void saveLocal(Local local) {        
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            if (local.getN_LOCAL_PK() == null) {
                em.persist(local);
            } else {
                em.merge(local);                                
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }  
        
        if (local.getN_LOCAL_PK() != null) {
            executeLocal();
        }
    }
    
    @Override
    public Local findLocalByCode(String code) {
        Local local = (Local) getEntityManager()
                .createQuery("SELECT l FROM Local l WHERE l.C_CODIGO = :code")
                .setParameter("code", code)
                .getSingleResult();
        return local;
    } 
    
    @Override
    public String disabledLocal(String user, String code) {
        JsonObject jResponse = new JsonObject();
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_UTIL.SP_DESHABILITAR_LOCAL")                    
                        .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)   
                        .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)                        
                        .registerStoredProcedureParameter(3, Integer.class, ParameterMode.OUT)
                        .registerStoredProcedureParameter(4, String.class, ParameterMode.OUT)
                        .setParameter(1, user)
                        .setParameter(2, code);                        
            query.execute(); 
            Integer status = (Integer) query.getOutputParameterValue(3);  
            String message = (String) query.getOutputParameterValue(4);  
            
            jResponse.addProperty("status", status);
            jResponse.addProperty("message", message);      
            return new Gson().toJson(jResponse);           
        } catch (Exception e) {
            return "false";  
        }
    }
    
    @Override
    public String enabledLocal(String user, String code) {
        JsonObject jResponse = new JsonObject();
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_UTIL.SP_HABILITAR_LOCAL")                    
                        .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)   
                        .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)                        
                        .registerStoredProcedureParameter(3, Integer.class, ParameterMode.OUT)
                        .registerStoredProcedureParameter(4, String.class, ParameterMode.OUT)
                        .setParameter(1, user)
                        .setParameter(2, code);                        
            query.execute(); 
            Integer status = (Integer) query.getOutputParameterValue(3);  
            String message = (String) query.getOutputParameterValue(4);  
            
            jResponse.addProperty("status", status);
            jResponse.addProperty("message", message);      
            return new Gson().toJson(jResponse);           
        } catch (Exception e) {
            return "false";  
        }
    }
        
    private boolean executeLocal() {        
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_UTIL.SP_CAMBIO_CODIGO_LOCAL");                                            
            query.execute();
                        
            return true;
        } catch (Exception e) {
            return false;  
        }
    }

}