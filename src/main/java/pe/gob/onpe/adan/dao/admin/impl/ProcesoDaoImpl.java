/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.admin.impl;

import java.util.List;
import javax.persistence.NoResultException;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.dao.admin.ProcesoDao;

/**
 *
 * @author bvaldez
 */
@Repository("procesoDao")
public class ProcesoDaoImpl extends AbstractDao<Integer, Proceso> implements ProcesoDao{

    @Override
    public Proceso findById(int id) {
        return getByKey(id);
    }

    @Override
    public Proceso findByAlias(String alias) {
        try{
            Proceso proceso = (Proceso) getEntityManager()
                    .createQuery("SELECT p FROM Proceso p WHERE p.C_ALIAS = :alias") 
                    .setParameter("alias", alias)
                    .getSingleResult();        
            return proceso;
        }catch(NoResultException ex){
            return null;
        }            
    }

    @Override
    public void saveProceso(Proceso proceso) {
        persist(proceso);
    }

    @Override
    public List<Proceso> findAllProcesos() {
        try{        
            List<Proceso> procesos = getEntityManager()
                    .createQuery("SELECT p FROM Proceso p ORDER BY p.D_AUD_FECHA_CREACION ASC")
                    .getResultList();
            return procesos;
        }catch(NoResultException ex){
            return null;
        }           
    }

    @Override
    public Proceso findByName(String name) {
        try{
            Proceso proceso = (Proceso) getEntityManager()
                    .createQuery("SELECT p FROM Proceso p WHERE p.C_NOMBRE = :name") 
                    .setParameter("name", name)
                    .getSingleResult();        
            return proceso;
        }catch(NoResultException ex){
            return null;
        }   
    }

    @Override
    public Proceso findByKey(String key) {
        try{
            Proceso proceso = (Proceso) getEntityManager()
                    .createQuery("SELECT p FROM Proceso p WHERE p.C_CONEXION = :key") 
                    .setParameter("key", key)
                    .getSingleResult();        
            return proceso;
        }catch(NoResultException ex){
            return null;
        }   
    }
     
    @Override
    public List<Proceso> findAllByUsuario(int usuario) {
        try{        
            List<Proceso> procesos = getEntityManager()
                    .createQuery("SELECT p FROM Proceso p WHERE p.N_USUARIO_CONECTADO = :usuario")
                    .setParameter("usuario", usuario)
                    .getResultList();
            return procesos;
        }catch(NoResultException ex){
            return null;
        }           
    }

}
