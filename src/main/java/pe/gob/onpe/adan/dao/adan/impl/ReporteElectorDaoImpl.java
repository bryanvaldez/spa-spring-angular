/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.NoResultException;
import javax.persistence.ParameterMode;
import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ReporteElectorDao;
import pe.gob.onpe.adan.model.adan.ReporteElector;
import pe.gob.onpe.adan.model.adan.ReporteElectorPorLocal;

/**
 *
 * @author bvaldez
 */
@Repository("reporteElectorDao")
public class ReporteElectorDaoImpl extends AbstractDao<Integer, ReporteElector> implements ReporteElectorDao {

    @Override
    public ReporteElector getNacion(String tipo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo")
                .setParameter("tipo", tipo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getPeru(String tipo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo")
                .setParameter("tipo", tipo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getExtranjero(String tipo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo")
                .setParameter("tipo", tipo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getOdpe(String tipo, String codigo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getOdpebyProvincia(String tipo, String codigo, String codigo2) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo AND r.C_UBIGEO = :codigo2")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .setParameter("codigo", codigo2)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getOdpebyDepartamento(String tipo, String codigo, String codigo2) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo AND r.C_UBIGEO = :codigo2")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .setParameter("codigo", codigo2)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getDepartamentoOrContinente(String tipo, String codigo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }        
    }

    @Override
    public ReporteElector getProvinciaOrPais(String tipo, String codigo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }

    @Override
    public ReporteElector getDistritoOrCiudad(String tipo, String codigo) {
        List<ReporteElector> lstElector = (List<ReporteElector>) getEntityManager()
                .createQuery("SELECT r FROM ReporteElector r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (lstElector.size() > 0) {
            return lstElector.get(0);
        }else{
            return null;
        }
    }
    
    @Override
    public ReporteElectorPorLocal getLocalOrMesa(String tipo, String codigo) {
           
        Query query = getEntityManager().createNativeQuery("SELECT * FROM TABLE(FN_DATOS_LOCAL(:codigo))")
                .setParameter("codigo", codigo);
        query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        List lstElector = query.getResultList();
               
        Gson gson = new Gson();
        ReporteElectorPorLocal elector = new ReporteElectorPorLocal();
        JsonParser jsonParser = new JsonParser();
        String temp = gson.toJson(lstElector);        
        JsonArray array = (JsonArray) jsonParser.parse(temp);
        for (JsonElement element : array) {
            elector = gson.fromJson(element, ReporteElectorPorLocal.class);
        }                               
        
        if (lstElector.size() > 0) {                                 
            return elector;
        }else{
            return null;
        }
    }

    @Override
    public String getReporteElector(Integer option, String ubigeo) {
        JsonObject jResponse = new JsonObject();        
        try {
            StoredProcedureQuery query = getEntityManager().createStoredProcedureQuery("PKG_CARGAR_DATOS.SP_DATOS_SECCION_ELECTOR")
                    .registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(2, String.class, ParameterMode.IN)
                    .registerStoredProcedureParameter(3, Integer.class, ParameterMode.OUT)
                    .registerStoredProcedureParameter(4, Double.class, ParameterMode.OUT)
                    .registerStoredProcedureParameter(5, Double.class, ParameterMode.OUT)
                    .registerStoredProcedureParameter(6, Integer.class, ParameterMode.OUT)
                    .setParameter(1, option) 
                    .setParameter(2, ubigeo);
            query.execute();
            Integer N_CANT_EH_NO_ASIGNADOS = (Integer) query.getOutputParameterValue(3);
            Double N_PORC_MUJERES_CPP = (Double) query.getOutputParameterValue(4);
            Double N_PORC_HOMBRES_CPP = (Double) query.getOutputParameterValue(5);
            Integer N_CANT_EH_PREFERENCIAL = (Integer) query.getOutputParameterValue(6);

            jResponse.addProperty("N_CANT_EH_PREFERENCIAL", N_CANT_EH_PREFERENCIAL);
            jResponse.addProperty("N_CANT_EH_NO_ASIGNADOS", N_CANT_EH_NO_ASIGNADOS);
            jResponse.addProperty("N_PORC_MUJERES_CPP", N_PORC_MUJERES_CPP);
            jResponse.addProperty("N_PORC_HOMBRES_CPP", N_PORC_HOMBRES_CPP);
            return new Gson().toJson(jResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public ArrayList getElectorByHistoricoAndMesa(String dni) {
        final String sql = "SELECT l.c_nombre, e.C_LOCAL, e.C_UBIGEO, null as c_mesa, null as C_ACTUAL FROM TAB_ELECTOR_HISTORICO e "
                + "inner join tab_local l on e.c_local = l.c_codigo and l.n_estado = 1 "
                + "WHERE C_DOCUMENTO_IDENTIDAD=:dni "
                + "union all "
                + "SELECT l.c_nombre, m.C_LOCAL, m.C_UBIGEO, m.c_mesa, 1 as C_ACTUAL FROM TAB_ASIGNACION_MESA m "
                + "inner join tab_local l on m.c_local = l.c_codigo and l.n_estado = 1 "
                + "WHERE C_DOCUMENTO_IDENTIDAD=:dni ";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("dni", dni);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }
    
    @Override
    public ArrayList getElectorByHistoricoAndLocal(String dni) {
        final String sql = "SELECT l.c_nombre, e.C_LOCAL, e.C_UBIGEO, null as c_mesa, null as C_ACTUAL FROM TAB_ELECTOR_HISTORICO e "
                + "inner join tab_local l on e.c_local = l.c_codigo and l.n_estado = 1 "
                + "WHERE C_DOCUMENTO_IDENTIDAD=:dni "
                + "union all "
                + "SELECT l.c_nombre, m.C_LOCAL, m.C_UBIGEO, null as C_MESA, 1 as C_ACTUAL FROM TAB_ASIGNACION_LOCAL m "
                + "inner join tab_local l on m.c_local = l.c_codigo and l.n_estado = 1 "
                + "WHERE C_DOCUMENTO_IDENTIDAD=:dni ";
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("dni", dni);
            query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
            List rows = query.getResultList();
            return new ArrayList(rows);
        } catch (NoResultException nre) {
            return null;
        }
    }
    
    @Override
    public boolean isAssignedMesaElector(String dni) {
        final String sql = "SELECT * FROM TAB_ASIGNACION_MESA WHERE C_DOCUMENTO_IDENTIDAD =:dni";
        boolean success = false;
        try {
            Query query = getEntityManager().createNativeQuery(sql);
            query.setParameter("dni", dni);
            List rows = query.getResultList();
            if(rows.size() != 0){   
                success = true;
            }
            return success;
        } catch (NoResultException nre) {
            return success;
        }
    }

}
