/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.OpcionDao;
import pe.gob.onpe.adan.model.adan.Opcion;

/**
 *
 * @author bvaldez
 */
@Repository("opcionDao")
public class OpcionDaoImpl extends AbstractDao<Integer, Opcion> implements OpcionDao {

    @Override
    public Opcion findById(int id) {
        return getByKey(id);
    }

    @Override
    public List<Opcion> findAllOpcion() {
        List<Opcion> opcion = getEntityManager()
                .createQuery("SELECT o FROM Opcion o ORDER BY o.N_ORDEN ASC")
                .getResultList();
        return opcion;
    }

    @Override
    public Opcion findByEstado(int id) {
        try {
            Opcion opcion = (Opcion) getEntityManager()
                .createQuery("SELECT o FROM Opcion o WHERE o.N_ESTADO = :id")
                .setParameter("id", id)
                .getSingleResult();            
            return opcion;            
        } catch (NoResultException nre) {
            nre.getMessage();
            return null;
        }
    }

    @Override
    public Opcion findByOrder(int orden) {
        Opcion opcion = (Opcion) getEntityManager()
                .createQuery("SELECT o FROM Opcion o WHERE o.N_ORDEN = :orden")
                .setParameter("orden", orden)
                .getSingleResult();
        return opcion;
    }

    @Override
    public void saveOpcion(Opcion opcion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(opcion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }

    @Override
    public void updateOpcion(Opcion opcion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();
        try {
            em.getTransaction().begin();
            em.merge(opcion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }       
    }
    
    @Override
    public List findAllOpcionModule() {
        
        String sql = "SELECT M.N_MODULO_PK, M.C_NOMBRE_MODULO, O.N_OPCION_PK, O.C_NOMBRE_OPCION, O.N_ESTADO FROM TAB_MODULO M INNER JOIN TAB_OPCION O ON M.N_MODULO_PK = O.N_MODULO WHERE O.N_ACTIVO = 0 ORDER BY M.N_ORDEN, O.N_ORDEN";
        Query query = getEntityManager().createNativeQuery(sql);                
        query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        List list = query.getResultList();
                
        return list;
    }

    @Override
    public void updateAllOpcion(int order) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        
        Query query = em.createNativeQuery("UPDATE TAB_OPCION SET N_ESTADO = 1 WHERE N_ORDEN < :order");
        query.setParameter("order", order);
        query.executeUpdate();
        Query query2 = em.createNativeQuery("UPDATE TAB_OPCION SET N_ESTADO = 2 WHERE N_ORDEN = :order");
        query2.setParameter("order", order);
        query2.executeUpdate();
        Query query3 = em.createNativeQuery("UPDATE TAB_OPCION SET N_ESTADO = 0 WHERE N_ORDEN > :order");
        query3.setParameter("order", order);
        query3.executeUpdate();
        query = null;
        query2 = null;
        query3 = null;
        
        em.getTransaction().commit();
        em.close();
    }    
}
