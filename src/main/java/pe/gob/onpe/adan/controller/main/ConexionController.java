/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import crypto.util.encription.Crypto;
import java.sql.Connection;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import pe.gob.onpe.adan.model.adan.Conexion;
import pe.gob.onpe.adan.service.Adan.ConexionService;
import pe.gob.onpe.onpe.security.OnpeKeys;

/**
 *
 * @author bvaldez
 */
@RestController
public class ConexionController {
    
    @Autowired
    ConexionService conexionService; 
    
    @RequestMapping(value="/conexion/test/", method = RequestMethod.POST)
    public String test(@RequestParam("file") MultipartFile file) throws Exception{
        
        JsonObject jResponse = new JsonObject();
        
        boolean success = true;
        
        String data = readData(file);         
        if(data == null){
            success = false;
            jResponse.addProperty("message", "Formato de archivo incorrecto.");
            jResponse.addProperty("success", success);
            return new Gson().toJson(jResponse);
        }        
        String creadential = decryptData(data);
        if(creadential == null){
            success = false;
            jResponse.addProperty("message", "Fomato de encriptación incorrecto.");
            jResponse.addProperty("success", success);
            return new Gson().toJson(jResponse);
        }        
        boolean status = validarCredenciales(creadential);        
        if(!status){
            success = false;
            jResponse.addProperty("message", "Credenciales incorrectas.");
            jResponse.addProperty("success", success);
            return new Gson().toJson(jResponse);
        }else{
            jResponse.addProperty("message", "Credenciales correctas.");
            jResponse.addProperty("credential", data);            
        }
        
        jResponse.addProperty("success", success);
        
        return new Gson().toJson(jResponse);
    }    
    
    @RequestMapping(value = "/conexion/", method = RequestMethod.GET)
    public ResponseEntity<List<Conexion>> allProcess() {
        List<Conexion> list = conexionService.findAllConexion();
        if (list.isEmpty()) {
            return new ResponseEntity<List<Conexion>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Conexion>>(list, HttpStatus.OK);
    }    
    
    @RequestMapping(value = "/conexion/", method = RequestMethod.POST)
    public String save(@RequestBody Conexion conexion) {

        JsonObject jResponse = new JsonObject();
        boolean success = true;

        Date date = new Date();
        if(conexion.getN_CONEXION_PK() != null){ 
            conexion.setD_AUD_FECHA_MODIFICACION(date);
            conexion.setC_AUD_USUARIO_MODIFICACION(getPrincipal());
            conexionService.updateProceso(conexion);
            jResponse.addProperty("message", "Conexión actualizado Correctamente.");                
        }else{
            conexion.setD_AUD_FECHA_CREACION(date);
            conexion.setC_AUD_USUARIO_CREACION(getPrincipal());
            conexionService.saveConexion(conexion);
            jResponse.addProperty("message", "Conexión creada Correctamente.");                
        }

        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }    
    
    public boolean validarCredenciales(String conection) throws Exception{
        Connection cnn = null;
        boolean success = true;               
        DriverManagerDataSource ds = new DriverManagerDataSource();
        ds.setDriverClassName("oracle.jdbc.OracleDriver"); 
        ds.setUrl(conection);        
        try {
            cnn = ds.getConnection();
            cnn.close();            
            if(cnn == null){ 
                success = false;  
            }                       
        } catch (Exception e) {
            success = false; 
        }
        return success; 
    }        

    public String decryptData(String data) throws Exception{                        
        String creadential = null;        
        try {
            Crypto crypto = Crypto.getInstance(OnpeKeys.ENCRYPT);
            creadential = crypto.decrypt(data);
        } catch (Exception e) {
            return null;
        }
        return creadential;
    }      
    public String readData(MultipartFile file) throws Exception{          
        String[] rows = null;        
        try {            
            byte[] bytes = file.getBytes();
            String completeData = new String(bytes);
            rows = completeData.split("#");                                                               
        } catch (Exception e) {
            return null;
        }
        return rows[0];
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
