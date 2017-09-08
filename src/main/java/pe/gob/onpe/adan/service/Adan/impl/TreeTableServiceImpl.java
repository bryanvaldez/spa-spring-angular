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
import pe.gob.onpe.adan.dao.adan.TreeTableDao;
import pe.gob.onpe.adan.service.Adan.TreeTableService;

/**
 *
 * @author bvaldez
 */
@Service("treeTableService")
public class TreeTableServiceImpl implements TreeTableService {

    @Autowired
    private TreeTableDao treeTableDao;

    @Override
    public ArrayList getChildrenTotal(String idPadre) {
        return treeTableDao.getChildrenTotal(idPadre);
    }

    @Override
    public ArrayList getChildrenCCPP(String idPadre) {
        return treeTableDao.getChildrenCCPP(idPadre);
    }

    @Override
    public ArrayList getChildrenNoCCPP(String idPadre) {
        return treeTableDao.getChildrenNoCCPP(idPadre);
    }

    @Override
    public ArrayList getParentTotal(String id) {
        return treeTableDao.getParentTotal(id);
    }

    @Override
    public ArrayList getParentCCPP(String id) {
        return treeTableDao.getParentCCPP(id);
    }

    @Override
    public ArrayList getParentNoCCPP(String id) {
        return treeTableDao.getParentNoCCPP(id);
    }

    @Override
    public ArrayList getTipoSolucion(int estado) {
        return treeTableDao.getTipoSolucion(estado);
    }

    @Override
    public void updateSolucionTotal(String id, int solucion) {
        treeTableDao.updateSolucionTotal(id, solucion);
    }

    @Override
    public void updateSolucionCCPP(String id, int solucion) {
        treeTableDao.updateSolucionCCPP(id, solucion);
    }

    @Override
    public void updateSolucionNoCCPP(String id, int solucion) {
        treeTableDao.updateSolucionNoCCPP(id, solucion);
    }

    @Override
    public ArrayList getValidacion(int solucion) {
        return treeTableDao.getValidacion(solucion);
    }

    @Override
    public void executeVista(int tipo, int solucion) {
        treeTableDao.executeVista(tipo, solucion);
    }

    @Override
    public ArrayList getChildrenFiltro(String id, String idPadre) {
        return treeTableDao.getChildrenFiltro(id, idPadre);
    }

    @Override
    public ArrayList getFiltroMasivo(String id) {
        return treeTableDao.getFiltroMasivo(id);
    }

    @Override
    public ArrayList getLocalesAutocomplete(String value, String tipo) {
        return treeTableDao.getLocalesAutocomplete(value, tipo);
    }

    @Override
    public void updateSolucionMasiva(String idPadre, int solucion, String nivel, String nacion, String filtroTipo, String filtroAsignados, String filtroSolucion) {
        treeTableDao.updateSolucionMasiva(idPadre, solucion, nivel, nacion, filtroTipo, filtroAsignados, filtroSolucion);
    }

    @Override
    public ArrayList getResumen(String sqlQuery) {
        return treeTableDao.getResumen(sqlQuery);
    }

    @Override
    public String executeResumenQuery() {
        return treeTableDao.executeResumenQuery();
    }

    @Override
    public String executeElectoresAsignar(int opcion) {
        return treeTableDao.executeElectoresAsignar(opcion);
    }

    @Override
    public ArrayList getListaDistritosAsignados() {
        return treeTableDao.getListaDistritosAsignados();
    }

    @Override
    public ArrayList getListaDistritosFaltantes() {
        return treeTableDao.getListaDistritosFaltantes();
    }

}
