/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main.security.config;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.model.admin.Usuario;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.adan.service.Admin.UsuarioService;

/**
 *
 * @author bvaldez
 */
@Component
public class CustomSuccesHandler extends SimpleUrlAuthenticationSuccessHandler{
    
    private RedirectStrategy redirectStrategy  = new DefaultRedirectStrategy();
    
    @Autowired
    private UsuarioService usuarioService;    
    
    @Autowired
    private ProcesoService procesoService;
    
    @Override 
    protected void handle(HttpServletRequest request, 
                          HttpServletResponse response,
                          Authentication authentication) throws IOException, ServletException{
        
        String targetUrl = determineTargetUrl(authentication);
        
        if(response.isCommitted()){
            System.out.println("No se puede redireccionar");
            return;
        }
        Usuario usuario = usuarioService.findByUsuario(authentication.getName());
        request.getSession().setAttribute("USUARIO_AUTENTICADO", usuario.getNombre()+" "+usuario.getApellidoPaterno()+" "+usuario.getApellidoMaterno());
        request.getSession().setAttribute("USUARIO", usuario.getUsuario());
        request.getSession().setAttribute("PERFIL", usuario.getPerfil().getId());        
        usuario.setConexion(1);
        List<Proceso> procesos = procesoService.findAllByUsuario(usuario.getId());
        for (Proceso proceso : procesos) {
            proceso.setN_USUARIO_CONECTADO(null);
            procesoService.updateProceso(proceso);
        }
        usuarioService.updateUsuario(usuario);
        redirectStrategy.sendRedirect(request, response, targetUrl);
    }    
    
    protected String determineTargetUrl(Authentication authentication){
        String url = "";
        Collection<? extends GrantedAuthority> authorities  = authentication.getAuthorities();
            List<String> roles = new ArrayList<String>();
            for(GrantedAuthority a : authorities){
                roles.add(a.getAuthority());
            }
            if(isObserver(roles)){
                url = "/main";
            } else if (isAdmin(roles)){
                url = "/main";
            } else if(isUser(roles)){
                url = "/user";
            } else{
                url = "/accessDenied";
            }
        return url;
    }    
    
    private boolean isUser(List<String> roles){
        if(roles.contains("PERFIL USUARIO")){
            return true;
        }
        return false;
    }  
    private boolean isAdmin(List<String> roles){
        if(roles.contains("PERFIL SUPER ADMINISTRADOR")){
            return true;
        }
        return false;
    }
    private boolean isObserver(List<String> roles){
        if(roles.contains("PERFIL MONITOREO")){
            return true;
        }
        return false;
    }     
    
    public void setRedirectStrategy(RedirectStrategy redirectStrategy){
        this.redirectStrategy = redirectStrategy;
    }
    protected RedirectStrategy getRedirectStrategy(){
        return redirectStrategy;
    }        
    
}
