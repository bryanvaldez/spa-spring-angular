/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.DocumentoDao;
import pe.gob.onpe.adan.model.adan.Documento;

/**
 *
 * @author AQuispec
 */
@Repository("documentoDao")
public class DocumentoDaoImpl extends AbstractDao<Integer, Documento> implements DocumentoDao{

    @Override
    public ArrayList findAll() {
        final String sql = "SELECT N_DOCUMENTO_PK,"
                + "C_NOMBRE,"
                + "N_MODULO,"
                + "TO_CHAR(D_FECHA_CARGA,'yyyy-mm-dd HH24:MI:SS') AS D_FECHA_CARGA,"
                + "C_RESOLUCION FROM TAB_DOCUMENTO";
        try{
            Query query = getEntityManager().createNativeQuery(sql);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        }catch(NoResultException nre){
            return null;
        }
    }
    
    @Override
    public void updateDocumento2(Documento doc) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery("UPDATE TAB_DOCUMENTO SET C_NOMBRE = :nombre,"
                + "D_FECHA_CARGA =:fecha,"
                + "C_RESOLUCION =:resolucion WHERE N_DOCUMENTO_PK = :id");
            query.setParameter("nombre", doc.getNombre());    
            query.setParameter("fecha", doc.getFechaCarga());    
            query.setParameter("resolucion", doc.getResolucion());    
            query.setParameter("id", doc.getId());        
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
    public Documento findById(int id) {
        return getByKey(id);
    }

    @Override
    public void saveDocumento(Documento documento) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(documento);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }
    
    @Override
    public void updateDocumento(Documento doc){
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(doc);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }
}
