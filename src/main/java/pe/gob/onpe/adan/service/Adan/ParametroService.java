/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Parametro;

/**
 *
 * @author bvaldez
 */
public interface ParametroService {

    List<Parametro> findAllByTableAndColumn(String nameTable, String nameColumn);

    Parametro findById(int id);

    List<Parametro> findByCcodigoAndFlag(String cCodigo, int flag);
}
