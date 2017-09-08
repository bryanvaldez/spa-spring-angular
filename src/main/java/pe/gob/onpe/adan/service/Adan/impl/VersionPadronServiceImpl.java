/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.VersionPadronDao;
import pe.gob.onpe.adan.model.adan.VersionPadron;
import pe.gob.onpe.adan.service.Adan.VersionPadronService;

/**
 *
 * @author bvaldez
 */
@Service("versionPadronService")
public class VersionPadronServiceImpl implements VersionPadronService{

    @Autowired
    private VersionPadronDao dao;      
        
    @Override
    public VersionPadron get() {
        return dao.get();
    }
        
}
