/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.error;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author SMamani
 */
@Controller
public class HTTPController {
    
    @RequestMapping(value = "/error/401", method = RequestMethod.GET)
    public String error401(HttpServletRequest request) {
        return "error/401";
    }
    @RequestMapping(value = "/error/error403", method = RequestMethod.GET)
    public String error403(HttpServletRequest request) {
        return "error/error403";
    }
    @RequestMapping(value = "/error/404", method = RequestMethod.GET)
    public String error404(HttpServletRequest request) {
        return "error/404";
    }
    @RequestMapping(value = "/error/500", method = RequestMethod.GET)
    public String error500(HttpServletRequest request) {
        return "error/500";
    }
    @RequestMapping(value = "/error/503", method = RequestMethod.GET)
    public String error503(HttpServletRequest request) {
        return "error/503";
    }
    @RequestMapping(value = "/error/sessionExpired", method = RequestMethod.GET)
    public String sessionExpired(HttpServletRequest request) {
        return "error/sessionExpired";
    }
}
