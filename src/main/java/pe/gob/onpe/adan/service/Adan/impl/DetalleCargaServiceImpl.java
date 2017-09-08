/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.DetalleCargaDao;
import pe.gob.onpe.adan.model.adan.DetalleCarga;
import pe.gob.onpe.adan.service.Adan.DetalleCargaService;

/**
 *
 * @author marrisueno
 */
@Service("detalleCargaService")
public class DetalleCargaServiceImpl  implements DetalleCargaService{
    
    @Autowired
    private DetalleCargaDao dao;
    
    @Override    
    public void insertBody(ArrayList<DetalleCarga> detalleCarga) {        
        dao.insertBody(detalleCarga);
    }        
        
}
