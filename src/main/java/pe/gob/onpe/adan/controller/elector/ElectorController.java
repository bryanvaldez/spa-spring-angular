/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.elector;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.model.adan.LocalHistorico;
import pe.gob.onpe.adan.model.adan.Padron;
import pe.gob.onpe.adan.service.Adan.AsignacionLocalService;
import pe.gob.onpe.adan.service.Adan.PadronService;
import pe.gob.onpe.adan.service.Adan.ReporteElectorService;

/**
 *
 * @author bvaldez
 */
@RestController
public class ElectorController {
    
    @Autowired
    PadronService padronService;  
    
    @Autowired
    ReporteElectorService reporteElectorService; 

    @Autowired
    AsignacionLocalService asignacionLocalService;      
    
    @RequestMapping(value = "/elector/{dni}", method = RequestMethod.GET)
    public String findByElector(@PathVariable("dni") String dni) {
        
        Gson gson = new Gson();
        JsonParser jsonParser = new JsonParser();
        JsonObject jResponse = new JsonObject();
        
        boolean success = true;
        try {
            Padron elector = padronService.findElectorByDni(dni);
            if(elector.getN_VIP()==null){elector.setN_VIP(0);} 
            String preferencial = padronService.findElectorByPreference(dni);
                    
            JsonObject electorPadron = (JsonObject)jsonParser.parse(gson.toJson(elector));
            electorPadron.addProperty("PREFERENCIAL", preferencial);
            
            jResponse.add("data", electorPadron);
            
        } catch (Exception e) {            
            success = false;
            jResponse.addProperty("message", "Error carganfo datos de Elector.");
        }
        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }
    @RequestMapping(value = "/elector/historico/{dni}", method = RequestMethod.GET)
    public ResponseEntity<List<LocalHistorico>> findByElectorHistorical(@PathVariable("dni") String dni) {
        
        List<HashMap<String, Object>> historico = new ArrayList<>();        
        Padron elector = padronService.findElectorByDni(dni);
        if(reporteElectorService.isAssignedMesaElector(dni)){
            historico = reporteElectorService.getElectorByHistoricoAndMesa(dni);
        }else{
            historico = reporteElectorService.getElectorByHistoricoAndLocal(dni);
        }

        List<LocalHistorico> response = new ArrayList<>();
        
        for (HashMap<String, Object> object  : historico) {
            LocalHistorico l = new LocalHistorico();
            l.setC_NOMBRE(object.get("C_NOMBRE") == null?"":object.get("C_NOMBRE").toString()); 
            l.setC_MESA(object.get("C_MESA") == null?"":object.get("C_MESA").toString());
            l.setC_UBIGEO(object.get("C_UBIGEO")==null?"":object.get("C_UBIGEO").toString());
            l.setC_LOCAL(object.get("C_LOCAL")==null?"":object.get("C_LOCAL").toString());
            l.setC_ACTUAL(object.get("C_ACTUAL")==null?"0":object.get("C_ACTUAL").toString());
            if(object.get("C_UBIGEO").toString().equalsIgnoreCase(elector.getUBIGEO())){
                l.setC_DESCRIPCION("Coincide con el Ubigeo Actual.");
                l.setC_ESTADO("1");
            }else{
                l.setC_DESCRIPCION("No Coincide con el Ubigeo Actual.");
                l.setC_ESTADO("0");
            }
            response.add(l);
            
        }
        return new ResponseEntity<List<LocalHistorico>>(response, HttpStatus.OK); 
    }
    @RequestMapping(value = "/elector/{dni}/{status}", method = RequestMethod.GET)
    public String updateElectorVip(@PathVariable("dni") String dni, @PathVariable("status") boolean status) {        
        
        Gson gson = new Gson();
        JsonObject jResponse = new JsonObject();
        JsonParser jsonParser = new JsonParser();     
        boolean success = true;
        try {
            Padron elector = padronService.findElectorByDni(dni);  
            int a = status?1:0;
            elector.setN_VIP(a);
            padronService.updatePadron(elector);
            JsonObject electorPadron = (JsonObject)jsonParser.parse(gson.toJson(elector));
            jResponse.add("data", electorPadron);
            
        } catch (Exception e) {            
            success = false;
            jResponse.addProperty("message", "No se pudo actualizo el Elector.");
        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }         
}
