/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.step1;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
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
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.ClientAnchor;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Drawing;
import org.apache.poi.ss.usermodel.Picture;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTable.XWPFBorderType;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTcPr;
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
import org.springframework.web.multipart.MultipartFile;
import pe.gob.onpe.adan.helper.CopySheets;
import pe.gob.onpe.adan.helper.PrintUtil;
import pe.gob.onpe.adan.model.adan.DetFichaTecnica;
import pe.gob.onpe.adan.model.adan.FichaTecnica;
import pe.gob.onpe.adan.model.adan.Parametro;
import pe.gob.onpe.adan.model.adan.Reporte;
import pe.gob.onpe.adan.model.adan.TipoAutoridad;
import pe.gob.onpe.adan.model.adan.TipoEleccion;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.model.report.RDetalleFicha;
import pe.gob.onpe.adan.service.Adan.DetFichaTecnicaService;
import pe.gob.onpe.adan.service.Adan.FichaTecnicaService;
import pe.gob.onpe.adan.service.Adan.ParametroService;
import pe.gob.onpe.adan.service.Adan.ReporteService;
import pe.gob.onpe.adan.service.Adan.TipoAutoridadService;
import pe.gob.onpe.adan.service.Adan.TipoEleccionService;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.reportgenerator.enums.Align;
import pe.gob.onpe.reportgenerator.enums.HeaderType;
import pe.gob.onpe.reportgenerator.enums.ParameterType;
import pe.gob.onpe.reportgenerator.iface.IExcelGeneratorService;
import pe.gob.onpe.reportgenerator.iface.IFactoryService;
import pe.gob.onpe.reportgenerator.iface.impl.FactoryService;
import pe.gob.onpe.reportgenerator.model.Parameter;
import pe.gob.onpe.reportgenerator.model.Report;

/**
 *
 * @author AQuispec
 */
@Controller
@Transactional
@RequestMapping(value = "/fichaTecnica/*")
public class FichaController {

    @Autowired
    FichaTecnicaService fichaTecnicaService;

    @Autowired
    TipoEleccionService tipoEleccionService;

    @Autowired
    TipoAutoridadService tipoAutoridadService;

    @Autowired
    ParametroService parametroService;

    @Autowired
    DetFichaTecnicaService detFichaTecnicaService;

    @Autowired
    ReporteService reporteService;

    @Autowired
    ProcesoService procesoService;

    @RequestMapping("openFichaTecnicaFinal")
    public String openFichaTecnicaFinal() {
        return "test/fichaTecnicaFinal";
    }

    @RequestMapping(value = "getAllFichaTecnica", method = RequestMethod.GET)
    public ResponseEntity<List<FichaTecnica>> getAllFichaTecnica() throws ParseException {

        List<HashMap<String, Object>> lista = new ArrayList<>();
        lista = fichaTecnicaService.findAllByEstado(1);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<FichaTecnica> result = new ArrayList();

        for (HashMap<String, Object> lista1 : lista) {
            FichaTecnica ft = new FichaTecnica();
            ft.setId(Integer.parseInt(lista1.get("N_FICHA_TECNICA_PK").toString()));
            ft.setVersion(lista1.get("C_VERSION").toString());
            ft.setFechaVersion(formatter.parse(lista1.get("D_FECHA_VERSION").toString()));
            ft.setResolucion(lista1.get("C_RESOLUCION").toString());
            ft.setNombreArchivo(lista1.get("C_NOMBRE_ARCHIVO").toString());
            ft.setTipoEleccion(Integer.parseInt(lista1.get("N_TIPO_ELECCION").toString()));
            ft.setAnioEleccion(Integer.parseInt(lista1.get("N_ANIO_ELECCION").toString()));
            ft.setNombreCorto(lista1.get("C_NOMBRE_CORTO").toString());
            ft.setPeriodicidad(Integer.parseInt(lista1.get("N_PERIODICIDAD").toString()));
            ft.setFechaEleccion(formatter.parse(lista1.get("D_FECHA_ELECCION").toString()));
            ft.setEstado(Integer.parseInt(lista1.get("N_ESTADO").toString()));
            ft.setMunicipalidades(Integer.parseInt(lista1.get("N_MUNICIPALIDADES").toString()));
            ft.setFechaArchivo(formatter.parse(lista1.get("D_FECHA_ARCHIVO").toString()));

            result.add(ft);
        }

        if (result == null) {
            return new ResponseEntity<List<FichaTecnica>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<FichaTecnica>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getAllTipoEleccion", method = RequestMethod.GET)
    public ResponseEntity<List<TipoEleccion>> getAllTipoEleccion() {

        List<TipoEleccion> result = new ArrayList();

        result = tipoEleccionService.findAllByEstado(1);

        if (result == null) {
            return new ResponseEntity<List<TipoEleccion>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<TipoEleccion>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getAllTipoAutoridad", method = RequestMethod.GET)
    public ResponseEntity<List<TipoAutoridad>> getAllTipoAutoridad() {

        List<TipoAutoridad> result = new ArrayList();

        result = tipoAutoridadService.findAllByEstado(1);

        if (result == null) {
            return new ResponseEntity<List<TipoAutoridad>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<TipoAutoridad>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getOptionsPeriodicidad", method = RequestMethod.GET)
    public ResponseEntity<List<Parametro>> getOptionsPeriodicidad() {

        List<Parametro> result = new ArrayList();

        result = parametroService.findAllByTableAndColumn("TAB_FICHA_TECNICA", "N_PERIODICIDAD");

        if (result == null) {
            return new ResponseEntity<List<Parametro>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Parametro>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getFichaById/{fichaTecnica}", method = RequestMethod.GET)
    public ResponseEntity<FichaTecnica> getFichaById(@PathVariable("fichaTecnica") int idFichaTecnica) {

        FichaTecnica ficha = fichaTecnicaService.findById(idFichaTecnica);

        if (ficha == null) {
            return new ResponseEntity<FichaTecnica>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<FichaTecnica>(ficha, HttpStatus.OK);
    }

    @RequestMapping(value = "getAllDetFichaTecnica/{fichaTecnica}", method = RequestMethod.GET)
    public ResponseEntity<List<DetFichaTecnica>> getAllDetFichaTecnica(@PathVariable("fichaTecnica") int idFichaTecnica) {

        List<DetFichaTecnica> result = new ArrayList();

        result = detFichaTecnicaService.findAllByDetFichaTecnica(idFichaTecnica);

        if (result == null) {
            return new ResponseEntity<List<DetFichaTecnica>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<DetFichaTecnica>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "getDateToServer", method = RequestMethod.GET)
    public ResponseEntity<Object> getDateToServer() {
        Object result = null;
        result = fichaTecnicaService.getDateServer();

        if (result == null) {
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Object>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "save1", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String save1(HttpServletRequest request, @RequestParam("dataFichaTecnica") String dataFT, @RequestParam("dataDetFichaTecnica") String dataDetalleFT) throws IOException {
        HttpSession session = request.getSession(false);
        HttpHeaders headers = new HttpHeaders();
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        JsonParser jp = new JsonParser();

        try {
            FichaTecnica ft = new ObjectMapper().readValue(dataFT, FichaTecnica.class);

            File file = (File) session.getAttribute("FILE_FICHA_TECNICA");
            if (file != null) {
                FileInputStream fis = new FileInputStream(file);
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                byte[] buf = new byte[1024];
                for (int readNum; (readNum = fis.read(buf)) != -1;) {
                    bos.write(buf, 0, readNum);
                }
                ft.setNombreArchivo(file.getName());
                ft.setArchivo(bos.toByteArray());
            }

            ft.setEstado(1);
            if (ft.getId() == 0) {
                ft.setId(null);
                DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
                ft.setVersion(df.format(ft.getFechaVersion()));
                ft.setFechaArchivo(new Date());
                ft = fichaTecnicaService.saveFichaTecnica(ft);
            } else {
                ft.setFechaArchivo(new Date());
                if (file != null) {
                    fichaTecnicaService.updateFichaTecnica(ft);
                } else {
                    fichaTecnicaService.updateFichaTecnica2(ft);
                }

            }

            JsonArray lstDetalle = (JsonArray) jp.parse(dataDetalleFT);

            for (int i = 0; i < lstDetalle.size(); i++) {
                DetFichaTecnica det = new DetFichaTecnica();
                JsonObject item = lstDetalle.get(i).getAsJsonObject();
                det.setId(item.get("id").getAsInt());
                det.setFichaTecnica(ft.getId());
                det.setAutoridad(item.get("autoridad").getAsInt());
                det.setCantAutoridad(item.get("cantAutoridad").getAsInt());
                det.setEstado(item.get("estado").getAsInt());

                if (det.getId() == 0) {
                    det.setId(null);
                    if (det.getEstado() == 1) {
                        detFichaTecnicaService.saveDetFichaTecnica(det);
                    }
                } else {
                    detFichaTecnicaService.updateDetFichaTecnica(det);
                }

            }

            jResponse.addProperty("message", "Ficha Técnica guardada con exito.");
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
            session.setAttribute("FILE_FICHA_TECNICA", convFile);

            success = true;
        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
            success = false;
        }

        map.put("success", success);
        return gson.toJson(map);
    }

    @RequestMapping(value = "verArchivo/{codFichaTecnica}/{title}", method = RequestMethod.GET)
    public void verArchivo(HttpServletRequest request, @PathVariable("codFichaTecnica") int idFT, HttpServletResponse response) {
        try {
            ServletContext sc = request.getSession(false).getServletContext();
            FichaTecnica ft = fichaTecnicaService.findById(idFT);

            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "inline; filename=" + ft.getNombreArchivo());
            response.setContentLength(ft.getArchivo().length);
            ServletOutputStream outStream = response.getOutputStream();
            outStream.write(ft.getArchivo(), 0, ft.getArchivo().length);
            outStream.flush();
            outStream.close();

        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    @RequestMapping(value = "getFichaTecnicaFinal", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public Map getFichaTecnicaFinal(HttpServletRequest request) throws ParseException {

        Map<String, Object> result = null;
        FichaTecnica ft = getFichaTecnicaFromMap(fichaTecnicaService.findFichaTecnicaConfig());

        if (ft != null) {
            result = new HashMap<>();
            result.put("fichaTecnica", ft);
            TipoEleccion te = tipoEleccionService.findById(ft.getTipoEleccion());
            result.put("tipoEleccion", te);
            List<DetFichaTecnica> detFT = detFichaTecnicaService.findAllByDetFichaTecnica(ft.getId());
            result.put("detalleFT", detFT);
            List<TipoAutoridad> lstTipoAutoridad = tipoAutoridadService.findAllByEstado(1);
            result.put("tiposAutoridad", lstTipoAutoridad);
            List<Parametro> params = parametroService.findAllByTableAndColumn("TAB_FICHA_TECNICA", "N_PERIODICIDAD");
            for (Parametro param : params) {
                if (param.getnCodigo() == ft.getPeriodicidad()) {
                    result.put("periodicidad", param.getDescripcion());
                }
            }
            result.put("datos", fichaTecnicaService.getSPFichaTecnicaFinal());
        }
        return result;
    }

    @RequestMapping(value = "generateFVDoc/{codExpediente}", method = RequestMethod.GET)
    public void generateFVDoc(HttpServletRequest request, @PathVariable("codExpediente") int codExpediente, HttpServletResponse response) {
        try {
            Map<String, Object> result = null;
            FichaTecnica ft = getFichaTecnicaFromMap(fichaTecnicaService.findFichaTecnicaConfig());

            if (ft != null) {

                TipoEleccion te = tipoEleccionService.findById(ft.getTipoEleccion());
                List<DetFichaTecnica> detFT = detFichaTecnicaService.findAllByDetFichaTecnica(ft.getId());
                List<TipoAutoridad> lstTipoAutoridad = tipoAutoridadService.findAllByEstado(1);
                List<Parametro> params = parametroService.findAllByTableAndColumn("TAB_FICHA_TECNICA", "N_PERIODICIDAD");

                XWPFDocument document = new XWPFDocument();

                XWPFParagraph paragraph = document.createParagraph();
                XWPFRun run = paragraph.createRun();
                run.setFontSize(11);
                run.setFontFamily("Arial");
                run.setText("FICHA TÉCNICA");
                run.addBreak();

                for (Parametro param : params) {
                    if (param.getnCodigo() == ft.getPeriodicidad()) {

                    }
                }
                HashMap<String, Object> datos = (HashMap<String, Object>) fichaTecnicaService.getSPFichaTecnicaFinal();
            }

        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "generateFVPdf", method = RequestMethod.GET)
    public void generateFVPdf(HttpServletRequest request, HttpServletResponse response) {
        try {
            HttpSession session = request.getSession(false);
            Map<String, Object> result = null;
            FichaTecnica ft = getFichaTecnicaFromMap(fichaTecnicaService.findFichaTecnicaConfig());

            if (ft != null) {

                TipoEleccion te = tipoEleccionService.findById(ft.getTipoEleccion());
                List<DetFichaTecnica> detFT = detFichaTecnicaService.findAllByDetFichaTecnica(ft.getId());
                List<TipoAutoridad> lstTipoAutoridad = tipoAutoridadService.findAllByEstado(1);
                List<Parametro> params = parametroService.findAllByTableAndColumn("TAB_FICHA_TECNICA", "N_PERIODICIDAD");

                HashMap<String, Object> datos = (HashMap<String, Object>) fichaTecnicaService.getSPFichaTecnicaFinal();

                List<RDetalleFicha> lstReporte = new ArrayList<>();
                int count = 1;
                for (DetFichaTecnica det : detFT) {

                    for (TipoAutoridad autoridad : lstTipoAutoridad) {
                        if (det.getAutoridad() == autoridad.getId()) {
                            if (count == 1) {
                                RDetalleFicha rDet = new RDetalleFicha("Autoridades a Elegir", det.getCantAutoridad() + " " + autoridad.getDescripcion());
                                count++;
                                lstReporte.add(rDet);
                            } else {
                                RDetalleFicha rDet = new RDetalleFicha("", det.getCantAutoridad() + " " + autoridad.getDescripcion());
                                lstReporte.add(rDet);
                            }
                        }
                    }

                }

                ServletContext sc = request.getSession(false).getServletContext();
                InputStream inStream = null;// 
                HashMap<String, Object> parameters = new HashMap();

                if (te.getDistrital() != null) {
                    inStream = sc.getResourceAsStream("/WEB-INF/jasper/fichaTecnica2.jasper");
                    parameters.put("municipalidades", ft.getMunicipalidades() + " " + te.getDistrital());
                } else {
                    inStream = sc.getResourceAsStream("/WEB-INF/jasper/fichaTecnica.jasper");
                }
                String proceso = (String) session.getAttribute("PROCESO");
                parameters.put("TITULO", "FICHA TÉCNICA - " + proceso);
                parameters.put("tipoEleccion", te.getDescripcion());
                for (Parametro param : params) {
                    if (param.getnCodigo() == ft.getPeriodicidad()) {
                        parameters.put("periodicidad", param.getDescripcion());
                    }
                }
                parameters.put("LOGO_ONPE", sc.getResourceAsStream("/static/img/logo_onpe.jpg"));
                parameters.put("fechaEleccion", ft.getFechaEleccion());
                parameters.put("distritos", datos.get("DISTRITOS"));
                parameters.put("variable", ft.getNombreCorto());
                parameters.put("odpe", datos.get("ODPES"));
                parameters.put("electoresHabiles", datos.get("EH"));
                parameters.put("mesasSufragio", datos.get("MESAS"));
                parameters.put("localesVotacion", datos.get("LV"));
                parameters.put("fechaActualizacion", ft.getFechaVersion());
                byte[] bytes = PrintUtil.generarPdf(parameters, lstReporte, inStream);

                response.setContentType("application/pdf");
                response.setHeader("Content-Disposition", "inline; filename=FICHA TECNICA_" + ft.getNombreCorto() + ".pdf");
                response.setContentLength(bytes.length);
                ServletOutputStream outStream = response.getOutputStream();
                outStream.write(bytes, 0, bytes.length);
                outStream.flush();
                outStream.close();

            }

        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "downloadExcel", method = RequestMethod.GET)
    public void downloadExcel(HttpServletRequest request, HttpServletResponse response) {
        try {
            String url = "";
            HttpSession session = request.getSession(false);
            String nProceso = "";
            if (session.getAttribute("CODIGO_PROCESO") != null) {
                int id = (Integer) session.getAttribute("CODIGO_PROCESO");
                nProceso = session.getAttribute("PROCESO").toString();
                Proceso proceso = procesoService.findById(id);
                url = proceso.getC_CONEXION();
            }

            HSSFWorkbook workbook = new HSSFWorkbook();
            HSSFWorkbook workbook1 = generateWorkbook("RPT_ADA_05", url, nProceso);
            HSSFWorkbook workbook2 = generateWorkbook("RPT_ADA_06", url, nProceso);
            HSSFWorkbook workbook3 = generateWorkbook("RPT_ADA_07", url, nProceso);

            CopySheets.copySheets(workbook.createSheet(workbook1.getSheetName(0)), workbook1.getSheetAt(0));
            CopySheets.copySheets(workbook.createSheet(workbook2.getSheetName(0)), workbook2.getSheetAt(0));
            CopySheets.copySheets(workbook.createSheet(workbook3.getSheetName(0)), workbook3.getSheetAt(0));

//            try {
//
//                ServletContext sc = request.getSession(false).getServletContext();
//                InputStream inputStream = sc.getResourceAsStream("/static/img/logo_onpe.jpg");
//                byte[] bytes = IOUtils.toByteArray(inputStream);
//                int pictureIdx1 = workbook.addPicture(bytes, Workbook.PICTURE_TYPE_PNG);
//                int pictureIdx2 = workbook.addPicture(bytes, Workbook.PICTURE_TYPE_PNG);
//                int pictureIdx3 = workbook.addPicture(bytes, Workbook.PICTURE_TYPE_PNG);
//                inputStream.close();
//                CreationHelper helper = workbook.getCreationHelper();
//                Drawing drawing1 = workbook.getSheetAt(2).createDrawingPatriarch();
//                Drawing drawing2 = workbook.getSheetAt(1).createDrawingPatriarch();
//                Drawing drawing3 = workbook.getSheetAt(0).createDrawingPatriarch();
//                ClientAnchor anchor1 = helper.createClientAnchor();
//                anchor1.setCol1(9);
//                anchor1.setRow1(0);
//                ClientAnchor anchor2 = helper.createClientAnchor();
//                anchor2.setCol1(4);
//                anchor2.setRow1(0);
//                ClientAnchor anchor3 = helper.createClientAnchor();
//                anchor3.setCol1(2);
//                anchor3.setRow1(0);
//                Picture pict1 = drawing1.createPicture(anchor1, pictureIdx1);
//                Picture pict2 = drawing2.createPicture(anchor2, pictureIdx2);
//                Picture pict3 = drawing3.createPicture(anchor3, pictureIdx3);
//                pict1.resize();
//                pict2.resize();
//                pict3.resize();
//            } catch (Exception e) {
//                System.out.println(e);
//            }

            response.setContentType("application/vnd.ms-excel");
            String fileName1 = "RPT_RESUMEN ODPE";
            fileName1 = fileName1.replace(" ", "_");
            String attachment1 = String.format("attachment; filename=%s.xls", fileName1);
            response.setHeader("Content-Disposition", attachment1);
            workbook.write(response.getOutputStream());

//            String tipo = "distrito";
//            switch (tipo) {
//                case "odpe":
//                    String fileName1 = "RPT_RESUMEN ODPE";
//                    fileName1 = fileName1.replace(" ", "_");
//                    String attachment1 = String.format("attachment; filename=%s.xls", fileName1);
//                    response.setHeader("Content-Disposition", attachment1);
//                    workbook1.write(response.getOutputStream());
//                    break;
//                case "distrito":
//                    String fileName2 = "RPT_RESUMEN DISTRITO";
//                    fileName2 = fileName2.replace(" ", "_");
//                    String attachment2 = String.format("attachment; filename=%s.xls", fileName2);
//                    response.setHeader("Content-Disposition", attachment2);
//                    workbook2.write(response.getOutputStream());
//                    break;
//                case "local":
//                    String fileName3 = "RPT_RESUMEN LOCAL";
//                    fileName3 = fileName3.replace(" ", "_");
//                    String attachment3 = String.format("attachment; filename=%s.xls", fileName3);
//                    response.setHeader("Content-Disposition", attachment3);
//                    workbook3.write(response.getOutputStream());
//                    break;
//            }
        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @RequestMapping(value = "downloadWord", method = RequestMethod.GET)
    public void downloadWord(HttpServletRequest request, HttpServletResponse response) {
        try {
            HttpSession session = request.getSession(false);
            FichaTecnica ft = getFichaTecnicaFromMap(fichaTecnicaService.findFichaTecnicaConfig());
            DateFormat dfD = new SimpleDateFormat("dd/MM/yyyy");
            String fechaVersion = dfD.format(ft.getFechaVersion());

            if (ft != null) {

                TipoEleccion te = tipoEleccionService.findById(ft.getTipoEleccion());
                List<Parametro> params = parametroService.findAllByTableAndColumn("TAB_FICHA_TECNICA", "N_PERIODICIDAD");
                List<DetFichaTecnica> detFT = detFichaTecnicaService.findAllByDetFichaTecnica(ft.getId());
                List<TipoAutoridad> lstTipoAutoridad = tipoAutoridadService.findAllByEstado(1);
                HashMap<String, Object> datos = (HashMap<String, Object>) fichaTecnicaService.getSPFichaTecnicaFinal();
                String proceso = (String) session.getAttribute("PROCESO");
                String periocidad = "";
                String municipalidades = "";
                for (Parametro param : params) {
                    if (param.getnCodigo() == ft.getPeriodicidad()) {
                        periocidad = param.getDescripcion();
                    }
                }
                if (te.getDistrital() != null) {
                    municipalidades = ft.getMunicipalidades() + " " + te.getDistrital();
                } else {
                }

                XWPFDocument document = new XWPFDocument();

                ServletContext sc = request.getSession(false).getServletContext();
                InputStream inputStream = sc.getResourceAsStream("/static/img/logo_onpe.jpg");
                byte[] bytes = IOUtils.toByteArray(inputStream);
                document.addPictureData(bytes, XWPFDocument.PICTURE_TYPE_JPEG);

                XWPFParagraph paragraph = document.createParagraph();
                XWPFRun run = paragraph.createRun();
                run.setText("FICHA TÉCNICA - " + proceso);
                run.setBold(true);
                paragraph.setAlignment(ParagraphAlignment.CENTER);

                XWPFTable table = document.createTable();
                table.setInsideHBorder(XWPFBorderType.SINGLE, 4, 0, "000000");
                table.setInsideVBorder(XWPFBorderType.SINGLE, 4, 0, "000000");

                XWPFTableRow row1 = table.getRow(0);
                row1.getCell(0).setText("Tipo de Elección");
                row1.getCell(0).setColor("D5DCE4");
                row1.addNewTableCell().setText(te.getDescripcion());

                XWPFTableRow row2 = table.createRow();
                row2.getCell(0).setText("Periodicidad");
                row2.getCell(0).setColor("D5DCE4");
                row2.getCell(1).setText(periocidad);

                XWPFTableRow row3 = table.createRow();
                row3.getCell(0).setText("Total de distritos participantes");
                row3.getCell(0).setColor("D5DCE4");
                row3.getCell(1).setText(datos.get("DISTRITOS").toString());

                if (te.getDistrital() != null) {
                    XWPFTableRow row4 = table.createRow();
                    row4.getCell(0).setText("Municipalidades");
                    row4.getCell(0).setColor("D5DCE4");
                    row4.getCell(1).setText(municipalidades);
                }

                XWPFTableRow row4 = table.createRow();
                row4.getCell(0).setText("Autoridades a Elegir");
                row4.getCell(0).setColor("D5DCE4");
                row4.getCell(1).removeParagraph(0);
                XWPFParagraph paragraph1 = row4.getCell(1).addParagraph();
                XWPFRun run1 = paragraph1.createRun();

                int count = 0;
                for (DetFichaTecnica det : detFT) {
                    for (TipoAutoridad autoridad : lstTipoAutoridad) {
                        if (det.getAutoridad() == autoridad.getId()) {
                            if (count != 0) {
                                run1.addBreak();
                            }
                            run1.setText(det.getCantAutoridad() + " " + autoridad.getDescripcion());
                            count++;
                        }
                    }
                }

                XWPFTableRow row5 = table.createRow();
                row5.getCell(0).setText("Fecha de la Elección");
                row5.getCell(0).setColor("D5DCE4");
                row5.getCell(1).setText(dfD.format(ft.getFechaEleccion()));

                XWPFTableRow row6 = table.createRow();
                row6.getCell(0).setText("Variable");
                row6.getCell(0).setColor("D5DCE4");
                row6.getCell(1).setText(ft.getNombreCorto());

                XWPFTableRow row7 = table.createRow();
                row7.getCell(0).setText("ODPE");
                row7.getCell(0).setColor("D5DCE4");
                row7.getCell(1).setText(datos.get("ODPES").toString());

                XWPFTableRow row8 = table.createRow();
                row8.getCell(0).setText("Electores Hábiles");
                row8.getCell(0).setColor("D5DCE4");
                row8.getCell(1).setText(datos.get("EH").toString());

                XWPFTableRow row9 = table.createRow();
                row9.getCell(0).setText("Mesas de Sufragio");
                row9.getCell(0).setColor("D5DCE4");
                row9.getCell(1).setText(datos.get("MESAS").toString());

                XWPFTableRow row10 = table.createRow();
                row10.getCell(0).setText("Locales de Votación");
                row10.getCell(0).setColor("D5DCE4");
                row10.getCell(1).setText(datos.get("LV").toString());

                for (int x = 0; x < table.getNumberOfRows(); x++) {
                    XWPFTableRow row = table.getRow(x);
                    int numberOfCell = row.getTableCells().size();
                    for (int y = 0; y < numberOfCell; y++) {
                        XWPFTableCell cell = row.getCell(y);
                        CTTblWidth cellWidth = cell.getCTTc().addNewTcPr().addNewTcW();
                        CTTcPr pr = cell.getCTTc().addNewTcPr();
                        pr.addNewNoWrap();
                        cellWidth.setW(BigInteger.valueOf(4050));
                    }
                }
                XWPFParagraph paragraph2 = document.createParagraph();
                XWPFRun fecha = paragraph2.createRun();
                fecha.addBreak();
                fecha.setText("Actualizado al " + fechaVersion);

                response.setContentType("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                response.setHeader("Content-Disposition", "attachment; filename=BDFicha.docx");
                document.write(response.getOutputStream());
            }
        } catch (Exception ex) {
            Logger.getLogger(FichaController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private FichaTecnica getFichaTecnicaFromMap(List<Map> map) throws ParseException {
        FichaTecnica ft = null;
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for (Map<String, Object> lista1 : map) {
            ft = new FichaTecnica();
            ft.setId(Integer.parseInt(lista1.get("N_FICHA_TECNICA_PK").toString()));
            ft.setVersion(lista1.get("C_VERSION").toString());
            ft.setFechaVersion(formatter.parse(lista1.get("D_FECHA_VERSION").toString()));
            ft.setResolucion(lista1.get("C_RESOLUCION").toString());
            ft.setNombreArchivo(lista1.get("C_NOMBRE_ARCHIVO").toString());
            ft.setTipoEleccion(Integer.parseInt(lista1.get("N_TIPO_ELECCION").toString()));
            ft.setAnioEleccion(Integer.parseInt(lista1.get("N_ANIO_ELECCION").toString()));
            ft.setNombreCorto(lista1.get("C_NOMBRE_CORTO").toString());
            ft.setPeriodicidad(Integer.parseInt(lista1.get("N_PERIODICIDAD").toString()));
            ft.setFechaEleccion(formatter.parse(lista1.get("D_FECHA_ELECCION").toString()));
            ft.setEstado(Integer.parseInt(lista1.get("N_ESTADO").toString()));
            ft.setMunicipalidades(Integer.parseInt(lista1.get("N_MUNICIPALIDADES").toString()));
            ft.setFechaArchivo(formatter.parse(lista1.get("D_FECHA_ARCHIVO").toString()));
        }
        return ft;
    }

    private FichaTecnica getFichaTecnicaReporteFromMap(List<Map> map) throws ParseException {
        FichaTecnica ft = null;
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for (Map<String, Object> lista1 : map) {
            ft = new FichaTecnica();
            ft.setId(Integer.parseInt(lista1.get("N_FICHA_TECNICA_PK").toString()));
            ft.setVersion(lista1.get("C_VERSION").toString());
            ft.setFechaVersion(formatter.parse(lista1.get("D_FECHA_VERSION").toString()));
            ft.setResolucion(lista1.get("C_RESOLUCION").toString());
            ft.setNombreArchivo(lista1.get("C_NOMBRE_ARCHIVO").toString());
            ft.setTipoEleccion(Integer.parseInt(lista1.get("N_TIPO_ELECCION").toString()));
            ft.setAnioEleccion(Integer.parseInt(lista1.get("N_ANIO_ELECCION").toString()));
            ft.setNombreCorto(lista1.get("C_NOMBRE_CORTO").toString());
            ft.setPeriodicidad(Integer.parseInt(lista1.get("N_PERIODICIDAD").toString()));
            ft.setFechaEleccion(formatter.parse(lista1.get("D_FECHA_ELECCION").toString()));
            ft.setEstado(Integer.parseInt(lista1.get("N_ESTADO").toString()));
            ft.setMunicipalidades(Integer.parseInt(lista1.get("N_MUNICIPALIDADES").toString()));
            ft.setFechaArchivo(formatter.parse(lista1.get("D_FECHA_ARCHIVO").toString()));
        }
        return ft;
    }

    private HSSFWorkbook generateWorkbook(String codigoReport, String url, String proceso) throws ParseException {
        FichaTecnica ft = getFichaTecnicaFromMap(fichaTecnicaService.findFichaTecnicaConfig());
        Report report = new Report();
        Reporte reporte = reporteService.findByCodigo(codigoReport);
        report.setId(reporte.getId());
        report.setCode(reporte.getCodigo());
        report.setLabel(reporte.getEtiqueta());
        report.setDescription(reporte.getDescripcion());
        report.setQuery(reporte.getQuery());
        report.setFileName(reporte.getNombreArchivo());
        report.setEstado(reporte.getEstado());
        Report reporteA = new Report();
        Map<String, Parameter> defaultParameters = new HashMap<>();
        Parameter parameter = new Parameter();
        List<Integer> columnsSummary = new ArrayList<>();
        DateFormat dfD = new SimpleDateFormat("dd");
        DateFormat dfM = new SimpleDateFormat("MMMM");
        DateFormat dfA = new SimpleDateFormat("yyyy");
        String fecha = dfD.format(ft.getFechaVersion()) + " de " + dfM.format(ft.getFechaVersion()) + " de " + dfA.format(ft.getFechaVersion());
        switch (codigoReport) {
            case "RPT_ADA_05":
                reporteA.setDescription("Resumen por ODPE");
                reporteA.setLabel("ODPE");
                parameter.setAlign(Align.CENTER);
                parameter.setBold(true);
                parameter.setValue(proceso);
                parameter.setRowNumber(2);
                parameter.setFontSize(9);
                defaultParameters.put("ELECCION", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(false);
                parameter.setValue("Electores hábiles, mesas de sufragio y locales de votación");
                parameter.setRowNumber(3);
                parameter.setFontSize(14);
                defaultParameters.put("Descripcion", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(false);
                parameter.setValue("Información actualizada al " + fecha);
                parameter.setRowNumber(4);
                parameter.setFontColor("RED");
                parameter.setFontSize(10);
                defaultParameters.put("FechaAct", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(true);
                parameter.setValue(reporteA.getDescription().toUpperCase());
                parameter.setRowNumber(5);
                parameter.setFontSize(12);
                defaultParameters.put("TITULO", parameter);

                parameter = new Parameter();
                parameter.setBold(true);
                parameter.setRowNumber(0);
                parameter.setParameterType(ParameterType.SUMMARY);

                columnsSummary.add(5);
                columnsSummary.add(6);
                reporteA.setColumnsSummary(columnsSummary);
                defaultParameters.put("TOTALES", parameter);
                break;
            case "RPT_ADA_06":
                reporteA.setDescription("Resumen por Distrito");
                reporteA.setLabel("DISTRITO");

                parameter.setAlign(Align.CENTER);
                parameter.setBold(true);
                parameter.setValue(proceso);
                parameter.setRowNumber(2);
                parameter.setFontSize(9);
                defaultParameters.put("ELECCION", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(false);
                parameter.setValue("Electores hábiles, mesas de sufragio y locales de votación");
                parameter.setRowNumber(3);
                parameter.setFontSize(14);
                defaultParameters.put("Descripcion", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(false);
                parameter.setValue("Información actualizada al " + fecha);
                parameter.setRowNumber(4);
                parameter.setFontColor("RED");
                parameter.setFontSize(10);
                defaultParameters.put("FechaAct", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(true);
                parameter.setValue(reporteA.getDescription().toUpperCase());
                parameter.setRowNumber(5);
                parameter.setFontSize(12);
                defaultParameters.put("TITULO", parameter);

                parameter = new Parameter();
                parameter.setBold(true);
                parameter.setRowNumber(0);
                parameter.setParameterType(ParameterType.SUMMARY);

                columnsSummary.add(8);
                columnsSummary.add(9);
                columnsSummary.add(10);
                reporteA.setColumnsSummary(columnsSummary);
                defaultParameters.put("TOTALES", parameter);
                break;
            case "RPT_ADA_07":
                reporteA.setDescription("Detalle por local votación");
                reporteA.setLabel("LOCALES");
                parameter.setAlign(Align.CENTER);
                parameter.setBold(true);
                parameter.setValue(proceso);
                parameter.setRowNumber(2);
                parameter.setFontSize(9);
                defaultParameters.put("ELECCION", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(false);
                parameter.setValue("Electores hábiles, mesas de sufragio y locales de votación");
                parameter.setRowNumber(3);
                parameter.setFontSize(14);
                defaultParameters.put("Descripcion", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(false);
                parameter.setValue("Información actualizada al " + fecha);
                parameter.setRowNumber(4);
                parameter.setFontColor("RED");
                parameter.setFontSize(10);
                defaultParameters.put("FechaAct", parameter);

                parameter = new Parameter();
                parameter.setAlign(Align.CENTER);
                parameter.setBold(true);
                parameter.setValue(reporteA.getDescription().toUpperCase());
                parameter.setRowNumber(5);
                parameter.setFontSize(12);
                defaultParameters.put("TITULO", parameter);

                parameter = new Parameter();
                parameter.setBold(true);
                parameter.setRowNumber(0);
                parameter.setParameterType(ParameterType.SUMMARY);
                columnsSummary.add(11);
                columnsSummary.add(12);
                reporteA.setColumnsSummary(columnsSummary);
                defaultParameters.put("TOTALES", parameter);
                break;
        }
        List result = reporteService.execute(reporte.getQuery(), url);
        Gson gsonCreate = new GsonBuilder().serializeNulls().create();
        String gson = gsonCreate.toJson(result);
        IFactoryService factory = new FactoryService();
        IExcelGeneratorService excelGenerator;
        excelGenerator = factory.createExcelGenerator(reporteA, gson, null, HeaderType.CUSTOM, null, false, defaultParameters);
        HSSFWorkbook workbook = excelGenerator.create();
        return workbook;
    }
;
}
