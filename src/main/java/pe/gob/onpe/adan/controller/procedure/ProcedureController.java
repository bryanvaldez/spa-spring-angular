/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.procedure;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.model.adan.AsignacionLocal;
import pe.gob.onpe.adan.model.adan.Opcion;
import pe.gob.onpe.adan.service.Adan.AsignacionLocalService;
import pe.gob.onpe.adan.service.Adan.OpcionService;
import pe.gob.onpe.adan.service.Adan.ProceduresService;

/**
 *
 * @author bvaldez
 */
@RestController
public class ProcedureController {
    
    @Autowired
    ProceduresService proceduresService;
    
    @Autowired
    AsignacionLocalService asignacionLocalService;
    
    @Autowired
    OpcionService opcionService;       
    
    private String getPrincipal(){
        String userName = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        if(principal instanceof UserDetails){
            userName = ((UserDetails)principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }       
    
    @RequestMapping(value = "execute/asignacion", method = RequestMethod.POST, headers = "Accept=application/json", produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String asignarReasignar(HttpServletRequest request, 
                                    @RequestParam("type") String type, 
                                    @RequestParam("code") String code,
                                    @RequestParam("currentLocal") String currentLocal,
                                    @RequestParam("newLocal") String newLocal) {
        JsonObject jResponse = new JsonObject();
        boolean success = true;         
        if(type.equalsIgnoreCase("ELECTOR")){
            AsignacionLocal local = asignacionLocalService.findByDni(code);
            if(local != null){
                try {
                    String executeAsignacion = proceduresService.executeAsignacionElector(code,local.getC_LOCAL(), newLocal, getPrincipal()); 
                    jResponse.addProperty("data", executeAsignacion);
                } catch (Exception e) {
                    success = false;
                }
            }else{
                success = false;
                jResponse.addProperty("message", "Elector sin local Asignado.");
            }             
        }
        if(type.equalsIgnoreCase("LOCAL")){
            List<String> mesas = Arrays.asList(code.split("\\s*,\\s*"));
            try {
                for (int i = 0; i < mesas.size(); i++) {
                    String executeAsignacion = proceduresService.executeReAsignacionMesa(mesas.get(i), currentLocal, newLocal, code);
                    jResponse.addProperty("data", executeAsignacion);
                }                
            } catch (Exception e) {
                success = false; 
            }
        }              
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);        
    }
   
    @RequestMapping(value = "execute", method = RequestMethod.GET)
    public String executeProcedure(HttpServletRequest request, HttpServletResponse response) {
        
        JsonObject jResponse = new JsonObject();  
        boolean success = true;         
        
        HttpSession session = request.getSession(false);
        if (session.getAttribute("CODIGO_PROCESO") == null){
            success = false;
            jResponse.addProperty("message", "Sin Conexion.");  
            return new Gson().toJson(jResponse);
        }else{
            try {
                int process = (Integer) session.getAttribute("CODIGO_PROCESO");
                Opcion currentOption = opcionService.findByEstado(Constants.OPCION_ACTIVA); 
                jResponse.addProperty("message", "Procedimiento Ejecutado.");            
                if(currentOption.getN_ORDEN() == Constants.STEP_LEPA){
                    proceduresService.executeGenerateLepa(getPrincipal(), process);  
                }else if(currentOption.getN_ORDEN() == Constants.STEP_HISTORICO){
                    proceduresService.executeAssignHistory(getPrincipal(), process); 
                }else if(currentOption.getN_ORDEN() == Constants.STEP_REASIGNACI0N_1){
                    proceduresService.executeGenerateManualLepa(getPrincipal(), process);
                }else if(currentOption.getN_ORDEN() == Constants.STEP_HISTORICO_MANUAL){
                    proceduresService.executeAssignHistory2(getPrincipal(), process);
                }else if(currentOption.getN_ORDEN() == Constants.STEP_CONFORMACION_MESAS){
                    proceduresService.executeConformationBdonpe(getPrincipal(), process); 
                }else{
                    success = false;
                    jResponse.addProperty("message", "Procedimiento No Ejecutado.");                
                }            
            } catch (Exception e) {
                success = false;
                jResponse.addProperty("message", "Sin Conexion.");            
            }             
        }                                       
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);        
    }
    @RequestMapping(value = "/execute/status", method = RequestMethod.GET)
    public String statusProcedure() {        
        JsonObject jResponse = new JsonObject();          
        boolean success = false;
        try {
            Opcion currentOption = opcionService.findByEstado(Constants.OPCION_ACTIVA);            
            if(currentOption.getN_PROCEDIMIENTO() != null && currentOption.getN_PROCEDIMIENTO() == 1){
                success = true;                 
                String percentage = proceduresService.getPercentageLepa();
                jResponse.addProperty("percentage", percentage);             
            }
            jResponse.addProperty("type", currentOption.getN_OPCION_PK());
            jResponse.addProperty("name", currentOption.getC_NOMBRE_OPCION());            
            jResponse.addProperty("status", currentOption.getN_PROCEDIMIENTO());            
        } catch (Exception e) {            
            success = false;
            jResponse.addProperty("message", "Error.");
        }        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }
    
    @RequestMapping(value = "/execute/clear", method = RequestMethod.GET)
    public String cleanProcedure() {        
        JsonObject jResponse = new JsonObject();          
        boolean success = true;
        try {
            success = proceduresService.cleanProcedure();
        } catch (Exception e) {
            success = false;            
            jResponse.addProperty("message", "sin conexión");
        }        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }        
        
    @RequestMapping(value = "/execute/validate/{step}", method = RequestMethod.GET)
    public String validateProcedure(@PathVariable("step") int step) {        
        JsonObject jResponse = new JsonObject();          
        boolean success = true;
        try {
            if(step == Constants.STEP_REASIGNACI0N_1){
                String data = proceduresService.validateUbigeos(Constants.EXIST, 2);
                String data2 = proceduresService.validateUbigeos(Constants.EXIST, 4);
                String data3 = proceduresService.validateUbigeos(Constants.DIFERENT, 5);
                
                jResponse.addProperty("data", data);
                jResponse.addProperty("validatelepaManual", data2);
                jResponse.addProperty("ubigeosSinProcesar", data3); 
            }
            if(step == Constants.STEP_CONFORMACION_MESAS){
                String data = proceduresService.validateUbigeos(Constants.EXIST, 2);
                jResponse.addProperty("data", data);                 
            }
        } catch (Exception e) {
            success = false;            
            jResponse.addProperty("message", "sin conexión");
        }        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }  
    
    @RequestMapping(value = "/execute/validate/", method = RequestMethod.GET)
    public String validateUbigeos() {        
        JsonObject jResponse = new JsonObject();          
        boolean success = true;
        try {
            String validacion1 = proceduresService.validateUbigeos(Constants.EXIST, 2);
            String validacion2 = proceduresService.validateUbigeos(Constants.EXIST, 3);
            String validacion3 = proceduresService.validateUbigeos(Constants.EXIST, 4);                       
           
            String validacion4 = proceduresService.validateUbigeos(Constants.DIFERENT, 5);           

            jResponse.addProperty("exist2", validacion1);
            jResponse.addProperty("exist3", validacion2);
            jResponse.addProperty("exist4", validacion3);
            jResponse.addProperty("diferent5", validacion4);

        } catch (Exception e) {
            success = false;            
            jResponse.addProperty("message", "sin conexión");
        }        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }     
    
}
