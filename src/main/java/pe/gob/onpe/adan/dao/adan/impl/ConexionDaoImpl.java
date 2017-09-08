/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ConexionDao;
import pe.gob.onpe.adan.model.adan.Conexion;

/**
 *
 * @author bvaldez
 */
@Repository("conexionDao")
public class ConexionDaoImpl extends AbstractDao<Integer, Conexion> implements ConexionDao{

    @Override
    public Conexion findById(int id) {                
        return getByKey(id);
    }

    @Override
    public void saveConexion(Conexion conexion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.persist(conexion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }
    
    @Override
    public void updateConexion(Conexion conexion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            em.merge(conexion);
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }

    @Override
    public List<Conexion> findAllConexion() {
        List<Conexion> conexion = getEntityManager()
                .createQuery("SELECT c FROM Conexion c ORDER BY c.N_TIPO_CONEXION ASC")
                .getResultList();
        return conexion;
    }
    
}
