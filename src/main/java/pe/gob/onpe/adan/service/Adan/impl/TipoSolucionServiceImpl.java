/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.TipoSolucionDao;
import pe.gob.onpe.adan.model.adan.TipoSolucion;
import pe.gob.onpe.adan.service.Adan.TipoSolucionService;

/**
 *
 * @author bvaldez
 */
@Service("tipoSolucionService")
public class TipoSolucionServiceImpl implements TipoSolucionService{
    
    @Autowired
    private TipoSolucionDao tipoSolucionDao;
    //private TipoSolucionRepository tipoSolucionRepository;      

    @Override
    public List<TipoSolucion> findAllByEstado(int estado) {
        return tipoSolucionDao.findAllByEstado(estado);
        //return tipoSolucionRepository.findByEstadoOrderByIdAsc(estado);
    }
    
    @Override
    public List<TipoSolucion> findAllByIdIn(List<Integer> idList) {
        return tipoSolucionDao.findAllByIdIn(idList);
        //return tipoSolucionRepository.findByIdIn(idList);        
    }

    @Override
    public void saveTipoSolucion(TipoSolucion tipoSolucion) {
        tipoSolucionDao.saveTipoSolucion(tipoSolucion);
        //tipoSolucionRepository.save(tipoSolucion);
    }

    @Override
    public void updateTipoSolucion(TipoSolucion tipoSolucion) {
        tipoSolucionDao.updateTipoSolucion(tipoSolucion);
        //saveTipoSolucion(tipoSolucion);
    }

    @Override
    public List<TipoSolucion> findAll() {
        return tipoSolucionDao.findAll();
        //return tipoSolucionRepository.findAll(sortByIdAsc());        
    }

    @Override
    public TipoSolucion findById(int id) {
        return tipoSolucionDao.findById(id);
        //return tipoSolucionRepository.findById(id);
    }
   
    private Sort sortByIdAsc() {
        return new Sort(Sort.Direction.ASC, "id");
    }
    
}
