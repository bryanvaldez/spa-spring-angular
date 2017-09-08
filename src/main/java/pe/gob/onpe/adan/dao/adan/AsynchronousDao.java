/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

/**
 *
 * @author marrisueno
 */
public interface AsynchronousDao {     
    boolean verifyProcess(int id) throws Exception;
    boolean executeProcess(int id, String user, int idProceso);
    boolean executeService(int id, String url);    
    void executeVistaSeccionLocal();
    void executeVistaSeccionMesa();  
    boolean executeReturnModule(String user, int opcion, int idProceso); 
    boolean updateDataProcess(int proceso, int opcion);
}
