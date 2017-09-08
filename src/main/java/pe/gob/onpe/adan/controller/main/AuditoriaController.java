/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author AQuispec
 */
@RestController
@Transactional
@RequestMapping(value = "/auditoria/*")
public class AuditoriaController {
    
    
    @RequestMapping(value = "save", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String save(HttpServletRequest request, @RequestParam("data") String data) {
        
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        String usuario = null;
        try {
            HttpSession session = request.getSession(false);
            usuario = (String) session.getAttribute("USUARIO");
            
            jResponse.addProperty("message", "Auditoria guardada con exito.");
        } catch (Exception e) {
            success = false;
            jResponse.addProperty("message", e.getMessage());
            Logger.getLogger(AuditoriaController.class.getName()).log(Level.SEVERE, null, e);
        }

        jResponse.addProperty("success", success);

        return new Gson().toJson(jResponse);
    }

}
