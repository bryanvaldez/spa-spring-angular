/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.LocalSolucionDao;
import pe.gob.onpe.adan.model.adan.LocalSolucion;

/**
 *
 * @author bvaldez
 */
@Repository("localSolucionDao")
public class LocalSolucionDaoImpl extends AbstractDao<Integer, LocalSolucion> implements LocalSolucionDao{

    @Override
    public List<LocalSolucion> getTreetable(String idPadre) {        
        List<LocalSolucion> localSolucion = getEntityManager()
                .createQuery("SELECT l FROM LocalSolucion l WHERE l.C_CODIGO_PADRE = :idPadre")
                .setParameter("idPadre", idPadre)
                .getResultList();
        return localSolucion;        
    }

    @Override
    public List<LocalSolucion> getTreetableHead(String id) {        
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION WHERE C_CODIGO=:id";
        try{
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("id", id);
            return query.getResultList();
        }catch(NoResultException nre){
            return null;
        }	
    }
   
}
