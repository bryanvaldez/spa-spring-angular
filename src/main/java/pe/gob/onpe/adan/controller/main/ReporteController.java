/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.controller.reportes.ReportesController;
import pe.gob.onpe.adan.helper.PrintUtil;
import pe.gob.onpe.adan.model.adan.FichaTecnica;
import pe.gob.onpe.adan.model.adan.Opcion;
import pe.gob.onpe.adan.model.adan.Parametro;
import pe.gob.onpe.adan.model.adan.Reporte;
import pe.gob.onpe.adan.model.adan.ReporteElector;
import pe.gob.onpe.adan.model.adan.ReporteElectorPorLocal;
import pe.gob.onpe.adan.model.adan.ReporteLocal;
import pe.gob.onpe.adan.model.adan.ReporteMesa;
import pe.gob.onpe.adan.model.adan.TipoSolucion;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.service.Adan.FichaTecnicaService;
import pe.gob.onpe.adan.service.Adan.ItemService;
import pe.gob.onpe.adan.service.Adan.OpcionService;
import pe.gob.onpe.adan.service.Adan.ParametroService;
import pe.gob.onpe.adan.service.Adan.ReporteElectorService;
import pe.gob.onpe.adan.service.Adan.ReporteLocalService;
import pe.gob.onpe.adan.service.Adan.ReporteMesaService;
import pe.gob.onpe.adan.service.Adan.ReporteService;
import pe.gob.onpe.adan.service.Adan.TipoSolucionService;
import pe.gob.onpe.adan.service.Adan.TreeTableService;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.reportgenerator.enums.HeaderType;
import pe.gob.onpe.reportgenerator.iface.IExcelGeneratorService;
import pe.gob.onpe.reportgenerator.iface.IFactoryService;
import pe.gob.onpe.reportgenerator.iface.impl.FactoryService;
import pe.gob.onpe.reportgenerator.model.Report;

/**
 *
 * @author bvaldez
 */
@RestController
@RequestMapping(value = "/reporte/*")
public class ReporteController {

    @Autowired
    ReporteElectorService reporteElectorService;

    @Autowired
    ReporteLocalService reporteLocalService;

    @Autowired
    ReporteMesaService reporteMesaService;

    @Autowired
    OpcionService opcionService;

    @Autowired
    ItemService itemService;

    @Autowired
    TipoSolucionService solucionService;

    @Autowired
    TreeTableService localService;

    @Autowired
    FichaTecnicaService fichaTecnicaService;

    @Autowired
    ProcesoService procesoService;

    @Autowired
    ParametroService parametroService;

    @Autowired
    ReporteService reporteService;

    @RequestMapping(value = "/popup/listaDistritos", method = RequestMethod.GET)
    public ModelAndView popupListaDistritos(HttpServletRequest request) {
        ModelAndView view;
        view = new ModelAndView("/test/popup/ListaDistritos");
        return view;
    }
    
    @RequestMapping(value = "getListaDistritosAsignados", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getListaDistritosAsignados() {
        ArrayList result = new ArrayList<>();
        result = localService.getListaDistritosAsignados();
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }
    
    @RequestMapping(value = "getListaDistritosFaltantes", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getListaDistritosFaltantes() {
        ArrayList result = new ArrayList<>();
        result = localService.getListaDistritosFaltantes();
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    } 
    
    @RequestMapping(value = "getListaDistritosAsignadosExcel", method = RequestMethod.GET)
    public void getListaDistritosAsignadosExcel(HttpServletRequest request, HttpServletResponse response) {
        try {
            ArrayList result = new ArrayList<>();
            result = localService.getListaDistritosAsignados();
            Report report = new Report();
            report.setId(10);
            report.setCode("RPT_LISTA_DISTRITOS_ASIGNADOS");
            report.setLabel("LISTA DISTRITOS ASIGNADOS");
            report.setDescription("LISTA DE DISTRITOS ASIGNADOS");
            report.setQuery("");
            report.setFileName("RPT_LISTA_DISTRITOS_ASIGNADOS");
            report.setEstado(0);
            Gson gsonCreate = new GsonBuilder().serializeNulls().create();
            String gson = gsonCreate.toJson(result);
            IFactoryService factory = new FactoryService();
            IExcelGeneratorService excelGenerator;
            excelGenerator = factory.createExcelGenerator(report, gson, null, HeaderType.DEFAULT, null, false);
            HSSFWorkbook workbook = excelGenerator.create();
            response.setContentType("application/vnd.ms-excel");
            String fileName = "RPT_LISTA_DISTRITOS_ASIGNADOS";
            fileName = fileName.replace(" ", "_");
            String attachment = String.format("attachment; filename=%s.xls", fileName);
            response.setHeader("Content-Disposition", attachment);
            workbook.write(response.getOutputStream());
        } catch (IOException ex) {
            System.out.println("ERROR");
        }
    }
    
    @RequestMapping(value = "getListaDistritosFaltantesExcel", method = RequestMethod.GET)
    public void getListaDistritosFaltantesExcel(HttpServletRequest request, HttpServletResponse response) {
        try {
            ArrayList result = new ArrayList<>();
            result = localService.getListaDistritosFaltantes();
            Report report = new Report();
            report.setId(10);
            report.setCode("RPT_LISTA_DISTRITOS_FALTANTES");
            report.setLabel("LISTA DISTRITOS FALTANTES");
            report.setDescription("LISTA DE DISTRITOS FALTANTES");
            report.setQuery("");
            report.setFileName("RPT_LISTA_DISTRITOS_FALTANTES");
            report.setEstado(0);
            Gson gsonCreate = new GsonBuilder().serializeNulls().create();
            String gson = gsonCreate.toJson(result);
            IFactoryService factory = new FactoryService();
            IExcelGeneratorService excelGenerator;
            excelGenerator = factory.createExcelGenerator(report, gson, null, HeaderType.DEFAULT, null, false);
            HSSFWorkbook workbook = excelGenerator.create();
            response.setContentType("application/vnd.ms-excel");
            String fileName = "RPT_LISTA_DISTRITOS_FALTANTES";
            fileName = fileName.replace(" ", "_");
            String attachment = String.format("attachment; filename=%s.xls", fileName);
            response.setHeader("Content-Disposition", attachment);
            workbook.write(response.getOutputStream());
        } catch (IOException ex) {
            System.out.println("ERROR");
        }
    }

    @RequestMapping(value = "getElectoresAsignar/", method = RequestMethod.GET)
    public String getElectoresAsignar() {
        String result = "";
        JsonObject jResponse = new JsonObject();
        try {
            Opcion opcion = opcionService.findByEstado(2);            
            result = localService.executeElectoresAsignar(opcion.getN_ORDEN());
            FichaTecnica ft = getFichaTecnicaFromMap(fichaTecnicaService.findFichaTecnicaConfig());
            jResponse.addProperty("fechaVersion", ft.getVersion());
            jResponse.addProperty("dataElectores", result);
            return new Gson().toJson(jResponse);
        } catch (Exception e) {
            return result;
        }
    }

    @RequestMapping(value = "/popup/resumen", method = RequestMethod.GET)
    public ModelAndView popupResumen(HttpServletRequest request) {
        ModelAndView view;
        view = new ModelAndView("/test/popup/resumen");
        return view;
    }

    @RequestMapping(value = "getResumen/", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> getResumen() {
        ArrayList result = new ArrayList<>();
        String sqlQuery = localService.executeResumenQuery();
        result = localService.getResumen(sqlQuery);
        if (result == null) {
            return new ResponseEntity<ArrayList>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ArrayList>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "elector/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public ResponseEntity<ReporteElector> consultaReporteElectores(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        ReporteElector reporte = new ReporteElector();
        if (tipo.equals("NACION")) {
            reporte = reporteElectorService.getNacion(tipo);
        } else if (tipo.equals("PERU")) {
            reporte = reporteElectorService.getPeru(tipo);
        } else if (tipo.equals("EXTRANJERO")) {
            reporte = reporteElectorService.getExtranjero(tipo);
        } else if (tipo.equals("ODPE")) {
            reporte = reporteElectorService.getOdpe(tipo, codigo);
        } else if (tipo.equals("ODPE_DPTO")) {
            reporte = reporteElectorService.getOdpebyDepartamento(tipo, codigo, codigo2);
        } else if (tipo.equals("ODPE_PROV")) {
            reporte = reporteElectorService.getOdpebyProvincia(tipo, codigo, codigo2);
        } else if (tipo.equals("DPTO_CONT")) {
            reporte = reporteElectorService.getDepartamentoOrContinente(tipo, codigo);
        } else if (tipo.equals("PROV_PAIS")) {
            reporte = reporteElectorService.getProvinciaOrPais(tipo, codigo);
        } else if (tipo.equals("DIST_CIUD")) {
            reporte = reporteElectorService.getDistritoOrCiudad(tipo, codigo);
        } else {
            return new ResponseEntity<ReporteElector>(HttpStatus.NO_CONTENT);
        }
        if (reporte == null) {
            return new ResponseEntity<ReporteElector>(reporte, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ReporteElector>(reporte, HttpStatus.OK);
    }

    @RequestMapping(value = "elector/low/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public String consultaReporteElectoresLow(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        JsonObject jResponse = new JsonObject();
        boolean success = true;
        String reporte;
        Opcion option = opcionService.findByEstado(2);
        if (tipo.equalsIgnoreCase("PERU")) {
            reporte = reporteElectorService.getReporteElector(option.getN_OPCION_PK(), "PERU");
        } else if (tipo.equalsIgnoreCase("NACION")) {
            reporte = reporteElectorService.getReporteElector(option.getN_OPCION_PK(), "NACION");
        } else if (tipo.equalsIgnoreCase("EXTRANJERO")) {
            reporte = reporteElectorService.getReporteElector(option.getN_OPCION_PK(), "EXTRANJERO");
        } else {
            reporte = reporteElectorService.getReporteElector(option.getN_OPCION_PK(), codigo);
        }

        if (reporte == null) {
            success = false;
        }
        jResponse.addProperty("success", success);
        jResponse.addProperty("data", reporte);
        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "elector/localMesa/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public ResponseEntity<ReporteElectorPorLocal> consultaReporteElectorPorLocal(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        ReporteElectorPorLocal reporte = new ReporteElectorPorLocal();
        if (tipo.equals("LOCAL_MESA")) {
            reporte = reporteElectorService.getLocalOrMesa(tipo, codigo);
        } else {
            return new ResponseEntity<ReporteElectorPorLocal>(HttpStatus.NO_CONTENT);
        }
        if (reporte == null) {
            return new ResponseEntity<ReporteElectorPorLocal>(reporte, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ReporteElectorPorLocal>(reporte, HttpStatus.OK);
    }

    @RequestMapping(value = "local/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public ResponseEntity<ReporteLocal> consultaReporteLocales(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        ReporteLocal reporte = new ReporteLocal();
        if (tipo.equals("NACION")) {
            reporte = reporteLocalService.getNacion(tipo);
        } else if (tipo.equals("PERU")) {
            reporte = reporteLocalService.getPeru(tipo);
        } else if (tipo.equals("EXTRANJERO")) {
            reporte = reporteLocalService.getExtranjero(tipo);
        } else if (tipo.equals("ODPE")) {
            reporte = reporteLocalService.getOdpe(tipo, codigo);
        } else if (tipo.equals("ODPE_DPTO")) {
            reporte = reporteLocalService.getOdpebyDepartamento(tipo, codigo, codigo2);
        } else if (tipo.equals("ODPE_PROV")) {
            reporte = reporteLocalService.getOdpebyProvincia(tipo, codigo, codigo2);
        } else if (tipo.equals("DPTO_CONT")) {
            reporte = reporteLocalService.getDepartamentoOrContinente(tipo, codigo);
        } else if (tipo.equals("PROV_PAIS")) {
            reporte = reporteLocalService.getProvinciaOrPais(tipo, codigo);
        } else if (tipo.equals("DIST_CIUD")) {
            reporte = reporteLocalService.getDistritoOrCiudad(tipo, codigo);
        } else {
            return new ResponseEntity<ReporteLocal>(HttpStatus.NO_CONTENT);
        }
        if (reporte == null) {
            return new ResponseEntity<ReporteLocal>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ReporteLocal>(reporte, HttpStatus.OK);
    }

    @RequestMapping(value = "local/solucion/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public ResponseEntity<List> consultaReporteLocalesSolucion(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        Object reporte = null;
        if (tipo.equals("NACION")) {
            reporte = reporteLocalService.getNacion1(tipo);
        } else if (tipo.equals("PERU")) {
            reporte = reporteLocalService.getPeru1(tipo);
        } else if (tipo.equals("EXTRANJERO")) {
            reporte = reporteLocalService.getExtranjero1(tipo);
        } else if (tipo.equals("ODPE")) {
            reporte = reporteLocalService.getOdpe1(tipo, codigo);
        } else if (tipo.equals("ODPE_DPTO")) {
            reporte = reporteLocalService.getOdpebyDepartamento1(tipo, codigo, codigo2);
        } else if (tipo.equals("ODPE_PROV")) {
            reporte = reporteLocalService.getOdpebyProvincia1(tipo, codigo, codigo2);
        } else if (tipo.equals("DPTO_CONT")) {
            reporte = reporteLocalService.getDepartamentoOrContinente1(tipo, codigo);
        } else if (tipo.equals("PROV_PAIS")) {
            reporte = reporteLocalService.getProvinciaOrPais1(tipo, codigo);
        } else if (tipo.equals("DIST_CIUD")) {
            reporte = reporteLocalService.getDistritoOrCiudad1(tipo, codigo);
        } else {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }
        if (reporte == null) {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }

        List<TipoSolucion> soluciones = solucionService.findAllByEstado(Constants.ESTADO_SOLUCION_ACTIVO);

        for (int i = 0; i < soluciones.size(); i++) {
            soluciones.get(i).setElectores(Integer.parseInt(((Object[]) reporte)[10 + i].toString()));
        }

        return new ResponseEntity<List>(soluciones, HttpStatus.OK);

    }

    @RequestMapping(value = "mesa/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public ResponseEntity<ReporteMesa> consultaReporteMesa(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        ReporteMesa reporte = new ReporteMesa();
        if (tipo.equals("NACION")) {
            reporte = reporteMesaService.getNacion(tipo);
        } else if (tipo.equals("PERU")) {
            reporte = reporteMesaService.getPeru(tipo);
        } else if (tipo.equals("EXTRANJERO")) {
            reporte = reporteMesaService.getExtranjero(tipo);
        } else if (tipo.equals("ODPE")) {
            reporte = reporteMesaService.getOdpe(tipo, codigo);
        } else if (tipo.equals("ODPE_DPTO")) {
            reporte = reporteMesaService.getOdpebyDepartamento(tipo, codigo, codigo2);
        } else if (tipo.equals("ODPE_PROV")) {
            reporte = reporteMesaService.getOdpebyProvincia(tipo, codigo, codigo2);
        } else if (tipo.equals("DPTO_CONT")) {
            reporte = reporteMesaService.getDepartamentoOrContinente(tipo, codigo);
        } else if (tipo.equals("PROV_PAIS")) {
            reporte = reporteMesaService.getProvinciaOrPais(tipo, codigo);
        } else if (tipo.equals("DIST_CIUD")) {
            reporte = reporteMesaService.getDistritoOrCiudad(tipo, codigo);
        } else {
            return new ResponseEntity<ReporteMesa>(HttpStatus.NO_CONTENT);
        }
        if (reporte == null) {
            return new ResponseEntity<ReporteMesa>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<ReporteMesa>(reporte, HttpStatus.OK);
    }

    @RequestMapping(value = "mesa/solucion/{tipo}/{codigo}/{codigo2}", method = RequestMethod.GET)
    public ResponseEntity<List> consultaReporteMesasSolucion(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, @PathVariable("codigo2") String codigo2) {

        Object reporte = null;
        if (tipo.equals("NACION")) {
            reporte = reporteMesaService.getNacion1(tipo);
        } else if (tipo.equals("PERU")) {
            reporte = reporteMesaService.getPeru1(tipo);
        } else if (tipo.equals("EXTRANJERO")) {
            reporte = reporteMesaService.getExtranjero1(tipo);
        } else if (tipo.equals("ODPE")) {
            reporte = reporteMesaService.getOdpe1(tipo, codigo);
        } else if (tipo.equals("ODPE_DPTO")) {
            reporte = reporteMesaService.getOdpebyDepartamento1(tipo, codigo, codigo2);
        } else if (tipo.equals("ODPE_PROV")) {
            reporte = reporteMesaService.getOdpebyProvincia1(tipo, codigo, codigo2);
        } else if (tipo.equals("DPTO_CONT")) {
            reporte = reporteMesaService.getDepartamentoOrContinente1(tipo, codigo);
        } else if (tipo.equals("PROV_PAIS")) {
            reporte = reporteMesaService.getProvinciaOrPais1(tipo, codigo);
        } else if (tipo.equals("DIST_CIUD")) {
            reporte = reporteMesaService.getDistritoOrCiudad1(tipo, codigo);
        } else {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }
        if (reporte == null) {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }

        List<TipoSolucion> soluciones = solucionService.findAllByEstado(Constants.ESTADO_SOLUCION_ACTIVO);

        for (int i = 0; i < soluciones.size(); i++) {
            soluciones.get(i).setElectores(Integer.parseInt(((Object[]) reporte)[10 + i].toString()));
        }

        return new ResponseEntity<List>(soluciones, HttpStatus.OK);

    }
    
    @RequestMapping(value = "local/item/{tipo}/{value}", method = RequestMethod.GET)
    public ResponseEntity<List> getItems(@PathVariable("tipo") String tipo, @PathVariable("value") String value) {
        List data = itemService.getItems(tipo, value);
        if (data.isEmpty()) {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List>(data, HttpStatus.OK);
    }

    @RequestMapping(value = "local/distrito/{ubigeo}/{value}", method = RequestMethod.GET)
    public ResponseEntity<List> getDistritos(@PathVariable("ubigeo") String ubigeo, @PathVariable("value") String value) {
        List data = itemService.getDistritos(ubigeo, value);
        if (data.isEmpty()) {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List>(data, HttpStatus.OK);
    }

    @RequestMapping(value = "local/ubigeo/{ubigeo}", method = RequestMethod.GET)
    public ResponseEntity<List> getUbigeo(@PathVariable("ubigeo") String ubigeo) {
        List data = itemService.getUbigeo(ubigeo);
        if (data.isEmpty()) {
            return new ResponseEntity<List>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List>(data, HttpStatus.OK);
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

    @RequestMapping(value = "electoresPorAsignarPDF/{tipo}/{codigo}", method = RequestMethod.GET)
    public void generateElectoresPorAsignar(@PathVariable("tipo") String tipo, @PathVariable("codigo") String codigo, HttpServletRequest request, HttpServletResponse response) {
        try {
            HttpSession session = request.getSession(false);
            Proceso proceso = null;
            String usuarioAutenticado = "";
            if (session.getAttribute("CODIGO_PROCESO") != null) {
                int id = (Integer) session.getAttribute("CODIGO_PROCESO");
                proceso = procesoService.findById(id);
                usuarioAutenticado = (String) session.getAttribute("USUARIO_AUTENTICADO");
            }
            List<Parametro> lstParam = parametroService.findByCcodigoAndFlag("AMBITO", 1);
            Reporte reporte = reporteService.findByCodigo("RPT_ADA_01");
            List result = null;

            if (tipo.equals("PERU")) {
                reporte.setQuery(reporte.getQuery().replace("FILTRO", "WHERE SUBSTR(A.C_UBIGEO,1,1) <> '9'"));
            } else if (tipo.equals("EXTRANJERO")) {
                reporte.setQuery(reporte.getQuery().replace("FILTRO", "WHERE SUBSTR(A.C_UBIGEO,1,1) = '9'"));
            } else if (tipo.equals("DPTO_CONT")) {
                reporte.setQuery(reporte.getQuery().replace("FILTRO", "WHERE SUBSTR(A.C_UBIGEO,1,2) || '0000' = '" + codigo + "'"));        //190000
            } else if (tipo.equals("PROV_PAIS")) {
                reporte.setQuery(reporte.getQuery().replace("FILTRO", "WHERE SUBSTR(A.C_UBIGEO,1,4) || '00' = '" + codigo + "'"));          //190100
            } else if (tipo.equals("DIST_CIUD")) {
                reporte.setQuery(reporte.getQuery().replace("FILTRO", "WHERE A.C_UBIGEO = '" + codigo + "'"));                              //190109
            }

            result = reporteService.execute(reporte.getQuery(), proceso.getC_CONEXION());

            if (result.size() > 0 && lstParam.size() > 0 && reporte != null) {

                ServletContext sc = request.getSession(false).getServletContext();
                InputStream inStream = sc.getResourceAsStream("/WEB-INF/jasper/rptElectoresPorAsignar.jasper");

                HashMap<String, Object> parameters = new HashMap();
                parameters.put("ONPE_LOGO", sc.getResourceAsStream("/static/img/logo_onpe.jpg"));
                parameters.put("ELECCION", proceso.getC_NOMBRE());
                parameters.put("TITULO", reporte.getEtiqueta() + " SEGÚN " + lstParam.get(0).getDescripcion());
                parameters.put("DESC_GROUP", lstParam.get(0).getDescripcion());
                parameters.put("USUARIO", usuarioAutenticado);
                byte[] bytes = PrintUtil.generarPdf(parameters, result, inStream);

                response.setContentType("application/pdf");
                response.setHeader("Content-Disposition", "inline; filename=ELECTORES POR ASIGNAR SEGÚN " + lstParam.get(0).getDescripcion() +".pdf");
                response.setContentLength(bytes.length);
                ServletOutputStream outStream = response.getOutputStream();
                outStream.write(bytes, 0, bytes.length);
                outStream.flush();
                outStream.close();

            }

        } catch (Exception ex) {
            Logger.getLogger(ReportesController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
