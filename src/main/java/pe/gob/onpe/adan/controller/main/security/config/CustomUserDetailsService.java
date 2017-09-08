/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main.security.config;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.model.admin.Usuario;
import pe.gob.onpe.adan.service.Admin.UsuarioService;

/**
 *
 * @author bvaldez
 */
@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService{
    
    @Autowired
    private UsuarioService usuarioService;
    
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioService.findByUsuario(username);
        if(usuario == null){
            throw new UsernameNotFoundException("Usuario no encontrado");
        }
        List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();  
        roles.add(new SimpleGrantedAuthority(usuario.getPerfil().getNombre()));
        return new User(usuario.getUsuario(), usuario.getClave(), roles);        
    }
    
}
