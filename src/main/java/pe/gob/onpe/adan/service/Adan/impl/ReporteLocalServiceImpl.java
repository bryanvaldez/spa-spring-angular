/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.ReporteLocalDao;
import pe.gob.onpe.adan.model.adan.ReporteLocal;
import pe.gob.onpe.adan.service.Adan.ReporteLocalService;

/**
 *
 * @author bvaldez
 */
@Service("reporteLocalService")
public class ReporteLocalServiceImpl implements ReporteLocalService{
    
    @Autowired
    private ReporteLocalDao dao;

    @Override
    public ReporteLocal getNacion(String tipo) {
        return dao.getNacion(tipo);
    }

    @Override
    public Object getNacion1(String tipo) {
        return dao.getNacion1(tipo);
    }
    
    @Override
    public ReporteLocal getPeru(String tipo) {
        return dao.getPeru(tipo);
    }

    @Override
    public Object getPeru1(String tipo) {
        return dao.getPeru1(tipo);
    }
    
    @Override
    public ReporteLocal getExtranjero(String tipo) {
        return dao.getExtranjero(tipo);
    }

    @Override
    public ReporteLocal getOdpe(String tipo, String codigo) {
        return dao.getOdpe(tipo, codigo);
    }

    @Override
    public ReporteLocal getOdpebyProvincia(String tipo, String codigo, String codigo2) {
        return dao.getOdpebyProvincia(tipo, codigo, codigo2);
    }

    @Override
    public ReporteLocal getOdpebyDepartamento(String tipo, String codigo, String codigo2) {
        return dao.getOdpebyDepartamento(tipo, codigo, codigo2);
    }

    @Override
    public ReporteLocal getDepartamentoOrContinente(String tipo, String codigo) {
        return dao.getDepartamentoOrContinente(tipo, codigo);
    }

    @Override
    public ReporteLocal getProvinciaOrPais(String tipo, String codigo) {
        return dao.getProvinciaOrPais(tipo, codigo);
    }

    @Override
    public ReporteLocal getDistritoOrCiudad(String tipo, String codigo) {
        return dao.getDistritoOrCiudad(tipo, codigo);
    }   

    @Override
    public Object getExtranjero1(String tipo) {
        return dao.getExtranjero1(tipo);
    }

    @Override
    public Object getOdpe1(String tipo, String codigo) {
        return dao.getOdpe1(tipo, codigo);
    }

    @Override
    public Object getOdpebyProvincia1(String tipo, String codigo, String codigo2) {
        return dao.getOdpebyProvincia1(tipo, codigo, codigo2);
    }

    @Override
    public Object getOdpebyDepartamento1(String tipo, String codigo, String codigo2) {
        return dao.getOdpebyDepartamento1(tipo, codigo, codigo2);
    }

    @Override
    public Object getDepartamentoOrContinente1(String tipo, String codigo) {
        return dao.getDepartamentoOrContinente1(tipo, codigo);
    }

    @Override
    public Object getProvinciaOrPais1(String tipo, String codigo) {
        return dao.getProvinciaOrPais1(tipo, codigo);
    }

    @Override
    public Object getDistritoOrCiudad1(String tipo, String codigo) {
        return dao.getDistritoOrCiudad1(tipo, codigo);
    }
    
}
