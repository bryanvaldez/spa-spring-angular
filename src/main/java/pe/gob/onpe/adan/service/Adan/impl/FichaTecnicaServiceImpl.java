/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.FichaTecnicaDao;
import pe.gob.onpe.adan.model.adan.FichaTecnica;
import pe.gob.onpe.adan.service.Adan.FichaTecnicaService;

/**
 *
 * @author bvaldez
 */
@Service("fichaTecnicaService")
public class FichaTecnicaServiceImpl implements FichaTecnicaService {

    //@Autowired
    //private FichaTecnicaRepository fichaTecnicaRepository;     
    
    @Autowired
    private FichaTecnicaDao fichaTecnicaDao;
    
    @Override
    public List findAllByEstado(int estado) {
        return fichaTecnicaDao.findAllByEstado(estado);
    }

    @Override
    public FichaTecnica findById(int id) {
        return fichaTecnicaDao.findById(id);
        //return fichaTecnicaRepository.findOne(id);                
    }
    
    @Override
    public FichaTecnica saveFichaTecnica(FichaTecnica fichaTecnica) {
        return fichaTecnicaDao.saveFichaTecnica(fichaTecnica);
        //fichaTecnica = fichaTecnicaRepository.save(fichaTecnica);      
        //return fichaTecnica;
    }

    @Override
    public void updateFichaTecnica(FichaTecnica fichaTecnica) {
        fichaTecnicaDao. updateFichaTecnica(fichaTecnica);
    }
    
    @Override
    public void updateFichaTecnica2(FichaTecnica fichaTecnica) {
        fichaTecnicaDao.updateFichaTecnica2(fichaTecnica);
    }

    @Override
    public List findFichaTecnicaConfig() {
        return fichaTecnicaDao.findFichaTecnicaConfig();
    }

    @Override
    public Map getSPFichaTecnicaFinal() {
        return fichaTecnicaDao.getSPFichaTecnicaFinal();
    }

    @Override
    public Object getDateServer() {
        return fichaTecnicaDao.getDateServer();
    }

    @Override
    public Object getDifFechaEleccion() {
        return fichaTecnicaDao.getDifFechaEleccion();
    }
        
}
