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
import pe.gob.onpe.adan.dao.adan.OpcionDao;
import pe.gob.onpe.adan.model.adan.Opcion;
import pe.gob.onpe.adan.service.Adan.OpcionService;

/**
 *
 * @author bvaldez
 */
@Service("opcionService")
public class OpcionServiceImpl implements OpcionService{

    @Autowired
    private OpcionDao opcionDao;      
    

    @Override
    public Opcion findById(int id) {
        return  opcionDao.findById(id);
    }    
    
    @Override
    public List<Opcion> findAllOpcion() {
        return opcionDao.findAllOpcion();
    }

    @Override
    public Opcion findByEstado(int id) {
        return opcionDao.findByEstado(id);
    }

    @Override
    public Opcion findByOrder(int orden) {
        return opcionDao.findByOrder(orden);
    }    
    
    @Override
    public void saveOpcion(Opcion opcion) {
        opcionDao.saveOpcion(opcion);
    }

    @Override
    public void updateOpcion(Opcion opcion) {
        opcionDao.updateOpcion(opcion);
    }
    
    @Override
    public List findAllOpcionModule() {
        return opcionDao.findAllOpcionModule();
    }

    @Override
    public void updateAllOpcion(int order) {
        opcionDao.updateAllOpcion(order);
    }
    
}
