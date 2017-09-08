/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.TipoSolucion;

/**
 *
 * @author AQuispec
 */
public interface TipoSolucionDao {

    List<TipoSolucion> findAll();

    List<TipoSolucion> findAllByEstado(int estado);

    List<TipoSolucion> findAllByIdIn(List<Integer> idList);

    void saveTipoSolucion(TipoSolucion tipoSolucion);

    void updateTipoSolucion(TipoSolucion tipoSolucion);

    TipoSolucion findById(int id);
}
