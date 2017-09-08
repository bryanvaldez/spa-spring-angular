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
import pe.gob.onpe.adan.dao.adan.ReporteDao;
import pe.gob.onpe.adan.helper.Filtro;
import pe.gob.onpe.adan.model.adan.Reporte;
import pe.gob.onpe.adan.service.Adan.ReporteService;

/**
 *
 * @author marrisueno
 */
@Service("reporteService")
public class ReporteServiceImpl  implements ReporteService{
    
    @Autowired
    private ReporteDao dao;        
    
    @Override
    public Reporte findById(int id) {
        return dao.findById(id);
    }   

    @Override
    public List<Reporte> findAllReporte() {
        return dao.findAllReporte();
    }
    
    @Override
    public List execute(String sql, Filtro filter, String url) {
        return dao.execute(sql, filter, url);
    }
    @Override
    public Reporte findByCodigo(String codigo){
        return dao.findByCodigo(codigo);
    }
    @Override
    public List execute(String sql, String url) {
        return dao.execute(sql, url);
    }
}
