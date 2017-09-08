/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.ArrayList;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.DetalleCargaDao;
import pe.gob.onpe.adan.model.adan.DetalleCarga;


/**
 *
 * @author marrisueno
 */
@Repository("detalleCargaDao")
public class DetalleCargaDaoImpl extends AbstractDao<Integer, DetalleCarga> implements DetalleCargaDao{                
           
    @Override    
    public void insertBody(ArrayList<DetalleCarga> detalleCarga) {
        
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            for (DetalleCarga entity : detalleCarga) {
                em.persist(entity);            
            } 
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }
                               
    }        
    
}
