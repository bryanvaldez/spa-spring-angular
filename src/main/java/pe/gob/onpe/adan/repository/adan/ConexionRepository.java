/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.repository.adan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.model.adan.Conexion;

/**
 *
 * @author bvaldez
 */
@Repository
public interface ConexionRepository extends JpaRepository<Conexion, Integer>{
    
}
