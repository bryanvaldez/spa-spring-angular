/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.ParameterMode;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.FichaTecnicaDao;
import pe.gob.onpe.adan.model.adan.FichaTecnica;

/**
 *
 * @author AQuispec
 */
@Repository("fichaTecnicaDao")
public class FichaTecnicaDaoImpl extends AbstractDao<Integer, FichaTecnica> implements FichaTecnicaDao {

    @Override
    public FichaTecnica findById(int id) {
        return getByKey(id);
    }

    @Override
    public ArrayList findAllByEstado(int estado) {
        final String sql = "SELECT N_FICHA_TECNICA_PK,"
                + "C_VERSION,"
                + "TO_CHAR(D_FECHA_VERSION,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_VERSION,"
                + "C_RESOLUCION,"
                + "C_NOMBRE_ARCHIVO,"
                + "N_TIPO_ELECCION,"
                + "N_ANIO_ELECCION,"
                + "C_NOMBRE_CORTO,"
                + "N_PERIODICIDAD,"
                + "TO_CHAR(D_FECHA_ELECCION,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_ELECCION,"
                + "N_ESTADO,"
                + "N_MUNICIPALIDADES,"
                + "TO_CHAR(D_FECHA_ARCHIVO,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_ARCHIVO FROM CAB_FICHA_TECNICA WHERE N_ESTADO=:estado ORDER BY D_FECHA_ARCHIVO DESC";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("estado", estado);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public void updateFichaTecnica2(FichaTecnica ft) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery("UPDATE CAB_FICHA_TECNICA SET C_VERSION = :version,"
                + "D_FECHA_VERSION =:fechaVersion,"
                + "C_RESOLUCION =:resolucion,"
                + "C_NOMBRE_ARCHIVO =:nombreArchivo,"
                + "N_TIPO_ELECCION =:tipoEleccion,"
                + "N_ANIO_ELECCION =:anioEleccion,"
                + "C_NOMBRE_CORTO =:nombreCorto,"
                + "N_PERIODICIDAD =:periodicidad,"
                + "D_FECHA_ELECCION =:fechaEleccion,"
                + "N_ESTADO =:estado,"
                + "N_MUNICIPALIDADES =:municipalidades,"
                + "D_FECHA_ARCHIVO =:fechaArchivo WHERE N_FICHA_TECNICA_PK = :id");
            query.setParameter("id", ft.getId());
            query.setParameter("version", ft.getVersion());
            query.setParameter("fechaVersion", ft.getFechaVersion());
            query.setParameter("resolucion", ft.getResolucion());
            query.setParameter("nombreArchivo", ft.getNombreArchivo());
            query.setParameter("tipoEleccion", ft.getTipoEleccion());
            query.setParameter("anioEleccion", ft.getAnioEleccion());
            query.setParameter("nombreCorto", ft.getNombreCorto());
            query.setParameter("periodicidad", ft.getPeriodicidad());
            query.setParameter("fechaEleccion", ft.getFechaEleccion());
            query.setParameter("estado", ft.getEstado());
            query.setParameter("municipalidades", ft.getMunicipalidades());
            query.setParameter("fechaArchivo", ft.getFechaArchivo());
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
    public List findFichaTecnicaConfig() {
        final String sql = "SELECT N_FICHA_TECNICA_PK,"
                + "C_VERSION,"
                + "TO_CHAR(D_FECHA_VERSION,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_VERSION,"
                + "C_RESOLUCION,"
                + "C_NOMBRE_ARCHIVO,"
                + "N_TIPO_ELECCION,"
                + "N_ANIO_ELECCION,"
                + "C_NOMBRE_CORTO,"
                + "N_PERIODICIDAD,"
                + "TO_CHAR(D_FECHA_ELECCION,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_ELECCION,"
                + "N_ESTADO,"
                + "N_MUNICIPALIDADES,"
                + "TO_CHAR(D_FECHA_ARCHIVO,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_ARCHIVO FROM CAB_FICHA_TECNICA WHERE N_ESTADO=:estado AND "
                + "D_FECHA_ARCHIVO=(SELECT MAX(FT.D_FECHA_ARCHIVO) FROM CAB_FICHA_TECNICA FT)";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("estado", 1);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public Map getSPFichaTecnicaFinal() {
        Map<String, Object> result = null;
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REPORTE.SP_FICHA_TECNICA_FINAL")
                .registerStoredProcedureParameter(1, String.class, ParameterMode.OUT)
                .registerStoredProcedureParameter(2, String.class, ParameterMode.OUT)
                .registerStoredProcedureParameter(3, String.class, ParameterMode.OUT)
                .registerStoredProcedureParameter(4, String.class, ParameterMode.OUT)
                .registerStoredProcedureParameter(5, String.class, ParameterMode.OUT)
                .registerStoredProcedureParameter(6, String.class, ParameterMode.OUT);
        query.execute();
        result = new HashMap<>();
        result.put("DISTRITOS", (String) query.getOutputParameterValue(1));
        result.put("CCPP", (String) query.getOutputParameterValue(2));
        result.put("ODPES", (String) query.getOutputParameterValue(3));
        result.put("EH", (String) query.getOutputParameterValue(4));
        result.put("MESAS", (String) query.getOutputParameterValue(5));
        result.put("LV", (String) query.getOutputParameterValue(6));

        return result;
    }

    @Override
    public FichaTecnica saveFichaTecnica(FichaTecnica ft) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(ft);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }
        
        return ft;
    }
    
    @Override 
    public void updateFichaTecnica(FichaTecnica ft){
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(ft);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }   
    
    @Override
    public Object getDateServer(){
        final String sql = "SELECT TO_CHAR(SYSDATE,'MM/DD/YYYY') FECHA FROM DUAL";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List row = query.getResultList();                                    
            return row;
        } catch (NoResultException nre) {
            return null;
        }        
    }
    
    @Override
    public Object getDifFechaEleccion(){
        final String sql = "SELECT (TRUNC(D_FECHA_ELECCION) - TRUNC(SYSDATE)) DIAS FROM CAB_FICHA_TECNICA";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            Object row = query.getResultList();                                    
            return row;
        } catch (NoResultException nre) {
            return null;
        }        
    }
}
