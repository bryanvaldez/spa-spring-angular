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
import pe.gob.onpe.adan.dao.adan.PadronDao;
import pe.gob.onpe.adan.model.adan.Padron;
import pe.gob.onpe.adan.service.Adan.PadronService;

/**
 *
 * @author bvaldez
 */
@Service("padronService")
public class PadronServiceImpl implements PadronService{
    
    @Autowired
    private PadronDao dao;

    @Override
    public Padron findElectorByDni(String dni) {
        return dao.findElectorByDni(dni);
    }
        
    @Override
    public List<String> listUbigeosPadron() {
        return dao.listUbigeosPadron();
    } 
    
    @Override
    public List<String> listUbigeosOdpe() {
        return dao.listUbigeosOdpe();
    }

    @Override
    public String findElectorByPreference(String dni) {
        return dao.findElectorByPreference(dni);
    }

    @Override
    public void updateElectorByVip(String dni, int status) {
        dao.updateElectorByVip(dni, status);
    }

    @Override
    public void updatePadron(Padron padron) {
        dao.updatePadron(padron);
    }

    @Override
    public String executeAsignacionElector(String dni, String oldLocal, String newLocal, String user) {
        return dao.executeAsignacionElector(dni, oldLocal, newLocal, user);
    }
    
}
