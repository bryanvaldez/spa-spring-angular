/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.ReporteElectorDao;
import pe.gob.onpe.adan.model.adan.ReporteElector;
import pe.gob.onpe.adan.model.adan.ReporteElectorPorLocal;
import pe.gob.onpe.adan.service.Adan.ReporteElectorService;

/**
 *
 * @author bvaldez
 */
@Service("reporteElectorService")
public class ReporteElectorServiceImpl implements ReporteElectorService{
   
    @Autowired
    private ReporteElectorDao dao;    

    @Override
    public ReporteElector getNacion(String tipo) {
        return dao.getNacion(tipo);
    }

    @Override
    public ReporteElector getPeru(String tipo) {
        return dao.getPeru(tipo);
    }

    @Override
    public ReporteElector getExtranjero(String tipo) {
        return dao.getExtranjero(tipo);
    }

    @Override
    public ReporteElector getOdpe(String tipo, String codigo) {
        return dao.getOdpe(tipo,codigo);
    }

    @Override
    public ReporteElector getOdpebyProvincia(String tipo, String codigo, String codigo2) {
        return dao.getOdpebyProvincia(tipo,codigo,codigo2);
    }

    @Override
    public ReporteElector getOdpebyDepartamento(String tipo, String codigo, String codigo2) {
        return dao.getOdpebyDepartamento(tipo,codigo,codigo2);
    }

    @Override
    public ReporteElector getDepartamentoOrContinente(String tipo, String codigo) {
        return dao.getDepartamentoOrContinente(tipo,codigo);
    }

    @Override
    public ReporteElector getProvinciaOrPais(String tipo, String codigo) {
        return dao.getProvinciaOrPais(tipo,codigo);
    }

    @Override
    public ReporteElector getDistritoOrCiudad(String tipo, String codigo) {
        return dao.getDistritoOrCiudad(tipo,codigo);
    }
    
    @Override
    public ReporteElectorPorLocal getLocalOrMesa(String tipo, String codigo) {
        return dao.getLocalOrMesa(tipo,codigo);
    }

    @Override
    public String getReporteElector(Integer option, String ubigeo) {
        return dao.getReporteElector(option, ubigeo);
    }

    @Override
    public ArrayList getElectorByHistoricoAndMesa(String dni) {
        return dao.getElectorByHistoricoAndMesa(dni);
    }

    @Override
    public ArrayList getElectorByHistoricoAndLocal(String dni) {
        return dao.getElectorByHistoricoAndLocal(dni);
    }

    @Override
    public boolean isAssignedMesaElector(String dni) {
        return dao.isAssignedMesaElector(dni);
    }    
    
}
