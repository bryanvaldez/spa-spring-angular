/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 *
 * @author bvaldez
 */
public abstract class AbstractDao<PK extends Serializable, T> {
    
    private final Class<T> persistentClass; 
    private static ThreadLocal<HttpServletRequest> localRequest = new ThreadLocal<HttpServletRequest>();    
        
    EntityManager entityManager = null;
    @PersistenceContext(unitName="adanEntityManagerFactory01")
    EntityManager process01;
    @PersistenceContext(unitName="adanEntityManagerFactory02")
    EntityManager process02;
    @PersistenceContext(unitName="adanEntityManagerFactory03")
    EntityManager process03;  
    @PersistenceContext(unitName="adanEntityManagerFactory04")
    EntityManager process04;  
    @PersistenceContext(unitName="adanEntityManagerFactory05")
    EntityManager process05;  
    @PersistenceContext(unitName="adanEntityManagerFactory06")
    EntityManager process06;  
    @PersistenceContext(unitName="adanEntityManagerFactory07")
    EntityManager process07;  
    @PersistenceContext(unitName="adanEntityManagerFactory08")
    EntityManager process08;  
    @PersistenceContext(unitName="adanEntityManagerFactory09")
    EntityManager process09;  
    @PersistenceContext(unitName="adanEntityManagerFactory10")
    EntityManager process10;  
    @PersistenceContext(unitName="adanEntityManagerFactory11")
    EntityManager process11; 
    @PersistenceContext(unitName="adanEntityManagerFactory12")
    EntityManager process12; 
    @PersistenceContext(unitName="adanEntityManagerFactory13")
    EntityManager process13; 
    @PersistenceContext(unitName="adanEntityManagerFactory14")
    EntityManager process14; 
    @PersistenceContext(unitName="adanEntityManagerFactory15")
    EntityManager process15;     
    
    @SuppressWarnings("unchecked")
    public AbstractDao(){
            this.persistentClass =(Class<T>) ((ParameterizedType) 
            this.getClass().getGenericSuperclass()).getActualTypeArguments()[1];
    }        
    
    protected EntityManager getEntityManager(){
        String a = getSessionDatasource();  
        switch (a) {
            case "1":
                entityManager = this.process01;
                break;
            case "2":
                entityManager = this.process02;
                break;
            case "3":
                entityManager = this.process03;
                break;
            case "4":
                entityManager = this.process04;
                break;
            case "5":
                entityManager = this.process05;
                break;
            case "6":
                entityManager = this.process06;
                break;
            case "7":
                entityManager = this.process07;
                break;
            case "8":
                entityManager = this.process08;
                break;
            case "9":
                entityManager = this.process09;
                break;
            case "10":
                entityManager = this.process10;
                break;
            case "11":
                entityManager = this.process11;
                break;
            case "12":
                entityManager = this.process12;
                break;
            case "13":
                entityManager = this.process13;
                break;
            case "14":
                entityManager = this.process14;
                break;  
            case "15":
                entityManager = this.process15;
                break;                 
                
        }           
        return this.entityManager;
    }        
        
    protected T getByKey(PK key) {
            return (T) getEntityManager().find(persistentClass, key);
    }

    protected void persist(T entity) {
            getEntityManager().persist(entity);
    }
          
    protected void update(T entity) {
            getEntityManager().merge(entity);
    }    
    
    protected void delete(T entity) {
            getEntityManager().remove(entity);
    }
    
    protected String getSessionDatasource(){
        ServletRequestAttributes request = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = request.getRequest().getSession();
        if(request != null){
            String client = session.getAttribute("CODIGO_PROCESO").toString();
            return client; 
        }
        return null;
    }   

}