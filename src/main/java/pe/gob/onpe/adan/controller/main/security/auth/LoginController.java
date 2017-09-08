/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main.security.auth;

import java.util.ArrayList;
import java.util.Collections;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
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
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private ProcesoService procesoService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(HttpServletRequest request) {

        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute("USUARIO_AUTENTICADO") != null) {
            if (session.getAttribute("PERFIL") != null) {
                if (session.getAttribute("PROCESO") != null) {
                    if (session.getAttribute("PROCESO") == "") {
                        if ((Long) session.getAttribute("PERFIL") == 1) {
                            return new ModelAndView("/main/main");
                        } else if ((Long) session.getAttribute("PERFIL") == 2) {
                            return new ModelAndView("/main/mainObs");
                        }
                    } else {
                        if ((Long) session.getAttribute("PERFIL") == 1) {
                            return new ModelAndView("/main/dashboard");
                        } else if ((Long) session.getAttribute("PERFIL") == 2) {
                            return new ModelAndView("/main/dashboardObs");
                        }
                    }
                }
            }
            return new ModelAndView("/main/main");
        }

        ArrayList<String> numbersCollection = new ArrayList<String>() {
            {
                add("0");
                add("1");
                add("2");
                add("3");
                add("4");
                add("5");
                add("6");
                add("7");
                add("8");
                add("9");
            }
        };
        ArrayList<String> lettersCollection = new ArrayList<String>() {
            {
                add("A");
                add("B");
                add("C");
                add("D");
                add("E");
                add("F");
            }
        };
        Collections.shuffle(numbersCollection);
        Collections.shuffle(lettersCollection);
        ModelAndView view = new ModelAndView("main/login");
        view.addObject("numbers", numbersCollection);
        view.addObject("letters", lettersCollection);
        return view;

    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        HttpSession session = request.getSession(false);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (session != null) {
            if (session.getAttribute("USUARIO") != null) {
                Usuario usuario = usuarioService.findByUsuario(session.getAttribute("USUARIO").toString());
                usuario.setConexion(0);
                usuarioService.updateUsuario(usuario);

                if (session.getAttribute("PROCESO") != null) {
                    if (session.getAttribute("PROCESO") != "" && usuario.getPerfil().getId() == 1) {
                        Proceso p = procesoService.findById(Integer.parseInt(session.getAttribute("CODIGO_PROCESO").toString()));
                        p.setN_USUARIO_CONECTADO(null);
                        procesoService.updateProceso(p);
                    }
                }
            }

        }

        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login?logout";
    }

}
