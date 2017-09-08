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
import pe.gob.onpe.adan.dao.adan.ParametroDao;
import pe.gob.onpe.adan.model.adan.Parametro;
import pe.gob.onpe.adan.service.Adan.ParametroService;

/**
 *
 * @author bvaldez
 */
@Service("parametroService")
public class ParametroServiceImpl implements ParametroService{

    @Autowired
    private ParametroDao parametroDao;      
    
    @Override
    public List<Parametro> findAllByTableAndColumn(String nameTable, String nameColumn) {
        return parametroDao.findAllByTableAndColumn(nameTable, nameColumn);
        //return parametroRepository.findByTablaAndColumna(nameTable, nameColumn);
    }

    @Override
    public Parametro findById(int id) {
        return parametroDao.findById(id);
        //return parametroRepository.findById(id);
    }

    @Override
    public List<Parametro> findByCcodigoAndFlag(String cCodigo, int flag) {
        return parametroDao.findByCcodigoAndFlag(cCodigo, flag);
        //return parametroRepository.findByCCodigoAndFlag(cCodigo, flag);
    }
    
}
