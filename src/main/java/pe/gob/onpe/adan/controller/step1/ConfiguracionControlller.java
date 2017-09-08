/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.step1;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.model.adan.Configuracion;
import pe.gob.onpe.adan.model.adan.Parametro;
import pe.gob.onpe.adan.service.Adan.ConfiguracionService;
import pe.gob.onpe.adan.service.Adan.ParametroService;

/**
 *
 * @author bvaldez
 */
@RestController
@Transactional
@RequestMapping(value = "/step1/*")
public class ConfiguracionControlller {
    
    @Autowired
    public ConfiguracionService configuracionService;
    
    @Autowired
    ParametroService parametroService;
                
    
    @RequestMapping(value = "configuracion/getConfig", method = RequestMethod.GET)
    public ResponseEntity<List<Configuracion>> getConfiguration() {
        List<Configuracion> result = configuracionService.findAllConfiguracion();
        if (result == null) {
            return new ResponseEntity<List<Configuracion>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Configuracion>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "configuracion/save", method = RequestMethod.POST)   
    public String save(@RequestParam("dataConfig") String data){ 

        JsonObject jResponse = new JsonObject();
        boolean success = true;
        JsonParser jp = new JsonParser();        
        try {
            JsonArray lstConfig = (JsonArray) jp.parse(data);
            for (int i = 0; i < lstConfig.size(); i++) {
                Configuracion config = new Configuracion();
                JsonObject item = lstConfig.get(i).getAsJsonObject();
                config.setId(item.get("id").getAsInt());
                config.setDescripcion(item.get("descripcion").getAsString());
                if (item.get("dato").isJsonArray()) {
                    config.setDato(item.get("dato").getAsJsonArray().toString());                    
                } else {
                    config.setDato(item.get("dato").getAsString());
                }
                config.setCantColumnas(item.get("cantColumnas").getAsInt());
                config.setColumRpt(item.get("columRpt").getAsString());
                configuracionService.updateConfiguracion(config);
            }
            jResponse.addProperty("message", "Configuracion guardada con exito.");
        } catch (Exception e) {
            success = false;
            jResponse.addProperty("message", e.getMessage());
        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }  
    
    @RequestMapping(value = "configuracion/getRangoEdad", method = RequestMethod.GET)
    public ResponseEntity<List<Parametro>> getRangoEdad() {

        List<Parametro> result = new ArrayList();

        result = parametroService.findAllByTableAndColumn("TAB_CONFIGURACION", "C_DATO");

        if (result == null) {
            return new ResponseEntity<List<Parametro>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Parametro>>(result, HttpStatus.OK);
    }
    
}
