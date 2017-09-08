/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

/**
 *
 * @author bvaldez
 */
public interface ProcedureDao {
    String executeAsignacionElector(String dni, String oldLocal, String newLocal, String user);
    String executeReAsignacionMesa(String mesa, String oldLocal, String newLocal, String user);    
    Integer executeGenerateLepa(String user, int process);
    Integer executeGenerateManualLepa(String user, int process);
    Integer executeLesaToSige(String user);
    Integer executeUpdateSige(String user);
    Integer executeAssignHistory(String user, int process);
    Integer executeAssignHistory2(String user, int process); 
    Integer executeConformationBdonpe(String user, int process);
    String getPercentageLepa();
    boolean cleanProcedure();
    String validateUbigeos(int type, int status);   
}
