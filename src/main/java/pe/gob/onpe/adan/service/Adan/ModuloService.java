/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Modulo;

/**
 *
 * @author bvaldez
 */
public interface ModuloService {
    Modulo findById(int id);
    List<Modulo> findAllModulo();
    void updateModulo (Modulo modulo);
}
