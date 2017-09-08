/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ReporteMesaDao;
import pe.gob.onpe.adan.model.adan.ReporteMesa;

/**
 *
 * @author bvaldez
 */
@Repository("reporteMesaDao")
public class ReporteMesaDaoImpl extends AbstractDao<Integer, ReporteMesa> implements ReporteMesaDao {

    @Override
    public ReporteMesa getNacion(String tipo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo")
                .setParameter("tipo", tipo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getNacion1(String tipo) {                
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo");
        query.setParameter("tipo", tipo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getPeru(String tipo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo")
                .setParameter("tipo", tipo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getPeru1(String tipo) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo");
        query.setParameter("tipo", tipo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getExtranjero(String tipo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo")
                .setParameter("tipo", tipo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getExtranjero1(String tipo) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo");
        query.setParameter("tipo", tipo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getOdpe(String tipo, String codigo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteLocal r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getOdpe1(String tipo, String codigo) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo");
        query.setParameter("tipo", tipo);
        query.setParameter("codigo", codigo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getOdpebyProvincia(String tipo, String codigo, String codigo2) {
       List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo AND r.C_UBIGEO = :codigo2")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .setParameter("codigo", codigo2)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getOdpebyProvincia1(String tipo, String codigo, String codigo2) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo AND r.C_UBIGEO = :codigo2");
        query.setParameter("tipo", tipo);
        query.setParameter("codigo", codigo);
        query.setParameter("codigo2", codigo2);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getOdpebyDepartamento(String tipo, String codigo, String codigo2) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo AND r.C_UBIGEO = :codigo2")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .setParameter("codigo", codigo2)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getOdpebyDepartamento1(String tipo, String codigo, String codigo2) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_CODIGO_ODPE = :codigo AND r.C_UBIGEO = :codigo2");
        query.setParameter("tipo", tipo);
        query.setParameter("codigo", codigo);
        query.setParameter("codigo2", codigo2);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getDepartamentoOrContinente(String tipo, String codigo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getDepartamentoOrContinente1(String tipo, String codigo) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo");
        query.setParameter("tipo", tipo);
        query.setParameter("codigo", codigo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getProvinciaOrPais(String tipo, String codigo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getProvinciaOrPais1(String tipo, String codigo) {
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo");
        query.setParameter("tipo", tipo);
        query.setParameter("codigo", codigo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }
    }

    @Override
    public ReporteMesa getDistritoOrCiudad(String tipo, String codigo) {
        List<ReporteMesa> reporteMesa = (List<ReporteMesa>) getEntityManager()
                .createQuery("SELECT r FROM ReporteMesa r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo")
                .setParameter("tipo", tipo)
                .setParameter("codigo", codigo)
                .getResultList();
        if (reporteMesa.size() > 0) {
            return reporteMesa.get(0);
        } else {
            return null;
        }
    }
    
    @Override
    public Object getDistritoOrCiudad1(String tipo, String codigo) {        
        List lst = null;
        Query query = getEntityManager().createNativeQuery("SELECT r.* FROM VW_SECCION_MESA r WHERE r.C_TIPO_CONSULTA = :tipo AND r.C_UBIGEO = :codigo");
        query.setParameter("tipo", tipo);
        query.setParameter("codigo", codigo);
        lst = query.getResultList();
        if (lst.size() > 0) {
            return lst.get(0);
        } else {
            return null;
        }                        
    }

}
