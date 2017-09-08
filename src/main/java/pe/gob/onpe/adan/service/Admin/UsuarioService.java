/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Admin;

import pe.gob.onpe.adan.model.admin.Usuario;

/**
 *
 * @author bvaldez
 */
public interface UsuarioService {
    
    Usuario findById(int id);
    Usuario findByUsuario(String usuario);    
    Usuario updateUsuario(Usuario usuario);
}
