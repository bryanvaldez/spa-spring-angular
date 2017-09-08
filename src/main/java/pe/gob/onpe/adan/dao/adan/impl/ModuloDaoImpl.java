/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ModuloDao;
import pe.gob.onpe.adan.model.adan.Modulo;

/**
 *
 * @author bvaldez
 */
@Repository("moduloDao")
public class ModuloDaoImpl extends AbstractDao<Integer, Modulo> implements ModuloDao{

    @Override
    public Modulo findById(int id) {
        Modulo modulo = (Modulo)getEntityManager()
                .createQuery("SELECT m FROM Modulo m WHERE m.N_MODULO_PK = :id")
                .setParameter("id", id)
                .getSingleResult();
        return modulo;
    }    
    
    @Override
    public List<Modulo> findAllModulo() {
        List<Modulo> modulo = getEntityManager()
                .createQuery("SELECT m FROM Modulo m ORDER BY m.N_ORDEN ASC")
                .getResultList();
        return modulo;
    }

    @Override
    public void updateModulo(Modulo modulo) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(modulo);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }
    
}
