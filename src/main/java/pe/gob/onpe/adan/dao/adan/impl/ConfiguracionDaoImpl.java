/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ConfiguracionDao;
import pe.gob.onpe.adan.model.adan.Configuracion;

/**
 *
 * @author bvaldez
 */
@Repository("configuracionDao")
public class ConfiguracionDaoImpl extends AbstractDao<Integer, Configuracion> implements ConfiguracionDao{

    @Override
    public Configuracion getById(int id) {
        return getByKey(id);
    }

    @Override
    public List<Configuracion> getAll() {
        List<Configuracion> configuracion = getEntityManager()
                .createQuery("SELECT c FROM Configuracion c")
                .getResultList();
        return configuracion;
    }

    @Override
    public void updateConfiguracion(Configuracion configuracion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(configuracion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }
    
}
