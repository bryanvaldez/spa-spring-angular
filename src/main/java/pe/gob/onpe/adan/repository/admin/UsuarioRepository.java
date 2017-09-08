/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.repository.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.model.admin.Usuario;

/**
 *
 * @author bvaldez
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
 
    Usuario findByUsuario(String usuario);
}
