/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.LocalDao;
import pe.gob.onpe.adan.model.adan.Local;
import pe.gob.onpe.adan.service.Adan.LocalService;

/**
 *
 * @author bvaldez
 */
@Service("localService")
public class LocalServiceImpl implements LocalService{

    @Autowired
    private LocalDao dao;      
    
    @Override
    public List<Local> findAllLocalByUbigeo(String ubigeo, String code) {
        return dao.findAllLocalByUbigeo(ubigeo, code);
    }

    @Override
    public List<Local> findAllLocal() {
        return dao.findAllLocal();
    }
    
    @Override
    public void saveLocal(Local local) {
        dao.saveLocal(local);
    }
    
    @Override
    public String disabledLocal(String user, String code) {
        return dao.disabledLocal(user, code);
    }   
    
    @Override
    public String enabledLocal(String user, String code) {
        return dao.enabledLocal(user, code);
    } 
    
    @Override
    public Local findLocalByCode(String code) {
        return dao.findLocalByCode(code);
    }
        
}
