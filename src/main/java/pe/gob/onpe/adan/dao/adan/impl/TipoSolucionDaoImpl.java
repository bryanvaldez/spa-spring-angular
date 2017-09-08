/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.TipoSolucionDao;
import pe.gob.onpe.adan.model.adan.TipoSolucion;

/**
 *
 * @author AQuispec
 */
@Repository("tipoSolucionDao")
public class TipoSolucionDaoImpl extends AbstractDao<Integer, TipoSolucion>implements TipoSolucionDao{

    @Override
    public List<TipoSolucion> findAll() {
        List<TipoSolucion> lst = getEntityManager()
                .createQuery("SELECT TS FROM TipoSolucion TS ORDER BY TS.id ASC")                
                .getResultList();
        return lst;      
    }

    @Override
    public List<TipoSolucion> findAllByEstado(int estado) {
        List<TipoSolucion> lst = getEntityManager()
                .createQuery("SELECT TS FROM TipoSolucion TS WHERE TS.estado = :estado ORDER BY TS.id ASC")
                .setParameter("estado", estado)
                .getResultList();
        return lst; 
    }

    @Override
    public List<TipoSolucion> findAllByIdIn(List<Integer> idList) {
        List<TipoSolucion> lst = getEntityManager()
                .createQuery("SELECT TS FROM TipoSolucion TS WHERE TS.id IN(:idList)")
                .setParameter("idList", idList)
                .getResultList();
        return lst; 
    }

    @Override
    public void saveTipoSolucion(TipoSolucion tipoSolucion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(tipoSolucion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }
        
    }

    @Override
    public void updateTipoSolucion(TipoSolucion tipoSolucion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(tipoSolucion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }               
    }

    @Override
    public TipoSolucion findById(int id) {
        return getByKey(id);
    }
    
}
