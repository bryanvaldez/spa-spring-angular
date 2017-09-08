/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.CabeceraCargaDao;
import pe.gob.onpe.adan.model.adan.CabeceraCarga;

/**
 *
 * @author marrisueno
 */
@Repository("cabeceraCargaDao")
public class CabeceraCargaDaoImpl extends AbstractDao<Integer, CabeceraCarga> implements CabeceraCargaDao{                
    
    @Override
    public CabeceraCarga getLastUpload(int typeUpload) {                 
        try {
            CabeceraCarga cabeceraCarga = (CabeceraCarga) getEntityManager()
                .createQuery("SELECT r FROM CabeceraCarga r WHERE r.tipoCarga=:tipoCarga AND r.estadoFinal=:estadoFinal")
                .setParameter("tipoCarga", typeUpload)
                .setParameter("estadoFinal", 1)
                .getSingleResult();        
            return cabeceraCarga; 
        } catch (Exception ex) {
            return null;
        }                
    }        
    
    @Override    
    public void insertHeader(CabeceraCarga cabeceraCarga) { 
                
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();  
            
            //Actualizar los anteriores a estado 0
            Query query = em.createNativeQuery("UPDATE CAB_CARGA SET N_ESTADO_FINAL = 0 WHERE N_TIPO_CARGA = :tipo AND N_ESTADO_FINAL = 1");
            query.setParameter("tipo", cabeceraCarga.getTipoCarga());
            query.executeUpdate();
            query = null; 
            
            //Registrar el ultimo
            em.persist(cabeceraCarga);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }                                               
                
    }        
    
}
