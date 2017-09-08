/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.route;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.model.admin.Usuario;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.adan.service.Admin.UsuarioService;

/**
 *
 * @author bvaldez
 */
@Controller
public class Main {

    @Autowired
    ProcesoService procesoService;

    @Autowired
    private UsuarioService usuarioService;

    @RequestMapping(value = {"/", "main"}, method = RequestMethod.GET)
    public String main(HttpServletRequest request, HttpServletResponse response, ModelMap model) {

        HttpSession session = request.getSession(false);
        if (session.getAttribute("PROCESO") != null) {
            request.getSession().setAttribute("PROCESO", "");
            //request.getSession().setAttribute("CODIGO_PROCESO", "");
            request.getSession().setAttribute("ESTADO_PROCESO", "");
            request.getSession().setAttribute("PROCESO_CREDENTIAL", "");
            if (session.getAttribute("CODIGO_PROCESO") != null && session.getAttribute("CODIGO_PROCESO") != "") {
                Usuario usuario = usuarioService.findByUsuario(session.getAttribute("USUARIO").toString());
                if (usuario.getPerfil().getId() == 1) {
                    Proceso p = procesoService.findById(Integer.parseInt(session.getAttribute("CODIGO_PROCESO").toString()));
                    if (p.getN_USUARIO_CONECTADO() == usuario.getId()) {
                        p.setN_USUARIO_CONECTADO(null);
                        procesoService.updateProceso(p);
                    }
                }
                request.getSession().setAttribute("CODIGO_PROCESO", null);
            }
        }
        if (session != null && session.getAttribute("USUARIO_AUTENTICADO") != null && session.getAttribute("PERFIL") != null) {
            if ((Long) session.getAttribute("PERFIL") == 1) {
                return "main/main";
            } else if ((Long) session.getAttribute("PERFIL") == 2) {
                return "main/mainObs";
            }
            return "main/main";
        }
        return "redirect:/login?logout";
    }

    @RequestMapping(value = {"dashboard"}, method = RequestMethod.GET)
    public String composer(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
        HttpSession session = request.getSession(false);
        if (session.getAttribute("PERFIL") != null) {
            if (session.getAttribute("PROCESO") != null) {
                if (session.getAttribute("PROCESO") == "") {
                    return "redirect:/main";
                } else {
                    Proceso p = procesoService.findById(Integer.parseInt(session.getAttribute("CODIGO_PROCESO").toString()));
                    Usuario usuario = usuarioService.findByUsuario(session.getAttribute("USUARIO").toString());
                    if (p.getN_USUARIO_CONECTADO() == usuario.getId() || usuario.getPerfil().getId() == 2) {
                        if ((Long) session.getAttribute("PERFIL") == 1 && p.getN_ESTADO() == 1) {
                            return "main/dashboard";
                        } else if ((Long) session.getAttribute("PERFIL") == 2 || p.getN_ESTADO() == 2) {
                            return "main/dashboardObs";
                        }
                        return "main/dashboard";
                    } else {
                        return "redirect:/main";
                    }
                }
            }
            return "redirect:/main";
        }
        return "redirect:/login?logout";
    }

    private String getPrincipal() {
        String userName = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            userName = ((UserDetails) principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }

}
