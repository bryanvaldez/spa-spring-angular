/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.AuditoriaDao;
import pe.gob.onpe.adan.model.adan.Auditoria;

/**
 *
 * @author AQuispec
 */
@Repository("auditoriaDao")
public class AuditoriaDaoImpl extends AbstractDao<Integer, Auditoria> implements AuditoriaDao{

    @Override
    public void saveAuditoria(Auditoria auditoria) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(auditoria);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }
    }

}
