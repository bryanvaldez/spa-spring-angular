/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import javax.persistence.NoResultException;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.AsignacionLocalDao;
import pe.gob.onpe.adan.model.adan.AsignacionLocal;

/**
 *
 * @author bvaldez
 */
@Repository("asignacionLocalDao")
public class AsignacionLocalDaoImpl extends AbstractDao<Integer, AsignacionLocal> implements AsignacionLocalDao{

    @Override
    public AsignacionLocal findByDni(String dni) {
        try {
            AsignacionLocal response = (AsignacionLocal) getEntityManager()
                .createQuery("SELECT a FROM AsignacionLocal a WHERE a.C_DOCUMENTO_IDENTIDAD = :dni")
                .setParameter("dni", dni)
                .getSingleResult();            
            return response;            
        } catch (NoResultException nre) {
            nre.getMessage();
            return null;
        }
    }
    
}
