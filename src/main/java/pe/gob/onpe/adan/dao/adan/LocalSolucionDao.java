/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.LocalSolucion;

/**
 *
 * @author bvaldez
 */
public interface LocalSolucionDao {
    List<LocalSolucion> getTreetable(String idPadre);
    List<LocalSolucion> getTreetableHead(String id);  
}
