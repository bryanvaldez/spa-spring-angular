/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.route;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author bvaldez
 */
@Controller
public class step1 {
    
    @RequestMapping(value = {"step1/configuracion"}, method = RequestMethod.GET)
    public String configuracion() {
        return "step1/step1"; 
    }
    @RequestMapping(value = {"step1/reglas"}, method = RequestMethod.GET)
    public String reglas() {
        return "step1/reglas"; 
    } 
    @RequestMapping(value = {"step1/ficha"}, method = RequestMethod.GET)
    public String ficha() {
        return "step1/ficha"; 
    }     
}
