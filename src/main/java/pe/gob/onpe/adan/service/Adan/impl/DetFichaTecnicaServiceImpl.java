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
import pe.gob.onpe.adan.dao.adan.DetalleFichaTecnicaDao;
import pe.gob.onpe.adan.model.adan.DetFichaTecnica;
import pe.gob.onpe.adan.service.Adan.DetFichaTecnicaService;

/**
 *
 * @author bvaldez
 */
@Service("detFichaTecnicaService")
public class DetFichaTecnicaServiceImpl implements DetFichaTecnicaService{
    
    @Autowired
    private DetalleFichaTecnicaDao detalleFichaTecnicaDao;
    //private DetFichaTecnicaRepository detFichaTecnicaRepository;    
    

    @Override
    public List<DetFichaTecnica> findAllByDetFichaTecnica(int idFT) {
        return detalleFichaTecnicaDao.findAllByFichaTecnica(idFT);
        //return detFichaTecnicaRepository.findByFichaTecnica(id);
    }

    @Override
    public void updateDetFichaTecnica(DetFichaTecnica fichaTecnica) {
        detalleFichaTecnicaDao.updateDetFichaTecnica(fichaTecnica);
        //saveDetFichaTecnica(fichaTecnica);
    }

    @Override
    public void saveDetFichaTecnica(DetFichaTecnica fichaTecnica) {
        detalleFichaTecnicaDao.saveDetFichaTecnica(fichaTecnica);
        //detFichaTecnicaRepository.save(fichaTecnica);
    }
    
}
