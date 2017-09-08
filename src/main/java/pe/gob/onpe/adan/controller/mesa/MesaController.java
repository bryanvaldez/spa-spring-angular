/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.mesa;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.service.Adan.MesaService;

/**
 *
 * @author marrisueno
 */
@RestController
@RequestMapping(value="/mesa/*")
public class MesaController {
    
    @Autowired
    MesaService mesaService;        
            
    @RequestMapping(value="/getMesasLocal/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List getMesasByIdLocal(HttpServletRequest request, @PathVariable("id") String id){       
        List mesas = mesaService.findAllMesaById(id);
        return mesas;
        
    }                 
    
}
