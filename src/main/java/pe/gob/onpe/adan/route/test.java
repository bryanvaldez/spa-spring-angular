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
public class test {
    
    @RequestMapping(value = {"test/reporte"}, method = RequestMethod.GET)
    public String general() {
        return "step1/step1"; 
    }
    @RequestMapping(value = {"test/reporte2"}, method = RequestMethod.GET)
    public String general2() {
        return "test/reporte2"; 
    }
    @RequestMapping(value = {"test/reporte3"}, method = RequestMethod.GET)
    public String reporte3() {
        return "test/reporte3"; 
    }     
    @RequestMapping(value = {"test/estructura"}, method = RequestMethod.GET)
    public String general3() {
        return "test/estructura"; 
    }    
    @RequestMapping(value = {"test/ficha"}, method = RequestMethod.GET)
    public String ficha() {
        return "step1/ficha"; 
    }    
    @RequestMapping(value = {"test/reglas"}, method = RequestMethod.GET)
    public String reglas() {
        return "step1/reglas"; 
    }       
    @RequestMapping(value = {"test/step"}, method = RequestMethod.GET)
    public String step() {
        return "test/step"; 
    }   
    @RequestMapping(value = {"test/tree"}, method = RequestMethod.GET)
    public String tree() {
        return "step2/asignacionSolucion"; 
    }  
    @RequestMapping(value = {"test/carga"}, method = RequestMethod.GET)
    public String carga() {
        return "test/carga"; 
    }      
}
