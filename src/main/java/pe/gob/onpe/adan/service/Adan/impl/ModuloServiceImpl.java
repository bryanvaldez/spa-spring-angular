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
import pe.gob.onpe.adan.dao.adan.ModuloDao;
import pe.gob.onpe.adan.model.adan.Modulo;
import pe.gob.onpe.adan.service.Adan.ModuloService;

/**
 *
 * @author bvaldez
 */
@Service("moduloService")
public class ModuloServiceImpl implements ModuloService{

    @Autowired
    private ModuloDao moduloDao;

    @Override
    public Modulo findById(int id) {
        return moduloDao.findById(id);
    }
    
    @Override
    public List<Modulo> findAllModulo() {
        return moduloDao.findAllModulo();
    }

    @Override
    public void updateModulo(Modulo modulo) {
        moduloDao.updateModulo(modulo);
    }
    
}
