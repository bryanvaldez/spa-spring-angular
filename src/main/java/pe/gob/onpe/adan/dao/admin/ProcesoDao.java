/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.admin;

import java.util.List;
import pe.gob.onpe.adan.model.admin.Proceso;

/**
 *
 * @author bvaldez
 */
public interface ProcesoDao{
    Proceso findById(int id);
    Proceso findByAlias(String alias); 
    Proceso findByName(String name); 
    Proceso findByKey(String key); 
    void saveProceso(Proceso proceso);
    List<Proceso> findAllProcesos();     
    List<Proceso> findAllByUsuario(int usuario);
}
