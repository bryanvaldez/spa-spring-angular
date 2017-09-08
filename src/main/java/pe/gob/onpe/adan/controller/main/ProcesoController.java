/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.controller.main;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import crypto.util.encription.Crypto;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.model.admin.Usuario;
import pe.gob.onpe.adan.service.Admin.ProcesoService;
import pe.gob.onpe.adan.service.Admin.UsuarioService;
import pe.gob.onpe.onpe.security.OnpeKeys;

/**
 *
 * @author bvaldez
 */
@RestController
public class ProcesoController {

    @Autowired
    private ProcesoService procesoService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    @Qualifier("adanEntityManagerFactory01")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory01;
    @Autowired
    @Qualifier("adanEntityManagerFactory02")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory02;
    @Autowired
    @Qualifier("adanEntityManagerFactory03")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory03;
    @Autowired
    @Qualifier("adanEntityManagerFactory04")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory04;
    @Autowired
    @Qualifier("adanEntityManagerFactory05")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory05;
    @Autowired
    @Qualifier("adanEntityManagerFactory06")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory06;
    @Autowired
    @Qualifier("adanEntityManagerFactory07")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory07;
    @Autowired
    @Qualifier("adanEntityManagerFactory08")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory08;
    @Autowired
    @Qualifier("adanEntityManagerFactory09")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory09;
    @Autowired
    @Qualifier("adanEntityManagerFactory10")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory10;
    @Autowired
    @Qualifier("adanEntityManagerFactory11")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory11;
    @Autowired
    @Qualifier("adanEntityManagerFactory12")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory12;
    @Autowired
    @Qualifier("adanEntityManagerFactory13")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory13;
    @Autowired
    @Qualifier("adanEntityManagerFactory14")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory14;
    @Autowired
    @Qualifier("adanEntityManagerFactory15")
    private LocalContainerEntityManagerFactoryBean entityManagerFactory15;

    @RequestMapping(value = "/proceso/", method = RequestMethod.POST)
    public String save(@RequestBody Proceso proceso) {

        JsonObject jResponse = new JsonObject();
        boolean success = true;

        if (proceso.getN_PROCESO_PK() == null) {
            proceso.setN_PROCESO_PK(0);
        }

        Proceso validate1 = procesoService.findByName(proceso.getC_NOMBRE());
        Proceso validate2 = procesoService.findByKey(proceso.getC_CONEXION());
        if (validate1 != null) {
            if (proceso.getN_PROCESO_PK() != validate1.getN_PROCESO_PK()) {
                success = false;
                jResponse.addProperty("message", "Nombre duplicado.");
                jResponse.addProperty("tipo", 1);
                jResponse.addProperty("success", success);
                return new Gson().toJson(jResponse);
            }
        }
        if (validate2 != null) {
            if (proceso.getN_PROCESO_PK() != validate2.getN_PROCESO_PK()) {
                success = false;
                jResponse.addProperty("message", "LLave Duplicada.");
                jResponse.addProperty("tipo", 2);
                jResponse.addProperty("success", success);
                return new Gson().toJson(jResponse);
            }
        }

        Date date = new Date();
        if (proceso.getN_PROCESO_PK() != 0) {
            Proceso p = procesoService.findById(proceso.getN_PROCESO_PK());
            proceso.setC_CONEXION(p.getC_CONEXION());
            procesoService.updateProceso(proceso);
            jResponse.addProperty("message", "Proceso Electoral actualizado Correctamente.");
        } else {
            proceso.setN_PROCESO_PK(null);
            proceso.setD_AUD_FECHA_CREACION(date);
            proceso.setC_AUD_USUARIO_CREACION(getPrincipal());
            procesoService.saveProceso(proceso);
            jResponse.addProperty("message", "Proceso Electoral creado Correctamente.");
        }

        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "/proceso/close/", method = RequestMethod.GET)
    public String close(HttpServletRequest request, HttpServletResponse response) {

        HttpSession session = request.getSession(false);
        if (session.getAttribute("CODIGO_PROCESO") == null) {
            return "redirect:/login?logout";
        }
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        try {
            int id = (Integer) session.getAttribute("CODIGO_PROCESO");
            Proceso proceso = procesoService.findById(id);
            proceso.setN_ESTADO(Constants.PROCESS_FINISH);
            procesoService.updateProceso(proceso);
        } catch (Exception e) {
            success = false;
            jResponse.addProperty("message", "Sin conexion.");
        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "/proceso/status/", method = RequestMethod.GET)
    public String status(HttpServletRequest request, HttpServletResponse response) {

        HttpSession session = request.getSession(false);
        if (session.getAttribute("CODIGO_PROCESO") == null) {
            return "redirect:/login?logout";
        }
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        try {
            int id = (Integer) session.getAttribute("CODIGO_PROCESO");
            Proceso proceso = procesoService.findById(id);
            jResponse.addProperty("data", proceso.getN_ESTADO());
        } catch (Exception e) {
            success = false;
            jResponse.addProperty("message", "Sin conexion.");
        }
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "/proceso/", method = RequestMethod.GET)
    public ResponseEntity<List<Proceso>> all() {
        List<Proceso> list = procesoService.findAllProcesos();
        if (list.isEmpty()) {
            return new ResponseEntity<List<Proceso>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Proceso>>(list, HttpStatus.OK);
    }

    private String decryptData(String data) throws Exception {
        String creadential = null;
        try {
            Crypto crypto = Crypto.getInstance(OnpeKeys.ENCRYPT);
            creadential = crypto.decrypt(data);
        } catch (Exception e) {
            return null;
        }
        return creadential;
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

    @RequestMapping(value = "/proceso/get/{id}", method = RequestMethod.GET)
    public String enable(HttpServletRequest request, @PathVariable("id") int id) throws Exception {
        HttpSession session = request.getSession(false);
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        Usuario usuario = usuarioService.findByUsuario(session.getAttribute("USUARIO").toString());
        Proceso proceso = procesoService.findById(id);

        if (proceso.getN_USUARIO_CONECTADO() == null || proceso.getN_USUARIO_CONECTADO() == usuario.getId() || usuario.getPerfil().getId() == 2) {
            if (usuario.getPerfil().getId() == 1) {
                proceso.setN_USUARIO_CONECTADO(usuario.getId());
                procesoService.updateProceso(proceso);
            }
            String credencial = decryptData(proceso.getC_CONEXION());
            DataSource adanConf = adanDs(credencial);
            LocalContainerEntityManagerFactoryBean adan = getEntityManager(proceso.getN_PROCESO_PK());
            try {
                adan.setDataSource(adanConf);
                adan.afterPropertiesSet();
                request.getSession().setAttribute("PROCESO", proceso.getC_NOMBRE());
                request.getSession().setAttribute("CODIGO_PROCESO", proceso.getN_PROCESO_PK());
                request.getSession().setAttribute("ESTADO_PROCESO", proceso.getN_ESTADO());
                request.getSession().setAttribute("PROCESO_CREDENTIAL", credencial);

            } catch (Exception ex) {
                success = false;
                ex.printStackTrace();
            }
        } else {
            Usuario usuarioProceso = usuarioService.findById(proceso.getN_USUARIO_CONECTADO());
            jResponse.addProperty("message", "El proceso está ocupado por el usuario: " + usuarioProceso.getNombre() + " " + usuarioProceso.getApellidoPaterno() + " " + usuarioProceso.getApellidoMaterno() + ", ¿Desea ingresar?");
            success = false;
        }

        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }

    @RequestMapping(value = "/proceso/load/{id}", method = RequestMethod.GET)
    public String load(HttpServletRequest request, @PathVariable("id") int id) throws Exception {
        HttpSession session = request.getSession(false);
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        Usuario usuario = usuarioService.findByUsuario(session.getAttribute("USUARIO").toString());
        Proceso proceso = procesoService.findById(id);

        if (usuario.getPerfil().getId() == 1) {
            proceso.setN_USUARIO_CONECTADO(usuario.getId());
            procesoService.updateProceso(proceso);
        }

        String credencial = decryptData(proceso.getC_CONEXION());
        DataSource adanConf = adanDs(credencial);
        LocalContainerEntityManagerFactoryBean adan = getEntityManager(proceso.getN_PROCESO_PK());
        try {
            adan.setDataSource(adanConf);
            adan.afterPropertiesSet();
            request.getSession().setAttribute("PROCESO", proceso.getC_NOMBRE());
            request.getSession().setAttribute("CODIGO_PROCESO", proceso.getN_PROCESO_PK());
            request.getSession().setAttribute("ESTADO_PROCESO", proceso.getN_ESTADO());
            request.getSession().setAttribute("PROCESO_CREDENTIAL", credencial);

        } catch (Exception ex) {
            success = false;
            ex.printStackTrace();
        }

        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }

    private LocalContainerEntityManagerFactoryBean getEntityManager(int code) {
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
        switch (code) {
            case 1:
                bean = this.entityManagerFactory01;
                break;
            case 2:
                bean = this.entityManagerFactory02;
                break;
            case 3:
                bean = this.entityManagerFactory03;
                break;
            case 4:
                bean = this.entityManagerFactory04;
                break;
            case 5:
                bean = this.entityManagerFactory05;
                break;
            case 6:
                bean = this.entityManagerFactory06;
                break;
            case 7:
                bean = this.entityManagerFactory07;
                break;
            case 8:
                bean = this.entityManagerFactory08;
                break;
            case 9:
                bean = this.entityManagerFactory09;
                break;
            case 10:
                bean = this.entityManagerFactory10;
                break;
            case 11:
                bean = this.entityManagerFactory11;
                break;
            case 12:
                bean = this.entityManagerFactory12;
                break;
            case 13:
                bean = this.entityManagerFactory13;
                break;
            case 14:
                bean = this.entityManagerFactory14;
                break;
            case 15:
                bean = this.entityManagerFactory15;
                break;
        }
        return bean;
    }

    private DataSource adanDs(String credential) {
        DriverManagerDataSource adanDs = new DriverManagerDataSource();
        adanDs.setDriverClassName("oracle.jdbc.OracleDriver");
        adanDs.setUrl(credential);
        return adanDs;
    }

    @RequestMapping(value = "/proceso/getStatus", method = RequestMethod.GET)
    public Map enableProcess(HttpServletRequest request) throws Exception {
        HashMap<String, Object> data = null;
        HttpSession session = request.getSession(false);
        if (session.getAttribute("PROCESO") != null && !session.getAttribute("PROCESO").equals("")) {
            int idProceso = (Integer) session.getAttribute("CODIGO_PROCESO");
            Proceso proceso = procesoService.findById(idProceso);

            data = new HashMap<>();
            request.getSession(false).setAttribute("PROCESO", proceso.getC_NOMBRE());
            data.put("PROCESO", proceso.getC_NOMBRE());
            request.getSession(false).setAttribute("CODIGO_PROCESO", proceso.getN_PROCESO_PK());
            data.put("CODIGO_PROCESO", proceso.getN_PROCESO_PK());
            request.getSession(false).setAttribute("ESTADO_PROCESO", proceso.getN_ESTADO());
            data.put("ESTADO_PROCESO", proceso.getN_ESTADO());
        }
        return data;
    }

    @RequestMapping(value = "/proceso/getUsuario/{proceso}", method = RequestMethod.GET)
    public String getUsuario(HttpServletRequest request, @PathVariable("proceso") int id) throws Exception {
        HttpSession session = request.getSession(false);
        JsonObject jResponse = new JsonObject();
        boolean success = true;
        
        Proceso proceso = procesoService.findById(id);

        if (proceso.getN_USUARIO_CONECTADO() != null) {
            
            Usuario usuarioProceso = usuarioService.findById(proceso.getN_USUARIO_CONECTADO());
            jResponse.addProperty("message", "El proceso está ocupado por el usuario: " + usuarioProceso.getNombre() + " " + usuarioProceso.getApellidoPaterno() + " " + usuarioProceso.getApellidoMaterno());
            success = false;
                        
        }
        
        jResponse.addProperty("success", success);
        return new Gson().toJson(jResponse);
    }
}
