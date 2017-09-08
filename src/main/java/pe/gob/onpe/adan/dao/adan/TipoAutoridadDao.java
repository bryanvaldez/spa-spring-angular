/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.TipoAutoridad;

/**
 *
 * @author AQuispec
 */
public interface TipoAutoridadDao {
    List<TipoAutoridad> findByEstadoOrderByDescripcionAsc(int estado);
}
