/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.DetalleFichaTecnicaDao;
import pe.gob.onpe.adan.model.adan.DetFichaTecnica;

/**
 *
 * @author AQuispec
 */
@Repository("detalleFichaTecnicaDao")
public class DetalleFichaTecnicaDaoImpl extends AbstractDao<Integer, DetFichaTecnica> implements DetalleFichaTecnicaDao{

    @Override
    public List<DetFichaTecnica> findAllByFichaTecnica(int idFT) {
        List<DetFichaTecnica> lst = getEntityManager()
                .createQuery("SELECT D FROM DetFichaTecnica D WHERE D.fichaTecnica = :idFT AND D.estado = 1")
                .setParameter("idFT", idFT)
                .getResultList();
        return lst;    
    }

    @Override
    public void saveDetFichaTecnica(DetFichaTecnica fichaTecnica) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(fichaTecnica);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }

    @Override
    public void updateDetFichaTecnica(DetFichaTecnica detFichaTecnica) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(detFichaTecnica);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }
    
}
