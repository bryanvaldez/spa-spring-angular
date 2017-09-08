/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.ParameterMode;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Service;
import pe.gob.onpe.adan.dao.adan.TreeTableDao;
import pe.gob.onpe.adan.model.adan.Local;

/**
 *
 * @author bvaldez
 */
@Service("treTableService")
public class TreTableDaoImpl extends AbstractDao<Integer, Local> implements TreeTableDao {

    @Override
    public ArrayList getChildrenTotal(String idPadre) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE=:idPadre";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("idPadre", idPadre);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getChildrenCCPP(String idPadre) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE=:idPadre";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("idPadre", idPadre);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getChildrenNoCCPP(String idPadre) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE=:idPadre";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("idPadre", idPadre);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getParentTotal(String id) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO=:id";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("id", id);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getParentCCPP(String id) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO=:id";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("id", id);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getParentNoCCPP(String id) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO=:id";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("id", id);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getTipoSolucion(int estado) {
        final String sql = "SELECT C_ALIAS FROM TAB_TIPO_SOLUCION WHERE N_ESTADO=:estado ORDER BY N_TIPO_SOLUCION_PK";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("estado", estado);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public void updateSolucionTotal(String id, int solucion) {        
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION=:solucion WHERE C_CODIGO=:id");
            query.setParameter("id", id);
            query.setParameter("solucion", solucion);
            query.executeUpdate();
            query = null;
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }                
    }

    @Override
    public void updateSolucionCCPP(String id, int solucion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION=:solucion WHERE C_CODIGO=:id AND C_CCPP is not null");
            query.setParameter("id", id);
            query.setParameter("solucion", solucion);
            query.executeUpdate();
            query = null;
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }        
    }

    @Override
    public void updateSolucionNoCCPP(String id, int solucion) {
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();                                          
        try {                                    
            em.getTransaction().begin();                        
            Query query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION=:solucion WHERE C_CODIGO=:id AND C_CCPP is null");
            query.setParameter("id", id);
            query.setParameter("solucion", solucion);
            query.executeUpdate();
            query = null;
        } catch (Exception ex) {
            ex.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.getTransaction().commit();
            em.close();
        }                
    }

    @Override
    public ArrayList getValidacion(int solucion) {
        final String sql = "SELECT C_CODIGO FROM TAB_LOCAL WHERE N_TIPO_SOLUCION=:solucion";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("solucion", solucion);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public void executeVista(int tipo, int solucion) {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REPORTE.SP_VISTA_LOCALES_SOLUCION")
                .registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN)
                .registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN)
                .setParameter(2, solucion)
                .setParameter(1, tipo);
        query.execute();
    }

    @Override
    public ArrayList getChildrenFiltro(String id, String idPadre) {
        final String sql = "SELECT * FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO=:id AND C_CODIGO_PADRE=:idPadre";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("id", id);
            query.setParameter("idPadre", idPadre);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getFiltroMasivo(String id) {
        final String sql = "SELECT C_CODIGO,SUBSTR(C_UBIGEO,1,2) || '0000' DEP, SUBSTR(C_UBIGEO,1,4) || '00' PRO, C_UBIGEO DIS, CASE WHEN SUBSTR(C_UBIGEO,1,1) = '9' THEN '900000' ELSE '000000' END NIVEL_1 FROM TAB_LOCAL WHERE C_CODIGO=:id AND N_ESTADO = 1";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("id", id);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getLocalesAutocomplete(String value, String tipo) {
        try {
            String sql = "";
            switch (tipo) {
                case "1":
                    sql = "SELECT TYPE, VALUE, DISPLAY, AUX,N_LOCAL FROM (SELECT 'LOCAL' AS TYPE, L.C_CODIGO AS VALUE, D.DESCRIPCION || ' | ' || P.DESCRIPCION || ' | ' || DI.DESCRIPCION || '  |  ' || L.C_NOMBRE AS DISPLAY , L.C_CODIGO_PADRE AS AUX,N_LOCAL FROM VW_LOCALES_SOLUCION_TOTAL L INNER JOIN TAB_UBIGEO D ON D.UBIGEO = SUBSTR(L.C_CODIGO_PADRE,1,2) || '0000' INNER JOIN TAB_UBIGEO P ON P.UBIGEO = SUBSTR(L.C_CODIGO_PADRE,1,4) || '00' INNER JOIN TAB_UBIGEO DI ON DI.UBIGEO = L.C_CODIGO_PADRE) WHERE DISPLAY LIKE :value AND ROWNUM <= 100 AND N_LOCAL=0 ORDER BY DISPLAY";
                    break;
                case "2":
                    sql = "SELECT TYPE, VALUE, DISPLAY, AUX,N_LOCAL FROM (SELECT 'LOCAL' AS TYPE, L.C_CODIGO AS VALUE, D.DESCRIPCION || ' | ' || P.DESCRIPCION || ' | ' || DI.DESCRIPCION || '  |  ' || L.C_NOMBRE AS DISPLAY , L.C_CODIGO_PADRE AS AUX,N_LOCAL FROM VW_LOCALES_SOLUCION_CCPP L INNER JOIN TAB_UBIGEO D ON D.UBIGEO = SUBSTR(L.C_CODIGO_PADRE,1,2) || '0000' INNER JOIN TAB_UBIGEO P ON P.UBIGEO = SUBSTR(L.C_CODIGO_PADRE,1,4) || '00' INNER JOIN TAB_UBIGEO DI ON DI.UBIGEO = L.C_CODIGO_PADRE) WHERE DISPLAY LIKE :value AND ROWNUM <= 100 AND N_LOCAL=0 ORDER BY DISPLAY";
                    break;
                case "3":
                    sql = "SELECT TYPE, VALUE, DISPLAY, AUX,N_LOCAL FROM (SELECT 'LOCAL' AS TYPE, L.C_CODIGO AS VALUE, D.DESCRIPCION || ' | ' || P.DESCRIPCION || ' | ' || DI.DESCRIPCION || '  |  ' || L.C_NOMBRE AS DISPLAY , L.C_CODIGO_PADRE AS AUX,N_LOCAL FROM VW_LOCALES_SOLUCION_NO_CCPP L INNER JOIN TAB_UBIGEO D ON D.UBIGEO = SUBSTR(L.C_CODIGO_PADRE,1,2) || '0000' INNER JOIN TAB_UBIGEO P ON P.UBIGEO = SUBSTR(L.C_CODIGO_PADRE,1,4) || '00' INNER JOIN TAB_UBIGEO DI ON DI.UBIGEO = L.C_CODIGO_PADRE) WHERE DISPLAY LIKE :value AND ROWNUM <= 100 AND N_LOCAL=0 ORDER BY DISPLAY";
                    break;
            }
            Query query = getEntityManager().createNativeQuery(sql);
            value = '%' + value.toUpperCase() + '%';
            query.setParameter("value", value);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public void updateSolucionMasiva(String idPadre, int solucion, String nivel, String nacion, String filtroTipo, String filtroAsignados, String filtroSolucion) {
        // String concatenado = nacion + "" + filtroTipo + "" + nivel;
        String concatenado = "0" + "" + filtroTipo + "" + nivel;
        String sql = "";
        Query query = null;
        
        EntityManager em = getEntityManager().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();
        
        switch (concatenado) {
            //DEPARTAMENTO
            case "012":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Departamento|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Departamento|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Departamento|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Departamento|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Departamento|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Departamento|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            case "022":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Departamento|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Departamento|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Departamento|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Departamento|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Departamento|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Departamento|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            case "032":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Departamento|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Departamento|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Departamento|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Departamento|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Departamento|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Departamento|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,2) || '0000' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            //PROVINCIA
            case "013":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Provincia|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Provincia|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Provincia|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Provincia|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Provincia|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Provincia|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            case "023":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Provincia|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Provincia|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Provincia|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Provincia|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Provincia|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Provincia|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            case "033":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Provincia|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Provincia|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Provincia|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Provincia|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Provincia|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Provincia|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE SUBSTR(C_CODIGO_PADRE,1,4) || '00' IN :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            //DISTRITO
            case "014":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Distrito|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Distrito|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Distrito|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Distrito|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:TODOS|Nivel:Distrito|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:TODOS|Nivel:Distrito|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_TOTAL WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            case "024":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Distrito|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Distrito|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Distrito|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Distrito|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:CCPP|Nivel:Distrito|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:CCPP|Nivel:Distrito|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
            case "034":
                switch (filtroAsignados) {
                    case "1":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Distrito|Estado:TODOS|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Distrito|Estado:TODOS|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion)");
                            query.setParameter("fSolucion", fSolucion);
                        }
                        break;
                    case "2":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Distrito|Estado:Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 1)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Distrito|Estado:Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 1");
                            query.setParameter("fSolucion", fSolucion);
                        }
                    case "3":
                        if (filtroSolucion.equals("0")) {
                            //PERU|Tipo:NO_CCPP|Nivel:Distrito|Estado:No Asignados|Solucion:TODOS
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_ASIGNACION = 0)");
                        } else {
                            //PERU|Tipo:NO_CCPP|Nivel:Distrito|Estado:No Asignados|Solucion:Any
                            int fSolucion = Integer.parseInt(filtroSolucion);
                            query = em.createNativeQuery("UPDATE TAB_LOCAL SET N_TIPO_SOLUCION = :solucion WHERE  C_CODIGO IN (SELECT C_CODIGO FROM VW_LOCALES_SOLUCION_NO_CCPP WHERE C_CODIGO_PADRE = :idPadre AND N_ESTADO = 1 AND N_TIPO_SOLUCION=:fSolucion) AND N_ASIGNACION = 0");
                            query.setParameter("fSolucion", fSolucion);
                        }
                }
                break;
        }
        query.setParameter("idPadre", idPadre);
        query.setParameter("solucion", solucion);
        query.executeUpdate();
        query = null;
        
        em.getTransaction().commit();
        em.close();
    }

    @Override
    public ArrayList getResumen(String sqlQuery) {
        final String sql = sqlQuery;
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public String executeResumenQuery() {
        StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_REPORTE.SP_RESUMEN_FICHA_TECNICA")
                .registerStoredProcedureParameter(1, String.class, ParameterMode.OUT);
        query.execute();
        String sqlQuery = (String) query.getOutputParameterValue(1);
        return sqlQuery;
    }

    @Override
    public String executeElectoresAsignar(int opcion) {
        try {
            int var1= opcion;
            String var2 = "NACION";
            
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_DATOS_SECCION_ELECTOR")
                    .registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(3, Integer.class, ParameterMode.OUT)
                    .registerStoredProcedureParameter(4, Integer.class, ParameterMode.OUT)
                    .registerStoredProcedureParameter(5, Integer.class, ParameterMode.OUT)
                    .registerStoredProcedureParameter(6, Integer.class, ParameterMode.OUT)
                    .setParameter(1, var1)
                    .setParameter(2, var2);
            query.execute();           
            Integer a1 = (Integer) query.getOutputParameterValue(3);
            Integer a2 = (Integer) query.getOutputParameterValue(4);
            Integer a3 = (Integer) query.getOutputParameterValue(5);
            Integer a4 = (Integer) query.getOutputParameterValue(6);

            return a1.toString();
        } catch (Exception e) {
            return "false";
        }
    }

    @Override
    public ArrayList getListaDistritosFaltantes() {
        final String sql = "SELECT A.UBIGEO,B.DEPARTAMENTO,B.PROVINCIA,B.DISTRITO FROM TAB_UBIGEO A INNER JOIN VW_CONS_UBIGEO B ON A.UBIGEO = B.UBIGEO WHERE N_CMS =2";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }

    @Override
    public ArrayList getListaDistritosAsignados() {
       final String sql = "SELECT A.UBIGEO,B.DEPARTAMENTO,B.PROVINCIA,B.DISTRITO FROM TAB_UBIGEO A INNER JOIN VW_CONS_UBIGEO B ON A.UBIGEO = B.UBIGEO WHERE N_CMS =3";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }


    

}
