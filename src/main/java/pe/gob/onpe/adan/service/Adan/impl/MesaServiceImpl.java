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
import pe.gob.onpe.adan.dao.adan.MesaDao;
import pe.gob.onpe.adan.service.Adan.MesaService;

/**
 *
 * @author marrisueno
 */
@Service("mesaService")
public class MesaServiceImpl implements MesaService{

    @Autowired
    private MesaDao dao;      
    
    @Override
    public List findAllMesaById(String id) {
        return dao.findAllMesaById(id);
    }
    
    @Override
    public String findMesaById(String id) {
        return dao.findMesaById(id);
    }
}
