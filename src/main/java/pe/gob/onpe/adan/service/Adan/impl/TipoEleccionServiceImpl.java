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
import pe.gob.onpe.adan.dao.adan.TipoEleccionDao;
import pe.gob.onpe.adan.model.adan.TipoEleccion;
import pe.gob.onpe.adan.service.Adan.TipoEleccionService;

/**
 *
 * @author bvaldez
 */
@Service("tipoEleccionService")
public class TipoEleccionServiceImpl implements TipoEleccionService{

    @Autowired
    private TipoEleccionDao tipoEleccionDao;
    //private TipoEleccionRepository eleccionRepository;    
    
    @Override
    public List<TipoEleccion> findAllByEstado(int estado) {
        return tipoEleccionDao.findAllByEstado(estado);
        //return eleccionRepository.findByEstadoOrderByDescripcionAsc(estado);
    }

    @Override
    public TipoEleccion findById(int id) {
        return tipoEleccionDao.findById(id);
        //return eleccionRepository.findById(id);
    }
    
}
