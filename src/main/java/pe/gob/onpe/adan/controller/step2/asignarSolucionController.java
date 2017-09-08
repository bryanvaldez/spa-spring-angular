/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.step2;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.model.adan.TipoSolucion;
import pe.gob.onpe.adan.service.Adan.TipoSolucionService;
import pe.gob.onpe.adan.service.Adan.TreeTableService;

/**
 *
 * @author SMamani
 */
@RestController
@RequestMapping(value = "/solucion/*")
public class asignarSolucionController {

    @Autowired
    TipoSolucionService tipoSolucionService;

    @Autowired
    TreeTableService localService;

    @RequestMapping(value = "getTipoSolucion/{estado}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getTipoSolucion(@PathVariable("estado") int estado) {
        ArrayList result = new ArrayList();
        result = localService.getTipoSolucion(estado);
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getAllTipoSolucion", method = RequestMethod.GET)
    public ResponseEntity<List<TipoSolucion>> getAllTipoSolucion() {

        List<TipoSolucion> result = new ArrayList();

        result = tipoSolucionService.findAllByEstado(1);

        if (result == null) {
            return new ResponseEntity<List<TipoSolucion>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<TipoSolucion>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getChildren/{idPadre}/{tipo}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getChildren(@PathVariable("idPadre") String idPadre, @PathVariable("tipo") String tipo) {
        ArrayList result = new ArrayList();
        switch (tipo) {
            case "1":
                result = localService.getChildrenTotal(idPadre);
                break;
            case "2":
                result = localService.getChildrenCCPP(idPadre);
                break;
            case "3":
                result = localService.getChildrenNoCCPP(idPadre);
                break;
        }
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getChildrenFiltro/{id}/{idPadre}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getChildrenFiltro(@PathVariable("id") String id, @PathVariable("idPadre") String idPadre) {
        System.out.println("test");
        ArrayList result = new ArrayList<>();
        result = localService.getChildrenFiltro(id, idPadre);
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getFiltroMasivo/{id}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getFiltroMasivo(@PathVariable("id") String id) {
        ArrayList result = new ArrayList<>();
        result = localService.getFiltroMasivo(id);
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getLocalesAutocomplete/{value}/{tipo}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getLocalesAutocomplete(@PathVariable("value") String value, @PathVariable("tipo") String tipo) {
        ArrayList result = new ArrayList<>();
        result = localService.getLocalesAutocomplete(value, tipo);
        if (result.isEmpty()) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getParent/{id}/{tipo}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getParent(@PathVariable("id") String id, @PathVariable("tipo") String tipo) {
        System.out.println("test");
        ArrayList result = new ArrayList<>();
        switch (tipo) {
            case "1":
                result = localService.getParentTotal(id);
                break;
            case "2":
                result = localService.getParentCCPP(id);
                break;
            case "3":
                result = localService.getParentNoCCPP(id);
                break;
        }
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getValidacion/{solucion}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getValidacion(@PathVariable("solucion") int solucion) {
        ArrayList result = new ArrayList<>();
        result = localService.getValidacion(solucion);
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "excuteVista/{tipo}/{solucion}", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String excuteVista(HttpServletRequest request, @PathVariable("tipo") String tipo, @PathVariable("solucion") String solucion) throws IOException {
        JsonObject jResponse = new JsonObject();
        int success = 0;
        try {
            int opc = Integer.parseInt(tipo);
            int sol = Integer.parseInt(solucion);
            localService.executeVista(opc, sol);
            success = 1;
            jResponse.addProperty("success", success);
        } catch (Exception e) {
            jResponse.addProperty("success", success);
        }

        return new Gson().toJson(jResponse);

    }

    @RequestMapping(value = "updateSolucionTree/{solucion}/{opcion}/{filtroA}/{filtroS}", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String updateSolucionTree(HttpServletRequest request,
            @PathVariable("solucion") int solucion,
            @PathVariable("opcion") String opcion,
            @PathVariable("filtroA") String filtroA,
            @PathVariable("filtroS") String filtroS,
            @RequestParam("dataSeleccion") String datos) throws IOException {
        JsonParser jp = new JsonParser();
        JsonObject jResponse = new JsonObject();
        boolean success = false;
        try {
            JsonArray lstSeleccion = (JsonArray) jp.parse(datos);
            for (int i = 0; i < lstSeleccion.size(); i++) {
                JsonObject item = lstSeleccion.get(i).getAsJsonObject();                
                if (item.get("tipo").getAsString().equals("ubigeo")) {
                    localService.updateSolucionMasiva(item.get("idPadre").getAsString(), solucion, item.get("level").getAsString(), item.get("idPadre").getAsString(), opcion, filtroA, filtroS);
                } else {
                    switch (opcion) {
                        case "1":
                            localService.updateSolucionTotal(item.get("id").getAsString(), solucion);
                            break;
                        case "2":
                            localService.updateSolucionCCPP(item.get("id").getAsString(), solucion);
                            break;
                        case "3":
                            localService.updateSolucionNoCCPP(item.get("id").getAsString(), solucion);
                            break;
                    }
                }
            }
            success = true;
        } catch (Exception e) {
        }

        jResponse.addProperty("success", success);

        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "updateSolucionMasivaTree/{idPadre}/{solucion}/{nivel}/{nacion}/{filtroTipo}/{filtroAsignados}/{filtroSolucion}", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String updateSolucionMasivaTree(HttpServletRequest request,
            @PathVariable("idPadre") String idPadre,
            @PathVariable("solucion") int solucion,
            @PathVariable("nivel") String nivel,
            @PathVariable("nacion") String nacion,
            @PathVariable("filtroTipo") String filtroTipo,
            @PathVariable("filtroAsignados") String filtroAsignados,
            @PathVariable("filtroSolucion") String filtroSolucion) throws IOException {
        JsonObject jResponse = new JsonObject();
        int success = 0;
        try {
            localService.updateSolucionMasiva(idPadre, solucion, nivel, nacion, filtroTipo, filtroAsignados, filtroSolucion);
            success = 1;
        } catch (Exception e) {

        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "updateSolucion/{id}/{solucion}/{tipo}", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String updateSolucion(HttpServletRequest request, @PathVariable("id") String id, @PathVariable("solucion") int solucion, @PathVariable("tipo") String tipo) throws IOException {
        JsonObject jResponse = new JsonObject();
        int success = 0;
        try {
            switch (tipo) {
                case "1":
                    localService.updateSolucionTotal(id, solucion);
                    success = 1;
                    break;
                case "2":
                    localService.updateSolucionCCPP(id, solucion);
                    success = 1;
                    break;
                case "3":
                    localService.updateSolucionNoCCPP(id, solucion);
                    success = 1;
                    break;
            }
        } catch (Exception e) {

        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);

    }
}
