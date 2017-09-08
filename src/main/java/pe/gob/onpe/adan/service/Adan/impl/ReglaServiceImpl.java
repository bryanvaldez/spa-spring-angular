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
import pe.gob.onpe.adan.dao.adan.ReglaDao;
import pe.gob.onpe.adan.model.adan.Regla;
import pe.gob.onpe.adan.service.Adan.ReglaService;

/**
 *
 * @author AQuispec
 */
@Service("reglaService")
public class ReglaServiceImpl implements ReglaService{

    @Autowired
    private ReglaDao reglaDao;
    //private ReglaRepository reglaRepository;      
    
    @Override
    public List<Regla> finAllRegla() {
        return reglaDao.finAllRegla();
        //return reglaRepository.findAll();
    }
    
}
