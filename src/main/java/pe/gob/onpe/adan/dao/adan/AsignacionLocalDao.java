/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import pe.gob.onpe.adan.model.adan.AsignacionLocal;

/**
 *
 * @author bvaldez
 */
public interface AsignacionLocalDao {
    AsignacionLocal findByDni(String dni);    
}
