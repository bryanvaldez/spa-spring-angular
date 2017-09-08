/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.ProcedureDao;
import pe.gob.onpe.adan.service.Adan.ProceduresService;

/**
 *
 * @author bvaldez
 */
@Service("procedureService")
public class ProcedureServiceImpl implements ProceduresService{

    @Autowired
    private ProcedureDao procedureDao;          
    
    @Override
    public String executeAsignacionElector(String dni, String oldLocal, String newLocal, String user) {
        return procedureDao.executeAsignacionElector(dni, oldLocal, newLocal, user);
    }

    @Override
    public String executeReAsignacionMesa(String mesa, String oldLocal, String newLocal, String user) {
        return procedureDao.executeReAsignacionMesa(mesa, oldLocal, newLocal, user);
    }
    
    
    @Override
    public Integer executeGenerateLepa(String user, int process) {
        return procedureDao.executeGenerateLepa(user, process);
    }
    
    @Override
    public Integer executeLesaToSige(String user) {
        return procedureDao.executeLesaToSige(user);
    }
    
    @Override
    public Integer executeUpdateSige(String user) {
        return procedureDao.executeUpdateSige(user);
    }
    
    @Override
    public Integer executeAssignHistory(String user, int process) {
        return procedureDao.executeAssignHistory(user, process);
    }
    
    @Override
    public Integer executeConformationBdonpe(String user, int process) {
        return procedureDao.executeConformationBdonpe(user, process);
    }    

    @Override
    public String getPercentageLepa() {
        return procedureDao.getPercentageLepa();
    }

    @Override
    public boolean cleanProcedure() {
        return procedureDao.cleanProcedure();
    }

    @Override
    public Integer executeGenerateManualLepa(String user, int process) {
        return  procedureDao.executeGenerateManualLepa(user, process);
    }

    @Override
    public Integer executeAssignHistory2(String user, int process) {
        return procedureDao.executeAssignHistory2(user, process);
    }

    @Override
    public String validateUbigeos(int type, int status) {
        return procedureDao.validateUbigeos(type, status); 
    }

}
