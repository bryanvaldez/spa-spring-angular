/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.AsynchronousDao;
import pe.gob.onpe.adan.service.Adan.AsynchronousService;

/**
 *
 * @author marrisueno
 */
@Service("asynchronousService")
public class AsynchronousServiceImpl implements AsynchronousService {

    @Autowired
    private AsynchronousDao dao;

    @Override
    public boolean verifyProcess(int id) throws Exception {
        return dao.verifyProcess(id);
    }

    @Override
    public boolean executeProcess(int id, String user, int idProceso) {
        return dao.executeProcess(id, user, idProceso);
    }

    @Override
    public boolean executeService(int id, String url) {
        return dao.executeService(id, url);
    }

    @Override
    public void executeVistaSeccionLocal() {
        dao.executeVistaSeccionLocal();
    }

    @Override
    public void executeVistaSeccionMesa() {
        dao.executeVistaSeccionMesa();
    }

    public boolean executeReturnModule(String user, int opcion, int idProceso) {
        return dao.executeReturnModule(user, opcion, idProceso);
    }
    
    public boolean updateDataProcess(int proceso, int opcion) {
        return dao.updateDataProcess(proceso, opcion);
    }
        
}
