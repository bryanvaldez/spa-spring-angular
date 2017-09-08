/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.local;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import pe.gob.onpe.adan.model.adan.Local;
import pe.gob.onpe.adan.service.Adan.AsignacionLocalService;
import pe.gob.onpe.adan.service.Adan.LocalService;
import pe.gob.onpe.adan.service.Adan.MesaService;
import pe.gob.onpe.adan.service.Adan.TipoSolucionService;


/**
 *
 * @author marrisueno
 */
@RestController
@RequestMapping(value="/local/*")
public class LocalController {
    
    @Autowired
    LocalService localService;  
    
    @Autowired
    TipoSolucionService solucionService; 
    
    @Autowired
    MesaService mesaService;
    
    @Autowired
    AsignacionLocalService asignacionLocalService;
    
//    private String ubigeo;
    
//    @RequestMapping("/init")
//    public String init(HttpServletRequest request, @RequestParam("ubigeo") String ubigeo) {
//        this.ubigeo = ubigeo;
//        return ubigeo;
//    }
//    
//    @RequestMapping("/nuevo")
//    public ModelAndView index(HttpServletRequest request) {
//        ModelAndView view;        
//        view = new ModelAndView("mantenimiento/localDashboard");         
//        return view;
//    }
    
//    @RequestMapping(value="/getUbigeo", method = RequestMethod.GET)
//    @ResponseBody
//    public String getUbigeo(HttpServletRequest request){
//        String ubigeo = this.ubigeo;        
//        return ubigeo;
//    }
    
    @RequestMapping(value="/getSoluciones", method = RequestMethod.GET)
    @ResponseBody
    public List getSoluciones(HttpServletRequest request){        
        List soluciones = solucionService.findAllByEstado(Constants.ESTADO_SOLUCION_ACTIVO);        
        return soluciones;
    }
    
    @RequestMapping(value="/getSoluciones/{type}", method = RequestMethod.GET)
    @ResponseBody
    public List getSolucionesIn(HttpServletRequest request, @PathVariable("type") String type){        
        List<Integer> list = new ArrayList<>();
        for (String val : type.split(",")) {
            list.add(Integer.parseInt(val));
        }        
        List soluciones = solucionService.findAllByIdIn(list);        
        return soluciones;
    }
           
    @RequestMapping(value = "/save", method = RequestMethod.POST, headers = "Accept=application/json", produces = "application/json;charset=UTF-8")
    @ResponseBody
    public String save(HttpServletRequest request, @RequestParam("local") String slocal) {                    
        
        Gson g = new Gson();
        Local local = g.fromJson(slocal, Local.class);
        Date date = new Date();        
        
        String executeDisabled = "", executeEnabled = "";
        
        boolean success;        
        try {
            if (local.getN_LOCAL_PK() != null) {
                local.setC_AUD_USUARIO_MODIFICACION(getPrincipal());
                local.setD_AUD_FECHA_MODIFICACION(date);                
            } else {
                local.setC_AUD_USUARIO_CREACION(getPrincipal());                
                local.setD_AUD_FECHA_CREACION(date);
            }            
            localService.saveLocal(local);
            
            //local.setC_NOMBRE(new String(local.getC_NOMBRE().getBytes("ISO-8859-1"), "UTF-8"));            
//            if (local.getN_LOCAL_PK() != null) {
//                if (local.getN_ESTADO() == 0) {
//                    executeDisabled = localService.disabledLocal(getPrincipal(), local.getC_CODIGO());                    
//                } else {
//                    executeEnabled = localService.enabledLocal(getPrincipal(), local.getC_CODIGO());  
//                }
//            }
            success = true;
        } catch (Exception ex) {            
            success = false;            
        }
                                
        Map<String, Object> map = new HashMap<>();
        map.put("data", local);        
        map.put("success", success); 
        map.put("disabled", executeDisabled);
        map.put("enabled", executeEnabled);
        
        return new Gson().toJson(map);
    }   
    
    @RequestMapping(value = "/disabled", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String disabled(HttpServletRequest request, @RequestParam("code") String code) {                    
        
        String executeDisabled = "";
                   
        try {               
            executeDisabled = localService.disabledLocal(getPrincipal(), code);             
        } catch (Exception ex) {            
            ex.printStackTrace();
        }
                                
        Map<String, Object> map = new HashMap<>();
        map.put("data", executeDisabled);               
        
        return new Gson().toJson(map);
    }
    
    @RequestMapping(value = "/enabled", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String enabled(HttpServletRequest request, @RequestParam("code") String code) {                    
                                  
        String executeEnabled = "";
                     
        try {                              
            executeEnabled = localService.enabledLocal(getPrincipal(), code);             
        } catch (Exception ex) {            
            ex.printStackTrace();          
        }
                                
        Map<String, Object> map = new HashMap<>();
        map.put("data", executeEnabled);              
        
        return new Gson().toJson(map);
    }
        
    @RequestMapping(value = "/ubigeo/{ubigeo}/{code}", method = RequestMethod.GET)
    public ResponseEntity<List<Local>> allProcess(@PathVariable("ubigeo") String ubigeo, @PathVariable("code") String code) {
        if (code.length() == 8) {
            AsignacionLocal asignacionLocal = asignacionLocalService.findByDni(code);
            if (asignacionLocal != null) {
                code = asignacionLocal.getC_LOCAL();
            }
        }        
        List<Local> list = localService.findAllLocalByUbigeo(ubigeo, code);
        if (list.isEmpty()) {
            return new ResponseEntity<List<Local>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Local>>(list, HttpStatus.OK);
  
    }    
    
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public String getLocalById(@PathVariable("id") String id) {
        
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        JsonObject jResponse = new JsonObject();
        
        boolean success = true;
        try {
            Local local = localService.findLocalByCode(id);                    
            JsonObject localJ = (JsonObject)jsonParser.parse(gson.toJson(local));            
            
            jResponse.add("data", localJ);
            
        } catch (Exception e) {            
            success = false;
            jResponse.addProperty("message", "Error cargando datos de Local.");
        }
        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }
    
    @RequestMapping(value = "/mesa/{mesa}", method = RequestMethod.GET)
    public String getLocalByMesa(@PathVariable("mesa") String id) {
        
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        JsonObject jResponse = new JsonObject();
        
        boolean success = true;
        try {            
            String idLocal = mesaService.findMesaById(id);            
            Local local = localService.findLocalByCode(idLocal);                    
            JsonObject localJ = (JsonObject)jsonParser.parse(gson.toJson(local));            
            
            jResponse.add("data", localJ);
            
        } catch (Exception e) {            
            success = false;
            jResponse.addProperty("message", "Error cargando datos de Local.");
        }
        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }
    
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
}
