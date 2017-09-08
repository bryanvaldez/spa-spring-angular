/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.step1;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import pe.gob.onpe.adan.model.adan.Documento;
import pe.gob.onpe.adan.model.adan.Regla;
import pe.gob.onpe.adan.model.adan.TipoSolucion;
import pe.gob.onpe.adan.service.Adan.AsynchronousService;
import pe.gob.onpe.adan.service.Adan.DocumentoService;
import pe.gob.onpe.adan.service.Adan.ReglaService;
import pe.gob.onpe.adan.service.Adan.TipoSolucionService;

/**
 *
 * @author AQuispec
 */
@Controller
@Transactional
@RequestMapping(value = "/reglas/*")
public class ReglasController {

    @Autowired
    TipoSolucionService tipoSolucionService;

    @Autowired
    DocumentoService documentoService;

    @Autowired
    ReglaService reglaService;

    @Autowired
    AsynchronousService asynchronousService;
    
    @RequestMapping("openTipoSolucion")
    public String openTipoSolucion() {
        return "test/tipoSolucion";
    }

    @RequestMapping("openDocumentos")
    public String openDocumentos() {
        return "test/modalDocumentos";
    }
    
    @RequestMapping("openModalReglas")
    public String openModalReglas() {
        return "test/modalReglas";
    }
    
    @RequestMapping("openModalConfig")
    public String openModalConfiguracion() {
        return "test/modalConfiguracion";
    }
    
    @RequestMapping(value = "getAllTipoSolucion", method = RequestMethod.GET)
    public ResponseEntity<List<TipoSolucion>> getAllTipoSolucion() {

        List<TipoSolucion> result = new ArrayList();

        result = tipoSolucionService.findAll();

        if (result == null) {
            return new ResponseEntity<List<TipoSolucion>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<TipoSolucion>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getDocumento", method = RequestMethod.GET)
    public ResponseEntity<List<Documento>> getDocumento() throws ParseException {

        List<HashMap<String, Object>> lista = new ArrayList<>();
        lista = documentoService.findAllDocumento();
        List<Documento> result = new ArrayList();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for (HashMap<String, Object> lista1 : lista) {
            Documento doc = new Documento();
            doc.setId(Integer.parseInt(lista1.get("N_DOCUMENTO_PK").toString()));
            doc.setNombre(lista1.get("C_NOMBRE").toString());
            doc.setModulo(Integer.parseInt(lista1.get("N_MODULO").toString()));
            doc.setFechaCarga(formatter.parse(lista1.get("D_FECHA_CARGA").toString()));
            doc.setResolucion(lista1.get("C_RESOLUCION").toString());
            result.add(doc);
        }

        if (result == null) {
            return new ResponseEntity<List<Documento>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Documento>>(result, HttpStatus.OK);

    }

    @RequestMapping(value = "save", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String save(HttpServletRequest request, @RequestParam("dataDocumento") String dataDoc, @RequestParam("dataTiposSolucion") String dataTiposS) throws IOException {
        HttpSession session = request.getSession(false);
        HttpHeaders headers = new HttpHeaders();
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        JsonParser jp = new JsonParser();

        try {
            Documento doc = new ObjectMapper().readValue(dataDoc, Documento.class);

            File file = (File) session.getAttribute("FILE_REGLAS");
            if (file != null) {
                FileInputStream fis = new FileInputStream(file);
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                byte[] buf = new byte[1024];
                for (int readNum; (readNum = fis.read(buf)) != -1;) {
                    bos.write(buf, 0, readNum);
                }
                doc.setNombre(file.getName());
                doc.setArchivo(bos.toByteArray());
            }
            if (doc.getId() == 0) {
                doc.setId(null);
                doc.setFechaCarga(new Date());
                documentoService.saveDocumento(doc);
            } else {
                if (file != null) {
                    documentoService.updateDocumento(doc);
                } else {
                    documentoService.updateDocumento2(doc);
                }

            }

            JsonArray lstTiposSolucion = (JsonArray) jp.parse(dataTiposS);

            for (int i = 0; i < lstTiposSolucion.size(); i++) {
                TipoSolucion solucion = new TipoSolucion();
                JsonObject item = lstTiposSolucion.get(i).getAsJsonObject();

                TipoSolucion tipoS = new ObjectMapper().readValue(item.toString(), TipoSolucion.class);
                if (tipoS.getId() == 0) {
                    tipoSolucionService.saveTipoSolucion(tipoS);
                } else {
                    tipoSolucionService.updateTipoSolucion(tipoS);
                }
            }

            jResponse.addProperty("message", "Reglas guardada con exito.");
        } catch (Exception e) {
            success = false;
            jResponse.addProperty("message", e.getMessage());
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, e);
        }

        jResponse.addProperty("success", success);

        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "uploadFile", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String uploadFile(HttpServletRequest request, @RequestParam("file") MultipartFile uploadFile) {
        HttpSession session = request.getSession(false);

        Map<String, Object> map = new HashMap<String, Object>();
        Gson gson = new Gson();

        boolean success;
        try {
            String fileName = uploadFile.getOriginalFilename();
            fileName = fileName.replace(FilenameUtils.getExtension(fileName), FilenameUtils.getExtension(fileName).toLowerCase());
            File convFile = new File(fileName);
            convFile.createNewFile();
            FileOutputStream fos = new FileOutputStream(convFile);
            fos.write(uploadFile.getBytes());
            fos.close();
            session.setAttribute("FILE_REGLAS", convFile);

            success = true;
        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
            success = false;
        }

        map.put("success", success);
        return gson.toJson(map);
    }

    @RequestMapping(value = "getAllReglas", method = RequestMethod.GET)
    public ResponseEntity<List<Regla>> getAllReglas() {

        List<Regla> result = new ArrayList();

        result = reglaService.finAllRegla();

        if (result == null) {
            return new ResponseEntity<List<Regla>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Regla>>(result, HttpStatus.OK);
    }   
    
    @RequestMapping(value = "saveTipoSolucion", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String saveTipoSolucion(HttpServletRequest request, @RequestParam("tipoSolucion") String data, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
        //HttpSession session = request.getSession(false);
        //HttpHeaders headers = new HttpHeaders();
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        boolean newTipoSolucion = false;

        try {
            TipoSolucion tipoSolucion = new ObjectMapper().readValue(data, TipoSolucion.class);
            String pathImg = "/static/img/soluciones/";
            if (tipoSolucion.getId() == 0) {
                newTipoSolucion = true;
                tipoSolucion.setRutaImagen(pathImg + tipoSolucion.getAlias() + ".jpg");
            }
            tipoSolucionService.updateTipoSolucion(tipoSolucion);

            if (file != null) {
                ServletContext sc = request.getSession(false).getServletContext();

                String fullPath = sc.getRealPath(pathImg);
                //String pathToFile = sc.getResource(pathImg).getPath();
                File convFile = null;
                if (newTipoSolucion) {
                    convFile = new File(fullPath + "/" + tipoSolucion.getAlias() + ".jpg");
                } else {
                    convFile = new File(fullPath + "/" + tipoSolucion.getRutaImagen().replace(pathImg, ""));
                }
                convFile.createNewFile();
                FileOutputStream fos = new FileOutputStream(convFile);
                fos.write(file.getBytes());
                fos.close();
            }
            asynchronousService.executeVistaSeccionLocal();
            asynchronousService.executeVistaSeccionMesa();
            jResponse.addProperty("message", "Tipo Solucion guardado con exito.");
        } catch (Exception e) {
            success = false;
            jResponse.addProperty("message", e.getMessage());
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, e);
        }

        jResponse.addProperty("success", success);

        return new Gson().toJson(jResponse);
    }
    
    @RequestMapping(value = "verArchivo/{codRegla}/{title}", method = RequestMethod.GET)
    public void generateFVDoc(HttpServletRequest request, @PathVariable("codRegla") int idDoc, HttpServletResponse response) {
        try {
            ServletContext sc = request.getSession(false).getServletContext();
            Documento doc = documentoService.findById(idDoc);

            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "inline; filename=" + doc.getNombre());
            response.setContentLength(doc.getArchivo().length);
            ServletOutputStream outStream = response.getOutputStream();
            outStream.write(doc.getArchivo(), 0, doc.getArchivo().length);
            outStream.flush();
            outStream.close();

        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);           
        }

    }
}
