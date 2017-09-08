/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main.security.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserCache;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.model.admin.Usuario;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.adan.service.Admin.UsuarioService;

/**
 *
 * @author SMamani
 */
public class CustomLogoutHandler implements LogoutHandler {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    ProcesoService procesoService;

    private UserCache userCache;

    public void logout(final HttpServletRequest request, final HttpServletResponse response, final Authentication authentication) {
        String id = request.getSession().getId();
        HttpSession session = request.getSession(false);

        if (session != null && session.getAttribute("USUARIO") != null) {
            Usuario usuario = usuarioService.findByUsuario(session.getAttribute("USUARIO").toString());
            usuario.setConexion(0);
            usuarioService.updateUsuario(usuario);

            if (usuario.getPerfil().getId() == 1) {
                if (session.getAttribute("CODIGO_PROCESO") != null && session.getAttribute("CODIGO_PROCESO") != "") {
                    Proceso proceso = procesoService.findById(Integer.parseInt(session.getAttribute("CODIGO_PROCESO").toString()));
                    proceso.setN_USUARIO_CONECTADO(null);
                    procesoService.updateProceso(proceso);
                }
            }
        }
    }

    @Required
    public void setUserCache(final UserCache userCache) {
        this.userCache = userCache;
    }
}
