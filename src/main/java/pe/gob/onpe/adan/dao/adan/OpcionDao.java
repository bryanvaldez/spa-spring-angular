/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Opcion;

/**
 *
 * @author bvaldez
 */
public interface OpcionDao {
    List<Opcion> findAllOpcion();
    Opcion findById(int id);
    Opcion findByEstado(int id);
    Opcion findByOrder(int orden);
    void saveOpcion(Opcion opcion);
    void updateOpcion(Opcion opcion); 
    List findAllOpcionModule();
    void updateAllOpcion(int order);
}
