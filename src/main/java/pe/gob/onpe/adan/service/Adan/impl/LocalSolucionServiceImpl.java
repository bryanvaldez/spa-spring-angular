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
import pe.gob.onpe.adan.dao.adan.LocalSolucionDao;
import pe.gob.onpe.adan.model.adan.LocalSolucion;
import pe.gob.onpe.adan.service.Adan.LocalSolucionService;

/**
 *
 * @author bvaldez
 */
@Service("localSolucionService")
public class LocalSolucionServiceImpl implements LocalSolucionService{

    @Autowired
    private LocalSolucionDao localSolucionDao;     
    
    @Override
    public List<LocalSolucion> getTreetable(String idPadre) {
        return localSolucionDao.getTreetable(idPadre);
    }

    @Override
    public List<LocalSolucion> getTreetableHead(String id) {
        return localSolucionDao.getTreetableHead(id);
    }
 
}
