/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.model.adan.Modulo;
import pe.gob.onpe.adan.service.Adan.ModuloService;
import pe.gob.onpe.adan.service.Adan.OpcionService;

/**
 *
 * @author bvaldez
 */
@RestController
public class ModuloController {
    
    @Autowired
    ModuloService moduloService;   
    
    @Autowired
    OpcionService opcionService;      
    
    @RequestMapping(value = "/modulo/", method = RequestMethod.GET)
    public ResponseEntity<List<Modulo>> allModule() {
        List<Modulo> list = moduloService.findAllModulo();
        if (list.isEmpty()) {
            return new ResponseEntity<List<Modulo>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Modulo>>(list, HttpStatus.OK);
    }  
    
}
