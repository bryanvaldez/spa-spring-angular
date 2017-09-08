/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Admin.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.model.admin.Proceso;
import pe.gob.onpe.adan.dao.admin.ProcesoDao;
import pe.gob.onpe.adan.service.Admin.ProcesoService;

/**
 *
 * @author bvaldez
 */
@Service("procesoService")
@Transactional
public class ProcesoServiceImpl implements ProcesoService{

    @Autowired
    private ProcesoDao dao;
    
    @Override
    public Proceso findById(int id) {
        return dao.findById(id);
    }

    @Override
    public Proceso findByAlias(String alias) {
        Proceso proceso = dao.findByAlias(alias);
        return proceso;
    }

    @Override
    public void saveProceso(Proceso proceso) {
        dao.saveProceso(proceso);
    }

    @Override
    public void updateProceso(Proceso proceso) {
        Proceso entity = dao.findById(proceso.getN_PROCESO_PK());
        if(entity!=null){
            entity.setN_PROCESO_PK(proceso.getN_PROCESO_PK());
            entity.setC_NOMBRE(proceso.getC_NOMBRE());
            entity.setC_ALIAS(proceso.getC_ALIAS());
            entity.setN_ESTADO(proceso.getN_ESTADO());
            entity.setC_CONEXION(proceso.getC_CONEXION());
            entity.setN_TOTAL_EH(proceso.getN_TOTAL_EH());
            entity.setN_TOTAL_LV(proceso.getN_TOTAL_LV());
            entity.setN_PORC_EH_MUJER(proceso.getN_PORC_EH_MUJER());
            entity.setN_PORC_EH_HOMBRE(proceso.getN_PORC_EH_HOMBRE());
            entity.setN_PORC_LV_COMPLETO(proceso.getN_PORC_LV_COMPLETO());
            entity.setN_CANT_EH_TEMPORAL(proceso.getN_CANT_EH_TEMPORAL());
            entity.setN_CANT_LV_DESHABILITADO(proceso.getN_CANT_LV_DESHABILITADO());
            entity.setN_USUARIO_CONECTADO(proceso.getN_USUARIO_CONECTADO());
        }        
    }

    @Override
    public List<Proceso> findAllProcesos() {
        return dao.findAllProcesos();
    }

    @Override
    public boolean isProcesoAliasUnique(String name, String key) {
        Proceso a = findByName(name);
        Proceso b = findByKey(key);        
        return (((a == null) && (b == null)));
    }

    @Override
    public Proceso findByName(String name) {
        return dao.findByName(name);
    }

    @Override
    public Proceso findByKey(String key) {
        return dao.findByKey(key);
    }

    @Override
    public List<Proceso> findAllByUsuario(int usuario) {
        return dao.findAllByUsuario(usuario);
    }

}
