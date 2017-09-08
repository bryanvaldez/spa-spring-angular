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
import pe.gob.onpe.adan.dao.adan.TipoAutoridadDao;
import pe.gob.onpe.adan.model.adan.TipoAutoridad;
import pe.gob.onpe.adan.service.Adan.TipoAutoridadService;

/**
 *
 * @author bvaldez
 */
@Service("tipoAutoridadService")
public class TipoAutoridadServiceImpl implements TipoAutoridadService{

    @Autowired
    private TipoAutoridadDao tipoAutoridadDao;
    //private TipoAutoridadRepository autoridadRepository;     
    
    @Override
    public List<TipoAutoridad> findAllByEstado(int estado) {
        return tipoAutoridadDao.findByEstadoOrderByDescripcionAsc(estado);
    }
    
}
