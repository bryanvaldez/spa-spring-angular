/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import crypto.util.encription.Crypto;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ReporteDao;
import pe.gob.onpe.adan.helper.Filtro;
import pe.gob.onpe.adan.model.adan.Reporte;
import pe.gob.onpe.onpe.security.OnpeKeys;

/**
 *
 * @author marrisueno
 */
@Repository("reporteDao")
public class ReporteDaoImpl extends AbstractDao<Integer, Reporte> implements ReporteDao {

    private JdbcTemplate jdbcTemplateObject;

    public void setDataSource(String url) throws Exception {
        url = decryptData(url);
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("oracle.jdbc.OracleDriver");
        dataSource.setUrl(url);
        this.jdbcTemplateObject = new JdbcTemplate(dataSource);
    }

    @Override
    public Reporte findById(int id) {
        return getByKey(id);
    }

    @Override
    public List<Reporte> findAllReporte() {
        List<Reporte> reporte = getEntityManager()
                .createQuery("SELECT c FROM Reporte c WHERE c.estado = 1")
                .getResultList();
        return reporte;
    }

    @Override
    public List execute(String sql, Filtro filter, String url) {
        if (filter.getFiltro().equals("reporteForm1")) {
//            sql = sql.replace(":UBIGEO", "'" + filter.getUbigeo() + "%'");
        }
        if (filter.getFiltro().equals("reporteForm2")) {
//            sql = sql.replace(":UBIGEO", "'" + filter.getUbigeo() + "%'");
//            sql = sql.replace(":FECHAINI", "'" + filter.getFechaIni() + "'");
//            sql = sql.replace(":FECHAFIN", "'" + filter.getFechaFin() + "'");
        }
        if (filter.getFiltro().equals("reporteForm3")) {

        }
        try {
            setDataSource(url);
            return jdbcTemplateObject.queryForList(sql);
        } catch (Exception ex) {
            return null;
        }

    }

    @Override
    public List execute(String sql, String url) {
        try {
            setDataSource(url);
            return jdbcTemplateObject.queryForList(sql);
        } catch (Exception ex) {
            return null;
        }

    }
    
    @Override
    public Reporte findByCodigo(String codigo) {
        List<Reporte> reporte = getEntityManager()
                .createQuery("SELECT c FROM Reporte c WHERE c.codigo = :codigo")
                .setParameter("codigo", codigo)
                .getResultList();

        if (reporte.size() > 0) {
            return reporte.get(0);
        } else {
            return null;
        }
    }

    public String decryptData(String data) throws Exception {
        String creadential = null;
        try {
            Crypto crypto = Crypto.getInstance(OnpeKeys.ENCRYPT);
            creadential = crypto.decrypt(data);
        } catch (Exception e) {
            return null;
        }
        return creadential;
    }

}
