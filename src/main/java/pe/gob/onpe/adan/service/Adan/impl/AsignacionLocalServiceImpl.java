/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.AsignacionLocalDao;
import pe.gob.onpe.adan.model.adan.AsignacionLocal;
import pe.gob.onpe.adan.service.Adan.AsignacionLocalService;

/**
 *
 * @author bvaldez
 */
@Service("asignacionLocalService")
public class AsignacionLocalServiceImpl implements AsignacionLocalService{

    @Autowired
    private AsignacionLocalDao asignacionLocalDao;
    
    @Override
    public AsignacionLocal findByDni(String dni) {
        return asignacionLocalDao.findByDni(dni);
    }
    
}
