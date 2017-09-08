/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.VersionPadronDao;
import pe.gob.onpe.adan.model.adan.VersionPadron;

/**
 *
 * @author bvaldez
 */
@Repository("versionPadronDao")
public class VersionPadronDaoImpl extends AbstractDao<Integer, VersionPadron> implements VersionPadronDao{   
    
    @Override
    public VersionPadron get() {
        VersionPadron local = (VersionPadron) getEntityManager()
                .createQuery("SELECT l FROM VersionPadron l")                
                .getSingleResult();
        return local;
    }        

}