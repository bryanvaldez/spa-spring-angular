/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.text.ParseException;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.dao.adan.AsynchronousDao;
import pe.gob.onpe.adan.model.adan.CabeceraCarga;
import pe.gob.onpe.adan.model.adan.Etlv;
import pe.gob.onpe.adan.model.adan.Rae;
import pe.gob.onpe.adan.service.Adan.impl.AsynchronousServiceImpl;
import pe.gob.onpe.trans.rest.OnpeTrans;

/**
 *
 * @author marrisueno
 */
@EnableAsync
@Repository("asynchronousDao")
public class AsynchronousDaoImpl extends AbstractDao<Integer, CabeceraCarga> implements AsynchronousDao{        
    
    private static final Logger logger = LoggerFactory.getLogger(AsynchronousServiceImpl.class); 
    
    @Override
    public boolean verifyProcess(int id) throws Exception {
                  
        Integer result = 0;
        boolean success = false;
        
        Query query = getEntityManager().createNativeQuery("SELECT COUNT(*) FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('TABLE','VIEW') AND OBJECT_NAME = 'TAB_SIGE' AND OWNER = :owner");
        query.setParameter("owner", "ADAN");
        result = Integer.parseInt(query.getSingleResult().toString());        
        if (result > 0) {
            success = true;
        }
                
        return success;        
    }
    
    @Override
    public boolean executeProcess(int id, String user, int idProceso) {    
         
        Integer estado = 0;        
        try {
            
            if (id == Constants.TIPO_CARGA_PADRON) {
                CompletableFuture<Integer> padron = asyncCargarPadron(user);
                estado = padron.get();                
                CompletableFuture<Integer> compila = asyncCompila();
                estado = compila.get();
                
                CompletableFuture<Integer> update = asyncUpdateDataProcess(idProceso, Constants.STEP_CARGA_DATOS);
                estado = update.get();
            } else if (id == Constants.TIPO_CARGA_ODPE) {
                CompletableFuture<Integer> ubigeoOdpe = asyncCargarUbigeoOdpe(user);
                estado = ubigeoOdpe.get();
                
                CompletableFuture<Integer> update = asyncUpdateDataProcess(idProceso, Constants.STEP_CARGA_DATOS);
                estado = update.get();
            } else if (id == Constants.TIPO_CARGA_LOCAL) {
                CompletableFuture<Integer> locales = asyncCargarLocales(user);
                estado = locales.get();
                
                CompletableFuture<Integer> update = asyncUpdateDataProcess(idProceso, Constants.STEP_CARGA_DATOS);
                estado = update.get();
            } else if (id == Constants.TIPO_CARGA_PAGINA) {
                CompletableFuture<Integer> locales = asyncCargarPagina(user);
                estado = locales.get();
                
                CompletableFuture<Integer> update = asyncUpdateDataProcess(idProceso, Constants.STEP_CARGA_DATOS);
                estado = update.get();
            } else if (id == Constants.TIPO_CARGA_CONADIS) {
                CompletableFuture<Integer> locales = asyncCargarConadis(user);
                estado = locales.get();
                
                CompletableFuture<Integer> update = asyncUpdateDataProcess(idProceso, Constants.STEP_CARGA_DATOS);
                estado = update.get();
            } else if (id == Constants.TIPO_CARGA_SECCION) {
                CompletableFuture<Integer> seccion = asyncCargarSeccionElector(user);
                estado = seccion.get();
            } else if (id == Constants.TIPO_CARGA_PREF) {
                CompletableFuture<Integer> pref = asyncCargarPreferencial(user);
                estado = pref.get();
                CompletableFuture<Integer> compila = asyncCompila();
                estado = compila.get();
                
                CompletableFuture<Integer> update = asyncUpdateDataProcess(idProceso, Constants.STEP_CARGA_DATOS);
                estado = update.get();
            } else if (id == Constants.TIPO_CARGA_RAE) {
                CompletableFuture<Integer> rae = asyncCargarRaeDB(user);
                estado = rae.get(); 
            }                   
            
        } catch (InterruptedException | ExecutionException ex) {
            estado = 0;
        }      
                
        if (estado == 1) {
            EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();
            em.getTransaction().begin();
            if (id == Constants.TIPO_CARGA_PADRON) {                
                Query query = em.createNativeQuery("UPDATE CAB_CARGA SET N_ESTADO_FINAL = 0 WHERE N_TIPO_CARGA IN (" + Constants.TIPO_CARGA_ODPE + "," +  Constants.TIPO_CARGA_LOCAL + ")");
                query.executeUpdate(); 
                Query query2 = em.createNativeQuery("UPDATE TAB_CONEXION SET D_AUD_FECHA_ACTUALIZACION = NULL WHERE N_CONEXION_PK = " + Constants.TIPO_CARGA_PREF);
                query2.executeUpdate();
            }
            if (id == Constants.TIPO_CARGA_SECCION) { //Para ODPE
                Query query = em.createNativeQuery("UPDATE CAB_CARGA SET N_ESTADO_FINAL = 0 WHERE N_TIPO_CARGA IN (" + Constants.TIPO_CARGA_LOCAL + ")");
                query.executeUpdate();
                Query query2 = em.createNativeQuery("UPDATE TAB_CONEXION SET D_AUD_FECHA_ACTUALIZACION = NULL WHERE N_CONEXION_PK = " + Constants.TIPO_CARGA_PREF);
                query2.executeUpdate();
            }
            if (id == Constants.TIPO_CARGA_LOCAL) {
                Query query = em.createNativeQuery("UPDATE TAB_CONEXION SET D_AUD_FECHA_ACTUALIZACION = NULL WHERE N_CONEXION_PK = " + Constants.TIPO_CARGA_PREF);
                query.executeUpdate();
            }
            em.getTransaction().commit();
            em.close();
            return true;
        } else {
            return false;
        }
                                       
    }   
    
    @Override
    public boolean executeService(int id, String url) {
        
        Integer estado = 0;
        try {
            String responseText = OnpeTrans.getInstance().sendPost("", url);
            if (responseText != null) {
                if (responseText.trim().length() != 0) {
                      
                    Type typeRae = new TypeToken<List<Rae>>() {
                    }.getType();  
                    
                    Type typeEtlv = new TypeToken<List<Rae>>() {
                    }.getType();
//                    JsonParser jsonParser = new JsonParser();                    
//                    JsonArray array = (JsonArray) jsonParser.parse(responseText);                                                                                
                    
                    if (id == Constants.TIPO_CARGA_ETLV) {
                        CompletableFuture<Integer> etlv = asyncCargarEtlv(responseText, typeEtlv);
                        estado = etlv.get();
                    } else if (id == Constants.TIPO_CARGA_RAE) {
                        CompletableFuture<Integer> rae = asyncCargarRae(responseText, typeRae);
                        estado = rae.get();
                    }                                                                                                    
                    
                } else {
                    estado = 0;
                }                                
            } else {
                estado = 0;
            }
        } catch (Exception ex) {
            estado = 0;
        } 
        
        if (estado == 1) {
            return true;
        } else {
            return false;
        }
        
    }  
                    
    @Async
    private CompletableFuture<Integer> asyncCargarPadron(String user) throws InterruptedException {
        logger.info("Looking up Cargar Padron");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_PADRON")                    
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCompila() throws InterruptedException {
        logger.info("Looking up Compila");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_OBJECT.SP_COMPILA")                    
                    .registerStoredProcedureParameter(1, Integer.class, ParameterMode.OUT);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(1);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarUbigeoOdpe(String user) throws InterruptedException {
        logger.info("Looking up Cargar Ubigeo Odpe");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_UBIGEO_ODPE")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarLocales(String user) throws InterruptedException {
        logger.info("Looking up Cargar Locales");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_LOCALES")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarPagina(String user) throws InterruptedException {
        logger.info("Looking up Cargar Pagina");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_WEB_ONPE")                    
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarConadis(String user) throws InterruptedException {
        logger.info("Looking up Cargar Conadis");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_CONADIS")                    
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }        
    
    @Async
    private CompletableFuture<Integer> asyncCargarEtlv(String response, Type type) throws InterruptedException, ParseException {
        logger.info("Looking up Cargar ETLV");
           
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery("TRUNCATE TABLE TAB_ETLV");
        query.executeUpdate();
        
        List<Etlv> lstEtlv = new Gson().fromJson(response, type);
        
        for (Etlv etlv : lstEtlv) {            
            query = em.createNativeQuery("INSERT INTO TAB_ETLV (C_DOCUMENTO_IDENTIDAD, C_UBIGEO, C_LOCAL_1, C_LOCAL_2, C_LOCAL_3, N_ATENCION_PREFERENCIAL, D_FECHA_MODIFICACION, N_PROCEDENCIA)"
                    + " VALUES(?,?,?,?,?,?,?,?)")                    
                    .setParameter(1, etlv.getC_DOCUMENTO_IDENTIDAD())
                    .setParameter(2, etlv.getC_UBIGEO())
                    .setParameter(3, etlv.getC_LOCAL_1())                    
                    .setParameter(4, etlv.getC_LOCAL_2())
                    .setParameter(5, etlv.getC_LOCAL_3())
                    .setParameter(6, etlv.getN_ATENCION_PREFERENCIAL())
                    .setParameter(7, etlv.getD_FECHA_MODIFICACION())
                    .setParameter(8, etlv.getN_TIPO_ETLV_CLV());
            query.executeUpdate();
        }
        
        em.getTransaction().commit();
        em.close();
                                
        Integer estado = 1;        
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarRae(String response, Type type) throws InterruptedException, ParseException {
        logger.info("Looking up Cargar ETLV");
                     
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        Query query = em.createNativeQuery("TRUNCATE TABLE TAB_RAE");
        query.executeUpdate();
        
        List<Rae> lstRae = new Gson().fromJson(response, type);
        
        for (Rae rae : lstRae) {            
            query = em.createNativeQuery("INSERT INTO TAB_RAE (C_DOCUMENTO_IDENTIDAD, C_UBIGEO, C_LOCAL, N_PROCEDENCIA, D_FECHA_EXPEDIENTE)"
                    + " VALUES(?,?,?,?,?)")                    
                    .setParameter(1, rae.getC_DOCUMENTO_IDENTIDAD())
                    .setParameter(2, rae.getC_UBIGEO())
                    .setParameter(3, rae.getC_LOCAL())
                    .setParameter(4, Constants.TIPO_CARGA_RAE_TEMP)
                    .setParameter(5, rae.getD_FECHA_EXPEDIENTE());
            query.executeUpdate();
        }
        
        em.getTransaction().commit();
        em.close();
                                
        Integer estado = 1;        
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarRaeDB(String user) throws InterruptedException {
        logger.info("Looking up Cargar Rae");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_RAE")                    
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarSeccionElector(String user) throws InterruptedException {
        logger.info("Looking up Cargar Preferencial");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_SECCION_ELECTOR")                    
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Async
    private CompletableFuture<Integer> asyncCargarPreferencial(String user) throws InterruptedException {
        logger.info("Looking up Cargar Preferencial");
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_CARGAR_PREFERENCIAL")                    
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);                    
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);
        return CompletableFuture.completedFuture(estado);
                                        
    }
    
    @Override
    public boolean executeReturnModule(String user, int opcion, int idProceso) {    
         
        Integer estado = 0;        
        try {
            
            CompletableFuture<Integer> module = asyncReturnModule(user, opcion, idProceso);
            estado = module.get(); 
            
            CompletableFuture<Integer> compile = asyncCompila();
            estado = compile.get(); 
            
        } catch (InterruptedException | ExecutionException ex) {
            estado = 0;
        }      
                
        if (estado == 1) {            
            return true;
        } else {
            return false;
        }
                                       
    } 
    
    @Async
    private CompletableFuture<Integer> asyncReturnModule(String user, int opcion, int idProceso) throws InterruptedException {
        logger.info("Looking up Return Module");                
        
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_UTIL.SP_REGRESAR")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(4, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user)
                    .setParameter(2, opcion)
                    .setParameter(3, idProceso);
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(4);                    
        return CompletableFuture.completedFuture(estado);                
                                        
    }
    
    @Override
    public boolean updateDataProcess(int proceso, int opcion) {         
        Integer estado = 0;        
        try {            
            CompletableFuture<Integer> update = asyncUpdateDataProcess(proceso, opcion);
            estado = update.get();                                    
        } catch (InterruptedException | ExecutionException ex) {
            estado = 0;
        }      
                
        if (estado == 1) {            
            return true;
        } else {
            return false;
        }                                       
    } 
    
    @Async
    private CompletableFuture<Integer> asyncUpdateDataProcess(int proceso, int opcion) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_UTIL.SP_DATOS_PROCESO")
                    .registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(3, Integer.class, ParameterMode.OUT)
                    .setParameter(1, proceso)
                    .setParameter(2, opcion);
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(3);                    
        return CompletableFuture.completedFuture(estado);                                        
    }
    
    @Override
    public void executeVistaSeccionLocal(){
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REPORTE.SP_VISTA_SECCION_LOCAL");                    
        query.execute();
                                    
    }
    
    @Override
    public void executeVistaSeccionMesa(){
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REPORTE.SP_VISTA_SECCION_MESA");                    
        query.execute();
                                    
    }   
}
