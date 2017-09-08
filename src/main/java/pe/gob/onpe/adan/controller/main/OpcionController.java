/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.model.adan.Conexion;
import pe.gob.onpe.adan.model.adan.Opcion;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.service.Adan.ConexionService;
import pe.gob.onpe.adan.service.Adan.FichaTecnicaService;
import pe.gob.onpe.adan.service.Adan.OpcionService;
import pe.gob.onpe.adan.service.Adan.TreeTableService;
import pe.gob.onpe.adan.service.Admin.ProcesoService;

/**
 *
 * @author bvaldez
 */
@RestController
public class OpcionController {
    
    @Autowired
    OpcionService opcionService;   
    
    @Autowired
    ConexionService conexionService;
    
    @Autowired
    TreeTableService localService;    
    
    @Autowired
    FichaTecnicaService fichaTecnicaService;  
    
    @Autowired
    ProcesoService procesoService;  
    
    @RequestMapping(value="/opcion/", method = RequestMethod.GET)
    public ResponseEntity<List<Opcion>> allOpcion(){
        List<Opcion> list = opcionService.findAllOpcion();
        if (list.isEmpty()) {
            return new ResponseEntity<List<Opcion>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Opcion>>(list, HttpStatus.OK);        
    }
    
    @RequestMapping(value="/opcion/validate/sige/", method = RequestMethod.GET)
    public String validateOpcionSige(){
        JsonObject jResponse = new JsonObject();
        boolean success = true;        
//        try {
            Conexion conexion = conexionService.findById(Constants.TIPO_CARGA_SIGE);
            if(conexion.getN_ESTADO() == 1){
                success = false; 
            }                                    
//        } catch (Exception e) {
//            jResponse.addProperty("message", "Error de conexion.");
//            jResponse.addProperty("success", "error");            
//            return new Gson().toJson(jResponse);               
//        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);        
    } 
    
    @RequestMapping(value="/opcion/validate/reasignar1/", method = RequestMethod.GET)
    public String validateOpcionReasignar1(){
        JsonObject jResponse = new JsonObject();
        boolean success = true;        
        ArrayList result = new ArrayList<>();
//        try {
            result = localService.getListaDistritosAsignados();
            if (result.isEmpty()) {
                success = false;
            }                                  
//        } catch (Exception e) {
//            jResponse.addProperty("message", "Error de conexion.");
//            jResponse.addProperty("success", "error");            
//            return new Gson().toJson(jResponse);               
//        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);        
    }        
    
    @RequestMapping(value="/opcion/", method = RequestMethod.PUT)
    public String updateOption( @RequestBody Opcion opcion){                
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        try {
            Opcion currentOpcion = opcionService.findById(opcion.getN_OPCION_PK());                
            if(currentOpcion == null){
                success = false;
                jResponse.addProperty("message", "No se actualizo el registro.");        
            }else{
                opcionService.updateOpcion(opcion);
                JsonObject responseOpcion = (JsonObject)jsonParser.parse(gson.toJson(opcion));
                jResponse.addProperty("message", "Registro Actualizado.");
                jResponse.add("data", responseOpcion);
            }            
        } catch (Exception e) {
                success = false;
                jResponse.addProperty("message", "Error de conexion.");              
        }

        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);       
    }    
    
    @RequestMapping(value="/opcion/update/{step}", method = RequestMethod.GET) 
    public String updateAllOption(@PathVariable("step") int step){                
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        try {           
            opcionService.updateAllOpcion(step);
        } catch (Exception e) {
            success = false;            
        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);       
    }      
    
    @RequestMapping(value="/opcion/step", method = RequestMethod.GET)
    public ResponseEntity<Opcion> opcionStep(HttpServletRequest request){
        HttpSession session = request.getSession(false);   
        Opcion opcion = new Opcion();
        if(getInitStep() == 2){           
            opcion = opcionService.findByEstado(2);
        }else if(getInitStep() == 1){
            opcion = opcionService.findByOrder(1);            
        }else{
            return new ResponseEntity<Opcion>(HttpStatus.NO_CONTENT);
        }                                
        if (opcion == null) {
            return new ResponseEntity<Opcion>(HttpStatus.NO_CONTENT);
        }else{
            if(opcion.getN_ORDEN() == Constants.STEP_CIERRE){
                try {
                int dias = Integer.parseInt(((Map<String,Object>) ((List<Map<String,Object>>) fichaTecnicaService.getDifFechaEleccion()).get(0)).get("DIAS").toString());
                    if (dias <= 0) {                        
                        Proceso proceso = procesoService.findById(Integer.parseInt(session.getAttribute("CODIGO_PROCESO").toString()));
                        if (proceso.getN_ESTADO() != 4) {
                            proceso.setN_ESTADO(4);
                            procesoService.updateProceso(proceso);
                        }                        
                    }
                } catch (Exception e) {
                }                
            }
        }        
        return new ResponseEntity<Opcion>(opcion, HttpStatus.OK);        
    }

    @RequestMapping(value = "/opcion/step/{status}", method = RequestMethod.POST)
    public ResponseEntity<?> stepOpcion(@PathVariable("status") String status) {
        Opcion currentOpcion = opcionService.findByEstado(Constants.OPCION_ACTIVA);
        if (currentOpcion == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        if(status.equalsIgnoreCase("back")){
            int back = currentOpcion.getN_ORDEN()-1;
            Opcion opcionBack = opcionService.findByOrder(back);            
            if(opcionBack != null){
                opcionBack.setN_ESTADO(2);
                opcionService.updateOpcion(opcionBack);              
            }
            currentOpcion.setN_ESTADO(0);
            opcionService.updateOpcion(currentOpcion);
            if(currentOpcion.getN_MODULO() != opcionBack.getN_MODULO()){
                
            }
            return new ResponseEntity<Opcion>(opcionBack, HttpStatus.OK);
        }
        if(status.equalsIgnoreCase("next")){
            int next = currentOpcion.getN_ORDEN()+1;
            Opcion opcionNext = opcionService.findByOrder(next);
            if(opcionNext != null){
                currentOpcion.setN_ESTADO(1);
                opcionService.updateOpcion(currentOpcion);                
                Opcion exist = opcionService.findByEstado(2);                
                if(exist == null){
                    opcionNext.setN_ESTADO(2);
                    opcionService.updateOpcion(opcionNext);                       
                }else{
                    return new ResponseEntity<Opcion>(exist, HttpStatus.OK);
                }                               
            }else{
                currentOpcion.setN_ESTADO(1);
                opcionService.updateOpcion(currentOpcion);                 
            }       
            return new ResponseEntity<Opcion>(opcionNext, HttpStatus.OK);            
        }                        
        return new ResponseEntity<Opcion>(currentOpcion, HttpStatus.OK);
    }
    
    private int getInitStep(){        
        int success = 1;                
        try {                                    
            List<Opcion> opciones = opcionService.findAllOpcion();
            for (Opcion opcion : opciones) {
                if(opcion.getN_ESTADO() != 0 && opcion.getN_ESTADO() != null){
                    success = 2;
                }            
            }         
        } catch (Exception ex) {  
            success = 0;
            Logger.getLogger(OpcionController.class.getName()).log(Level.SEVERE, null, ex);
        }                 
        return success;
    } 

}
