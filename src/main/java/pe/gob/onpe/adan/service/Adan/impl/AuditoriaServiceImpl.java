/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.AuditoriaDao;
import pe.gob.onpe.adan.model.adan.Auditoria;
import pe.gob.onpe.adan.service.Adan.AuditoriaService;

/**
 *
 * @author AQuispec
 */
@Service("auditoriaService")
public class AuditoriaServiceImpl implements AuditoriaService{

    @Autowired
    private AuditoriaDao auditoriaDao;
    
    @Override
    public void saveAuditoria(Auditoria auditoria) {
        auditoriaDao.saveAuditoria(auditoria);
    }
    
}
