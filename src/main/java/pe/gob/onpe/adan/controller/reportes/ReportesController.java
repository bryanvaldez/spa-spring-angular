package pe.gob.onpe.adan.controller.reportes;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import pe.gob.onpe.adan.helper.Filtro;
import pe.gob.onpe.adan.model.adan.Reporte;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.service.Adan.ParametroService;
import pe.gob.onpe.adan.service.Adan.ReporteService;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.reportgenerator.enums.HeaderType;
import pe.gob.onpe.reportgenerator.iface.IExcelGeneratorService;
import pe.gob.onpe.reportgenerator.iface.IFactoryService;
import pe.gob.onpe.reportgenerator.iface.impl.FactoryService;
import pe.gob.onpe.reportgenerator.model.Report;

/**
 *
 * @author Manuel Arrisueno <marrisueno at onpe.gob.pe>
 */
@Controller
@Transactional
public class ReportesController {

    @Autowired
    ReporteService reporteService;

    @Autowired
    ParametroService parametroService;

    @Autowired
    ProcesoService procesoService;

    @RequestMapping("/reportes")
    public ModelAndView index(HttpServletRequest request) {
        ModelAndView view;
        view = new ModelAndView("reportes/index");
        return view;
    }

    @RequestMapping(value = "/reportes/modal/{filtro}")
    public String create(@PathVariable("filtro") String filtro) {
        return "reportes/" + filtro;
    }

    @RequestMapping(value = "/reportes/list", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<Reporte>> listarReportes(HttpServletRequest request) {
        List<Reporte> lstReportes = reporteService.findAllReporte();
        if (lstReportes.isEmpty()) {
            return new ResponseEntity<List<Reporte>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Reporte>>(lstReportes, HttpStatus.OK);
    }

    @RequestMapping(value = "/reportes/exportar/{filtro}", method = RequestMethod.GET)
    public void exportar(HttpServletRequest request, HttpServletResponse response, @PathVariable("filtro") String filtro) {
        try {

            String url = "";
            HttpSession session = request.getSession(false);
            if (session.getAttribute("CODIGO_PROCESO") != null) {
                int id = (Integer) session.getAttribute("CODIGO_PROCESO");
                Proceso proceso = procesoService.findById(id);
                url = proceso.getC_CONEXION();
            }

            Gson g = new Gson();
            Filtro filter = g.fromJson(filtro, Filtro.class);

            Report report = new Report();
            Reporte reporte = reporteService.findById(filter.getIdReporte());

            report.setId(reporte.getId());
            report.setCode(reporte.getCodigo());
            report.setLabel(reporte.getEtiqueta());
            report.setDescription(reporte.getEtiqueta());
            report.setQuery(reporte.getQuery());
            report.setFileName(reporte.getNombreArchivo());
            report.setEstado(reporte.getEstado());
            
            Map<String, String> customHeaders = new HashMap<>();
            customHeaders.put("DNI_PRI", "DNI");
            customHeaders.put("DNI_ULT", "DNI");
            customHeaders.put("PATERNO-", "PATERNO");
            customHeaders.put("MATERNO-", "MATERNO");
            customHeaders.put("NOMBRES-", "NOMBRES");
            

            List result = reporteService.execute(report.getQuery(), filter, url);

            Gson gsonCreate = new GsonBuilder().serializeNulls().create();
            String gson = gsonCreate.toJson(result);
            IFactoryService factory = new FactoryService();
            IExcelGeneratorService excelGenerator;
            if (result.size() > 0) {
                if (reporte.getCodigo().equals("RPT_ADA_03")) {
                    excelGenerator = factory.createExcelGenerator(report, gson, null, HeaderType.DEFAULT, null, false, null, "");
                } else {
                    if (reporte.getCodigo().equals("RPT_ADA_04")) {
                        excelGenerator = factory.createExcelGenerator(report, gson, null, HeaderType.DEFAULT, customHeaders, false);
                    } else {
                        excelGenerator = factory.createExcelGenerator(report, gson, null, HeaderType.DEFAULT, null, false);
                    }
                }
                HSSFWorkbook workbook = excelGenerator.create();
                response.setContentType("application/vnd.ms-excel");
                String fileName = report.getCode() + "_" + report.getFileName();
                fileName = fileName.replace(" ", "_");
                String attachment = String.format("attachment; filename=%s.xls", fileName);
                response.setHeader("Content-Disposition", attachment);
                workbook.write(response.getOutputStream());
            }

        } catch (IOException ex) {
            System.out.println("ERROR");
        }
    }

    @RequestMapping(value = "/reportes/mesasPorLocal", method = RequestMethod.GET)
    public void mesasPorLocal(HttpServletRequest request, HttpServletResponse response) {
        try {

            String url = "";
            HttpSession session = request.getSession(false);
            if (session.getAttribute("CODIGO_PROCESO") != null) {
                int id = (Integer) session.getAttribute("CODIGO_PROCESO");
                Proceso proceso = procesoService.findById(id);
                url = proceso.getC_CONEXION();
            }

            Report report = new Report();
            Reporte reporte = reporteService.findByCodigo("RPT_ADA_02");
            report.setId(reporte.getId());
            report.setCode(reporte.getCodigo());
            report.setLabel(reporte.getEtiqueta());
            report.setDescription(reporte.getEtiqueta());
            report.setQuery(reporte.getQuery());
            report.setFileName(reporte.getNombreArchivo());
            report.setEstado(reporte.getEstado());

            List result = reporteService.execute(reporte.getQuery(), url);

            Gson gsonCreate = new GsonBuilder().serializeNulls().create();
            String gson = gsonCreate.toJson(result);
            IFactoryService factory = new FactoryService();
            IExcelGeneratorService excelGenerator;
            if (result.size() > 0) {

                excelGenerator = factory.createExcelGenerator(report, gson, null, HeaderType.DEFAULT, null, false);

                HSSFWorkbook workbook = excelGenerator.create();
                response.setContentType("application/vnd.ms-excel");
                String fileName = report.getCode() + "_" + report.getFileName();
                fileName = fileName.replace(" ", "_");
                String attachment = String.format("attachment; filename=%s.xls", fileName);
                response.setHeader("Content-Disposition", attachment);
                workbook.write(response.getOutputStream());
            }

        } catch (IOException ex) {
            System.out.println("ERROR");
        }
    }

}
