/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.CabeceraCargaDao;
import pe.gob.onpe.adan.model.adan.CabeceraCarga;
import pe.gob.onpe.adan.service.Adan.CabeceraCargaService;

/**
 *
 * @author marrisueno
 */
@Service("cabeceraCargaService")
public class CabeceraCargaServiceImpl  implements CabeceraCargaService{
    
    @Autowired
    private CabeceraCargaDao dao;       
    
    @Override
    public CabeceraCarga getLastUpload(int typeUpload) {
        return dao.getLastUpload(typeUpload);
    }
    
    @Override    
    public void insertHeader(CabeceraCarga cabeceraCarga) {        
        dao.insertHeader(cabeceraCarga);
    }        
        
}
