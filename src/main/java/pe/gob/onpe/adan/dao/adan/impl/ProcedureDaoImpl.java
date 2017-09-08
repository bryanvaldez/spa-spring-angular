/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.concurrent.CompletableFuture;
import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.adan.dao.adan.ProcedureDao;
import pe.gob.onpe.adan.model.adan.Parametro;

/**
 *
 * @author bvaldez
 */
@EnableAsync
@Repository("procedureDao")
public class ProcedureDaoImpl extends AbstractDao<Integer, Parametro> implements ProcedureDao{   
      
    @Override
    public String executeAsignacionElector(String dni, String oldLocal, String newLocal, String user) {
        JsonObject jResponse = new JsonObject();
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REASIGNACIONES.SP_ASIGNACION_ELECTOR")                    
                        .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)   
                        .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(3, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(4, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(5, Integer.class, ParameterMode.OUT)
                        .registerStoredProcedureParameter(6, String.class, ParameterMode.OUT)
                        .setParameter(1, dni)
                        .setParameter(2, oldLocal)  
                        .setParameter(3, newLocal)  
                        .setParameter(4, user);                    
            query.execute(); 
            Integer status = (Integer) query.getOutputParameterValue(5);  
            String message = (String) query.getOutputParameterValue(6);  
            
            jResponse.addProperty("status", status);
            jResponse.addProperty("message", message);      
            return new Gson().toJson(jResponse);           
        } catch (Exception e) {
            return "false";  
        }
    }
    @Override
    public String executeReAsignacionMesa(String mesa, String oldLocal, String newLocal, String user) {
        JsonObject jResponse = new JsonObject();
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REASIGNACIONES.SP_ASIGNACION_MESA")                    
                        .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)   
                        .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(3, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(4, String.class, ParameterMode.IN)
                        .registerStoredProcedureParameter(5, Integer.class, ParameterMode.OUT)
                        .registerStoredProcedureParameter(6, String.class, ParameterMode.OUT)
                        .setParameter(1, mesa)
                        .setParameter(2, oldLocal)  
                        .setParameter(3, newLocal)  
                        .setParameter(4, user);                    
            query.execute(); 
            Integer status = (Integer) query.getOutputParameterValue(5);  
            String message = (String) query.getOutputParameterValue(6);  
            
            jResponse.addProperty("status", status);
            jResponse.addProperty("message", message);      
            return new Gson().toJson(jResponse);           
        } catch (Exception e) {
            return "false";  
        }
    }        
    @Override
    public Integer executeGenerateLepa(String user, int process) {
        Integer status = 0;        
        try {
            CompletableFuture<Integer> lepa = asyncGenerateLepa(user, process);
            status = lepa.get();                                    
        } catch (Exception ex) {
            status = 0;
        }         
        return status;
    }   
    @Override
    public Integer executeGenerateManualLepa(String user, int process) {
        Integer status = 0;        
        try {
            CompletableFuture<Integer> lepa = asyncGenerateManualLepa(user, process);
            status = lepa.get();                                    
        } catch (Exception ex) {
            status = 0;
        }         
        return status;
    }    
    @Override
    public Integer executeLesaToSige(String user) {
        Integer status = 0;
        
        try {
            CompletableFuture<Integer> lesa = asyncLesaToSige(user);
            status = lesa.get();                                    
        } catch (Exception ex) {
            status = 0;
        } 
        
        return status;
    }    
    @Override
    public Integer executeUpdateSige(String user) {
        Integer status = 0;
        
        try {
            CompletableFuture<Integer> sige = asyncUpdateSige(user);
            status = sige.get();                                    
        } catch (Exception ex) {
            status = 0;
        } 
        
        return status;
    }    
    @Override
    public Integer executeAssignHistory(String user, int process) {
        Integer status = 0;
        
        try {
            CompletableFuture<Integer> history = asyncAssignHistory(user, process);
            status = history.get();                                    
        } catch (Exception ex) {
            status = 0;
        } 
        
        return status;
    }
    @Override
    public Integer executeAssignHistory2(String user, int process) {
        Integer status = 0;
        
        try {
            CompletableFuture<Integer> history = asyncAssignHistory2(user, process);
            status = history.get();                                    
        } catch (Exception ex) {
            status = 0;
        } 
        
        return status;
    }    
    @Override
    public Integer executeConformationBdonpe(String user, int process) {
        Integer status = 0;
        
        try {
            CompletableFuture<Integer> history = asyncConformationBdonpe(user, process);
            status = history.get();                                    
        } catch (Exception ex) {
            status = 0;
        } 
        
        return status;
    }    
    @Async
    private CompletableFuture<Integer> asyncGenerateLepa(String user, int process) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_AUTOMATICA.SP_ASIGNACION_LEPA")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .setParameter(1, user)
                    .setParameter(2, process);
        query.execute();
                                
        Integer estado = 1;                    
        return CompletableFuture.completedFuture(estado);                                       
    }
    @Async
    private CompletableFuture<Integer> asyncGenerateManualLepa(String user, int process) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_MANUAL.SP_ASIGNACION_LEPA")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .setParameter(1, user)
                    .setParameter(2, process);
        query.execute();
                                
        Integer estado = 1;                    
        return CompletableFuture.completedFuture(estado);                                       
    }     
    @Async
    private CompletableFuture<Integer> asyncLesaToSige(String user) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_AUTOMATICA.")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);                                       
    }    
    @Async
    private CompletableFuture<Integer> asyncUpdateSige(String user) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_AUTOMATICA.SP_SIMULAR_SIGE")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.OUT)
                    .setParameter(1, user);
        query.execute();
                                
        Integer estado = (Integer) query.getOutputParameterValue(2);                    
        return CompletableFuture.completedFuture(estado);                                       
    }    
    @Async
    private CompletableFuture<Integer> asyncAssignHistory(String user, int process) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_AUTOMATICA.SP_ASIGNACION_LOCAL_PART2")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .setParameter(1, user)
                    .setParameter(2, process);
        query.execute();
                                
        Integer estado = 1;                    
        return CompletableFuture.completedFuture(estado);                                       
    }
    @Async
    private CompletableFuture<Integer> asyncAssignHistory2(String user, int process) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_MANUAL.SP_ASIGNACION_LOCAL_PART2")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .setParameter(1, user)
                    .setParameter(2, process);
        query.execute();
                                
        Integer estado = 1;                    
        return CompletableFuture.completedFuture(estado);                                       
    }    
    @Async
    private CompletableFuture<Integer> asyncConformationBdonpe(String user, int process) throws InterruptedException {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_ASIGNACION_AUTOMATICA.SP_CONFORMAR_MESAS")
                    .registerStoredProcedureParameter(1, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                    .setParameter(1, user)
                    .setParameter(2, process);
        query.execute();
                                
        Integer estado = 1;                    
        return CompletableFuture.completedFuture(estado);                                       
    }    
    @Override
    public String getPercentageLepa() {
        final String sql = "select ROUND(NVL(sum(n_resultado),0)*100/COUNT(*)) as percentage from tab_ubigeo where n_cms is not null";  
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            String result = String.valueOf(query.getSingleResult());
            return result;                
        } catch (Exception nre) {
            return null;
        }
    }
    @Override
    public boolean cleanProcedure() {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {  
            final String sql = "UPDATE TAB_UBIGEO SET N_RESULTADO = NULL,C_LOG = NULL WHERE UBIGEO IN (SELECT UBIGEO FROM VW_CONS_UBIGEO)";
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery(sql);
            query.executeUpdate(); 
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
            return false;
        } finally {
            em.getTransaction().commit();
            em.close();
        }                
    }

    @Override
    public String validateUbigeos(int type, int status) {
        final String sql;
        if(type == Constants.EXIST){
            sql = "SELECT COUNT(UBIGEO) FROM TAB_UBIGEO WHERE N_CMS = :status";
        }else{
            sql = "SELECT COUNT(UBIGEO) FROM TAB_UBIGEO WHERE N_CMS != :status";  
        }
        try {
            Query query = getEntityManager().createNativeQuery(sql); 
            query.setParameter("status", status);
            String result = String.valueOf(query.getSingleResult()); 
            return result;                     
        } catch (Exception nre) {
            return null;
        }
    }

}
