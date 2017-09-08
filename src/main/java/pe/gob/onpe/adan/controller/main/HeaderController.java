/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.model.adan.Opcion;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.service.Adan.AsynchronousService;
import pe.gob.onpe.adan.service.Adan.OpcionService;
import pe.gob.onpe.adan.service.Admin.ProcesoService;

/**
 *
 * @author MArrisueno
 */
@Controller
@RequestMapping(value = "/header/*")
public class HeaderController {

    @Autowired
    OpcionService opcionService;

    @Autowired
    AsynchronousService asynchronousService;

    @Autowired
    ProcesoService procesoService;

    @RequestMapping("retroceder")
    public String openRetroceder() {
        return "main/modalRetroceder";
    }

    @RequestMapping(value = "options", method = RequestMethod.GET)
    public ResponseEntity<List> findOptions() {
        List list = opcionService.findAllOpcionModule();
        if (list.isEmpty()) {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List>(list, HttpStatus.OK);
    }

    @RequestMapping(value = "/executeProcessOption", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<?> process(HttpServletRequest request, @RequestParam("option") int option) throws InterruptedException, Exception {

        boolean success = false;

        HttpSession session = request.getSession(false);
        int idProceso = (Integer) session.getAttribute("CODIGO_PROCESO");

        success = asynchronousService.executeReturnModule(getPrincipal(), option, idProceso);
        if (success) {
            Opcion currentOpcion = opcionService.findById(option);
            return new ResponseEntity<Opcion>(currentOpcion, HttpStatus.OK);
        }
        return new ResponseEntity<List<Opcion>>(HttpStatus.NO_CONTENT);
    }

    private String getPrincipal() {
        String userName = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            userName = ((UserDetails) principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }   
}
