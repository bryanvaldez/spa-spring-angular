/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.step2;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;
import com.google.gson.internal.StringMap;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.commons.io.FilenameUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.helper.Dato;
import pe.gob.onpe.adan.helper.ValidadorCampoUnico;
import pe.gob.onpe.adan.model.adan.CabeceraCarga;
import pe.gob.onpe.adan.model.adan.Conexion;
import pe.gob.onpe.adan.model.adan.Configuracion;
import pe.gob.onpe.adan.model.adan.DetalleCarga;
import pe.gob.onpe.adan.model.adan.Uploader;
import pe.gob.onpe.adan.model.adan.VersionPadron;
import pe.gob.onpe.adan.service.Adan.CabeceraCargaService;
import pe.gob.onpe.adan.service.Adan.CargaService;
import pe.gob.onpe.adan.service.Adan.AsynchronousService;
import pe.gob.onpe.adan.service.Adan.ConexionService;
import pe.gob.onpe.adan.service.Adan.ConfiguracionService;
import pe.gob.onpe.adan.service.Adan.DetalleCargaService;
import pe.gob.onpe.adan.service.Adan.PadronService;
import pe.gob.onpe.adan.service.Adan.VersionPadronService;
import pe.gob.onpe.excelvalidator.ValidationManager;
import pe.gob.onpe.excelvalidator.model.DetalleFormato;
import pe.gob.onpe.reportgenerator.enums.HeaderType;
import pe.gob.onpe.reportgenerator.iface.IExcelGeneratorService;
import pe.gob.onpe.reportgenerator.iface.IFactoryService;
import pe.gob.onpe.reportgenerator.iface.impl.FactoryService;
import pe.gob.onpe.reportgenerator.model.Report;

/**
 *
 * @author marrisueno
 */
@RestController
@RequestMapping(value = "/carga/*")
public class CargaController {

    @Autowired
    CargaService cargaService;

    @Autowired
    CabeceraCargaService cabeceraCargaService;

    @Autowired
    DetalleCargaService detalleCargaService;

    @Autowired
    AsynchronousService asynchronousService;

    @Autowired
    ConexionService conexionService;

    @Autowired
    PadronService padronService;

    @Autowired
    ConfiguracionService configuracionService;

    @Autowired
    VersionPadronService versionPadronService;

    @RequestMapping(value = "get/{tipo}", method = RequestMethod.GET)
    public String getLastUpload(@PathVariable("tipo") int tipo) {
        Map<String, Object> map = new HashMap<>();
        Gson gson = new Gson();

        if (tipo == Constants.TIPO_CARGA_PADRON || tipo == Constants.TIPO_CARGA_ETLV || tipo == Constants.TIPO_CARGA_SIGE || tipo == Constants.TIPO_CARGA_RAE || tipo == Constants.TIPO_CARGA_PREF) {
            Conexion conexion = conexionService.findById(tipo);
            map.put("carga", conexion);
        } else {
            CabeceraCarga carga = cabeceraCargaService.getLastUpload(tipo);
            map.put("carga", carga);
        }

        return gson.toJson(map);
    }

    @RequestMapping(value = "getVersion", method = RequestMethod.GET)
    public String getVersionPadron() {
        Map<String, Object> map = new HashMap<>();
        Gson gson = new Gson();

        VersionPadron version = versionPadronService.get();
        map.put("version", version);

        return gson.toJson(map);
    }

    @RequestMapping(value = "/validate", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public Map validate(HttpServletRequest request, @RequestParam("file") MultipartFile uploadFile, @RequestParam("tipoCarga") int tipoCarga) {
        HttpSession session = request.getSession(false);
        Map<String, Object> map = new HashMap<>();
        Gson gson = new Gson();
        List<DetalleFormato> listUploadColumns = new ArrayList<>();
        List<Uploader> list = cargaService.listColumns(tipoCarga);
        for (Uploader uploader : list) {
            DetalleFormato upload = new DetalleFormato();
            upload.setId(uploader.getId());
            upload.setColumnaExcel(uploader.getExcelColumn());
            upload.setColumnaTabla(uploader.getTableColumn());
            upload.setUnico(uploader.getUnique());
            upload.setValidacion(uploader.getValidation());
            upload.setMensajeValidacion(uploader.getMessageValidation());
            upload.setComentario(uploader.getComment());
            upload.setObligatorio(uploader.getObligatory());

            listUploadColumns.add(upload);
        }

        String json = "";
        String message = "";
        boolean success;
        try {
            String fileName = uploadFile.getOriginalFilename();
            fileName = fileName.replace(FilenameUtils.getExtension(fileName), FilenameUtils.getExtension(fileName).toLowerCase());
            File convFile = new File(fileName);
            convFile.createNewFile();
            FileOutputStream fos = new FileOutputStream(convFile);
            fos.write(uploadFile.getBytes());
            fos.close();
            session.setAttribute("FILE", convFile);

            ValidationManager validationManager = new ValidationManager(listUploadColumns, convFile);
            json = validationManager.validate();
            JsonParser jsonParser = new JsonParser();
            String jsonDetail = gson.toJson(((JsonObject) jsonParser.parse(json)).get("message"));
            if (tipoCarga == Constants.TIPO_CARGA_ODPE) {
                session.setAttribute("TEMPLATE_DETAIL_CARGA_ODPE", jsonDetail);
            } else if (tipoCarga == Constants.TIPO_CARGA_LOCAL) {
                session.setAttribute("TEMPLATE_DETAIL_CARGA_LOCAL", jsonDetail);
            } else if (tipoCarga == Constants.TIPO_CARGA_PAGINA) {
                session.setAttribute("TEMPLATE_DETAIL_CARGA_PAGINA", jsonDetail);
            } else if (tipoCarga == Constants.TIPO_CARGA_CONADIS) {
                session.setAttribute("TEMPLATE_DETAIL_CARGA_CONADIS", jsonDetail);
            }
            success = true;
        } catch (Exception ex) {
            Logger.getLogger(CargaController.class.getName()).log(Level.SEVERE, null, ex);
            success = false;
            message = ex.getMessage();
        }
        map.put("columns", gson.toJson(listUploadColumns));
        map.put("json", json);
        map.put("success", success);
        map.put("message", message);
        return map;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String save(HttpServletRequest request, @RequestParam("cabCarga") String cabCarga, @RequestParam("tipoCarga") int tipoCarga) {

        HttpSession session = request.getSession(false);
        int codigoProceso = (Integer) session.getAttribute("CODIGO_PROCESO");

        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = (JsonObject) jsonParser.parse(cabCarga);

        CabeceraCarga cabeceraCarga = new CabeceraCarga();
        cabeceraCarga.setObservacionDetalle(jsonObject.get("observacionDetalle").toString());
        cabeceraCarga.setTipoCarga(tipoCarga);
        cabeceraCarga.setJsonExcel(jsonObject.get("jsonExcel").toString());
        cabeceraCarga.setNombreArchivo(jsonObject.get("nombreArchivo").toString());

        SimpleDateFormat sdfDate = new SimpleDateFormat("dd/MM/yyyy");
        Date now = new Date();
        cabeceraCarga.setFechaCarga(sdfDate.format(now));
        String message = "";
        boolean success;
        int procces = 0; //empty

        try {
            File file = (File) session.getAttribute("FILE");
            FileInputStream fis = new FileInputStream(file);
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            byte[] buf = new byte[1024];
            for (int readNum; (readNum = fis.read(buf)) != -1;) {
                bos.write(buf, 0, readNum);
            }
            cabeceraCarga.setArchivoExcel(bos.toByteArray());

            CabeceraCarga lastUpload = cabeceraCargaService.getLastUpload(cabeceraCarga.getId());

            List<StringMap> jsonDetalle = new Gson().fromJson(cabeceraCarga.getObservacionDetalle(), List.class);
            List<DetalleFormato> listColumns = new ArrayList<>();
            List<Uploader> list = cargaService.listColumns(cabeceraCarga.getTipoCarga());
            for (Uploader uploader : list) {
                DetalleFormato upload = new DetalleFormato();
                upload.setId(uploader.getId());
                upload.setColumnaExcel(uploader.getExcelColumn());
                upload.setColumnaTabla(uploader.getTableColumn());
                upload.setUnico(uploader.getUnique());
                upload.setValidacion(uploader.getValidation());
                upload.setMensajeValidacion(uploader.getMessageValidation());
                upload.setComentario(uploader.getComment());
                upload.setObligatorio(uploader.getObligatory());

                listColumns.add(upload);
            }
            List<StringMap> jsonExcel = new Gson().fromJson(cabeceraCarga.getJsonExcel(), List.class);
            List<StringMap> jsonExcelCopy = new Gson().fromJson(cabeceraCarga.getJsonExcel(), List.class);

            List<StringMap> jsonExcelLastUpload = new ArrayList<>();
            List<JsonObject> jsonObservacionDetalleLastUpload = new ArrayList<>();
            List<StringMap> jsonFullObservationLastUpload = new ArrayList<>();

            if (lastUpload != null) {
                jsonExcelLastUpload = new Gson().fromJson(lastUpload.getJsonExcel(), List.class);
                jsonObservacionDetalleLastUpload = new Gson().fromJson(lastUpload.getObservacionDetalle(), List.class);
                jsonFullObservationLastUpload = new Gson().fromJson(lastUpload.getObservacionDetalle(), List.class);
            }

            List<String> ubigeos = null;
            ValidadorCampoUnico fieldValidator = new ValidadorCampoUnico(listColumns, jsonExcelLastUpload, jsonFullObservationLastUpload);
            if (tipoCarga == Constants.TIPO_CARGA_ODPE) {
                ubigeos = padronService.listUbigeosPadron();
            } else if (tipoCarga == Constants.TIPO_CARGA_LOCAL) {
                ubigeos = padronService.listUbigeosOdpe();
            }
            fieldValidator.setUbigeos(ubigeos);
            fieldValidator.validarDetalle(tipoCarga, jsonDetalle, jsonObservacionDetalleLastUpload);
            fieldValidator.validarData(tipoCarga, jsonExcelCopy, jsonExcel, jsonObservacionDetalleLastUpload);
            cabeceraCarga.setJsonExcel(new Gson().toJson(fieldValidator.getJsonExcelUltimaCarga()));

            cabeceraCarga.setObservacionDetalle(new Gson().toJson(fieldValidator.getJsonObservacionDetalleUltimaCarga()));
            cabeceraCarga.setObservacionGeneral(new Gson().toJson(fieldValidator.getJsonObservacionGeneralUltimaCarga()));

            cabeceraCarga.setEstadoFinal(1);
            cabeceraCarga.setUsuario(getPrincipal());

            cabeceraCargaService.insertHeader(cabeceraCarga);
            Conexion conexion = conexionService.findById(tipoCarga);
            conexion.setD_AUD_FECHA_ACTUALIZACION(now);
            conexionService.updateProceso(conexion);

            if (jsonDetalle.size() == 0) {
                Gson g = new Gson();
                JsonArray array = (JsonArray) jsonParser.parse(cabeceraCarga.getJsonExcel());
                ArrayList<DetalleCarga> listDetalle = new ArrayList<DetalleCarga>();

                for (JsonElement element : array) {
                    DetalleCarga detalleCarga = g.fromJson(element, DetalleCarga.class);

                    detalleCarga.setN_TIPO_CARGA(cabeceraCarga.getTipoCarga());
                    detalleCarga.setN_CARGA(cabeceraCarga.getId());

                    listDetalle.add(detalleCarga);
                }

                detalleCargaService.insertBody(listDetalle);

                if (asynchronousService.executeProcess(tipoCarga, getPrincipal(), codigoProceso)) {
                    procces = 1; // true
                } else {
                    procces = 2; // false 
                }
                if (tipoCarga == Constants.TIPO_CARGA_ODPE) {
                    if (asynchronousService.executeProcess(Constants.TIPO_CARGA_SECCION, getPrincipal(), codigoProceso)) {
                        procces = 1; // true
                    } else {
                        procces = 2; // false 
                    }
                }

            }

            cabeceraCarga.setArchivoExcel(new byte[1]);
            success = true;
        } catch (IOException | JsonSyntaxException ex) {
            Logger.getLogger(CargaController.class.getName()).log(Level.SEVERE, null, ex);
            success = false;
            message = ex.getMessage();
        }

        Map<String, Object> map = new HashMap<>();
        map.put("cabeceraCarga", cabeceraCarga);
        map.put("success", success);
        map.put("message", message);
        map.put("procces", procces);

        return new Gson().toJson(map);
    }

    @RequestMapping(value = "/downloadTemplateDetail/{tipoCarga}", method = RequestMethod.GET)
    public void downloadTemplateValidation(HttpServletRequest request, HttpServletResponse response, @PathVariable("tipoCarga") int tipoCarga) {
        try {
            HttpSession session = request.getSession(false);
            String json = "";
            if (tipoCarga == Constants.TIPO_CARGA_ODPE) {
                json = session.getAttribute("TEMPLATE_DETAIL_CARGA_ODPE").toString();
            } else if (tipoCarga == Constants.TIPO_CARGA_LOCAL) {
                json = session.getAttribute("TEMPLATE_DETAIL_CARGA_LOCAL").toString();
            } else if (tipoCarga == Constants.TIPO_CARGA_PAGINA) {
                json = session.getAttribute("TEMPLATE_DETAIL_CARGA_PAGINA").toString();
            } else if (tipoCarga == Constants.TIPO_CARGA_CONADIS) {
                json = session.getAttribute("TEMPLATE_DETAIL_CARGA_CONADIS").toString();
            }
            Map<String, String> customHeaders = new HashMap<>();
            List<Uploader> list = cargaService.listColumns(tipoCarga);
            for (Uploader uploader : list) {
                customHeaders.put(uploader.getTableColumn(), uploader.getExcelColumn());
            }
            Report report = new Report();
            report.setLabel("DETALLE");
            IFactoryService factory = new FactoryService();

            IExcelGeneratorService excelGenerator = factory.createExcelGenerator(report, json, null, HeaderType.NONE, customHeaders, false);
            HSSFWorkbook workbook = excelGenerator.create();

            response.setContentType("application/vnd.ms-excel");

            String attachment = String.format("attachment; filename=%s", "DETALLE_VALIDACION_PLANTILLA.xls");
            response.setHeader("Content-Disposition", attachment);
            workbook.write(response.getOutputStream());
        } catch (IOException ex) {
            Logger.getLogger(CargaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/downloadDetail/{tipoCarga}/{tipo}", method = RequestMethod.GET)
    public void downloadDetail(HttpServletResponse response, @PathVariable("tipoCarga") int tipoCarga, @PathVariable("tipo") int tipo) {
        try {
            String json = "", nombreArchivo = "";
            CabeceraCarga carga = cabeceraCargaService.getLastUpload(tipoCarga);
            Report report = new Report();
            if (tipo == 1) {
                json = carga.getJsonExcel();
                json = json.replaceAll(",\"C_VALIDACION\":\"\"", "");
                report.setLabel("CORRECTOS");
                nombreArchivo = "CORRECTOS";
            } else {
                json = carga.getObservacionDetalle();
                report.setLabel("OBSERVADOS");
                nombreArchivo = "OBSERVADOS";
            }
            report.setDescription("REPORTE");
            
            Map<String, String> customHeaders = new HashMap<>();
            List<Uploader> list = cargaService.listColumns(tipoCarga);
            for (Uploader uploader : list) {
                customHeaders.put(uploader.getTableColumn(), uploader.getExcelColumn());
            }

            IFactoryService factory = new FactoryService();

            IExcelGeneratorService excelGenerator = factory.createExcelGenerator(report, json, null, HeaderType.NONE, customHeaders, false);
            HSSFWorkbook workbook = excelGenerator.create();

            response.setContentType("application/vnd.ms-excel");

            String attachment = String.format("attachment; filename=%s", "DETALLE_PLANTILLA_" + nombreArchivo + ".xls");
            response.setHeader("Content-Disposition", attachment);
            workbook.write(response.getOutputStream());
        } catch (IOException ex) {
            Logger.getLogger(CargaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/download/{tipoCarga}", method = RequestMethod.GET)
    public void downloadTemplate(HttpServletRequest request, @PathVariable("tipoCarga") int tipoCarga, HttpServletResponse response) {
        try {
            List<DetalleFormato> listColumns = new ArrayList<>();
            List<Uploader> list = cargaService.listColumns(tipoCarga);
            for (Uploader uploader : list) {
                DetalleFormato upload = new DetalleFormato();
                upload.setId(uploader.getId());
                upload.setColumnaExcel(uploader.getExcelColumn());
                upload.setColumnaTabla(uploader.getTableColumn());
                upload.setUnico(uploader.getUnique());
                upload.setValidacion(uploader.getValidation());
                upload.setMensajeValidacion(uploader.getMessageValidation());
                upload.setComentario(uploader.getComment());
                upload.setObligatorio(uploader.getObligatory());

                listColumns.add(upload);
            }

            String gson = new Gson().toJson(listColumns);
            String fileName = "PLANTILLA ODPE UBIGEO";
            if (tipoCarga == Constants.TIPO_CARGA_LOCAL) {
                fileName = "PLANTILLA LOCALES";
            }
            if (tipoCarga == Constants.TIPO_CARGA_PAGINA) {
                fileName = "PLANTILLA PAGINA";
            }
            if (tipoCarga == Constants.TIPO_CARGA_CONADIS) {
                fileName = "PLANTILLA CONADIS";
            }

            IFactoryService factory = new FactoryService();
            IExcelGeneratorService excelGenerator = factory.createExcelGenerator(fileName, gson);

            HSSFWorkbook workbook = excelGenerator.create();

            response.setContentType("application/vnd.ms-excel");

            String attachment = String.format("attachment; filename=%s.xls", fileName);
            response.setHeader("Content-Disposition", attachment);
            workbook.write(response.getOutputStream());
        } catch (IOException ex) {
            Logger.getLogger(CargaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "/updateState", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String updateState(HttpServletRequest request, @RequestParam("type") int type, @RequestParam("id") int idProcess, @RequestParam("status") boolean status) {
        boolean success = false;
        Conexion conexion = conexionService.findById(idProcess);
        if (conexion != null) {
            if (type == 0) {
                conexion.setN_TIPO_CONEXION((status == true) ? 0 : 1);
            } else {
                conexion.setN_ESTADO((status == true) ? 0 : 1);
            }
            conexionService.updateProceso(conexion);
            success = true;
        }

        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        return new Gson().toJson(map);
    }

    @RequestMapping(value = "/process", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String process(HttpServletRequest request, @RequestParam("id") int idProcess, @RequestParam("url") String url) throws InterruptedException, ExecutionException, Exception {

        boolean success = false;

        HttpSession session = request.getSession(false);
        int codigoProceso = (Integer) session.getAttribute("CODIGO_PROCESO");

        if (idProcess == Constants.TIPO_CARGA_PADRON || idProcess == Constants.TIPO_CARGA_ETLV || idProcess == Constants.TIPO_CARGA_SIGE || idProcess == Constants.TIPO_CARGA_RAE || idProcess == Constants.TIPO_CARGA_PREF) {
            Conexion conexion = conexionService.findById(idProcess);
            if (idProcess == Constants.TIPO_CARGA_SIGE) {
                success = asynchronousService.verifyProcess(idProcess);
            } else {
                if (url.equals("undefined")) {
                    success = asynchronousService.executeProcess(idProcess, getPrincipal(), codigoProceso);
                } else {
                    success = asynchronousService.executeService(idProcess, url);
                }
            }

            if (success) {
                Date now = new Date();
                conexion.setD_AUD_FECHA_ACTUALIZACION(now);
                conexionService.updateProceso(conexion);
            }
        }

        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        return new Gson().toJson(map);
    }

    @RequestMapping(value = "/getEstado", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String getEstado(HttpServletRequest request, @RequestParam("id") int id) {

        boolean estado = true;

        Configuracion config = configuracionService.findById(Constants.ID_CONFIG_DISC);
        if (config != null) {
            if (config.getDato() != null) {
                Gson g = new Gson();
                JsonParser jsonParser = new JsonParser();
                JsonArray array = (JsonArray) jsonParser.parse(config.getDato());
                for (JsonElement d : array) {
                    Dato dato = g.fromJson(d, Dato.class);
                    if (dato.getId() == id) {
                        estado = (dato.getEstado() == 1) ? true : false;
                        break;
                    }
                }
            }
        }

        Map<String, Object> map = new HashMap<>();
        map.put("status", estado);
        return new Gson().toJson(map);

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
