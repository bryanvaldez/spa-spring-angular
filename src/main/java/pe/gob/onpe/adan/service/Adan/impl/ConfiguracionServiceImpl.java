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
import pe.gob.onpe.adan.dao.adan.ConfiguracionDao;
import pe.gob.onpe.adan.model.adan.Configuracion;
import pe.gob.onpe.adan.service.Adan.ConfiguracionService;

/**
 *
 * @author bvaldez
 */
@Service("configuracionService")
public class ConfiguracionServiceImpl implements ConfiguracionService{
        
    @Autowired
    private ConfiguracionDao configuracionDao;    

    @Override
    public Configuracion findById(int id) {
        return configuracionDao.getById(id);
        //return configuracionRepository.findOne(id);
    }

    @Override
    public List<Configuracion> findAllConfiguracion() {
        return configuracionDao.getAll();
        //return configuracionRepository.findAll();
    }

    @Override
    public void updateConfiguracion(Configuracion configuracion) {
        configuracionDao.updateConfiguracion(configuracion);
        //configuracionRepository.save(configuracion);
    }


    
}
