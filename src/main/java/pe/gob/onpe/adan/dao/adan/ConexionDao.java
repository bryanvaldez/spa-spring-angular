/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Conexion;

/**
 *
 * @author bvaldez
 */
public interface ConexionDao {
    Conexion findById(int id);
    void saveConexion(Conexion conexion);
    void updateConexion(Conexion conexion);
    List<Conexion> findAllConexion();      
}
