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
import pe.gob.onpe.adan.dao.adan.CargaDao;
import pe.gob.onpe.adan.model.adan.Uploader;
import pe.gob.onpe.adan.service.Adan.CargaService;

/**
 *
 * @author marrisueno
 */
@Service("cargaService")
public class CargaServiceImpl  implements CargaService{
    
    @Autowired
    private CargaDao dao;       
    
    @Override
    public List<Uploader> listColumns(int typeUpload) {
        return dao.listColumns(typeUpload);
    }
        
}
