/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.ConexionDao;
import pe.gob.onpe.adan.model.adan.Conexion;
import pe.gob.onpe.adan.service.Adan.ConexionService;

/**
 *
 * @author bvaldez
 */
@Service("conexionService")
public class ConexionServiceImpl implements ConexionService{

    @Autowired
    private ConexionDao dao;    
    
    @Override
    public Conexion findById(int id) {
        return dao.findById(id);
    }

    @Override
    public void saveConexion(Conexion conexion) {
        dao.saveConexion(conexion);
    }

    @Override
    public List<Conexion> findAllConexion() {
        return dao.findAllConexion();
    }

    @Override
    public void updateProceso(Conexion conexion) {
        dao.updateConexion(conexion);
//        Conexion entity = dao.findById(conexion.getN_CONEXION_PK());
//        if(entity != null){
//            entity.setN_CONEXION_PK(conexion.getN_CONEXION_PK());
//            entity.setC_NOMBRE(conexion.getC_NOMBRE());
//            entity.setC_SIGLAS(conexion.getC_SIGLAS());
//            entity.setN_TIPO_CONEXION(conexion.getN_TIPO_CONEXION());
//            entity.setN_ESTADO(conexion.getN_ESTADO());
//            entity.setN_ORDEN(conexion.getN_ORDEN());
//            entity.setN_CARGA(conexion.getN_CARGA());
//            entity.setC_AUD_USUARIO_CREACION(conexion.getC_AUD_USUARIO_CREACION());
//            entity.setD_AUD_FECHA_CREACION(conexion.getD_AUD_FECHA_CREACION());
//            entity.setC_AUD_USUARIO_MODIFICACION(conexion.getC_AUD_USUARIO_MODIFICACION());
//            entity.setD_AUD_FECHA_MODIFICACION(conexion.getD_AUD_FECHA_MODIFICACION());
//            entity.setC_AUD_USUARIO_CONEXION(conexion.getC_AUD_USUARIO_CONEXION());
//            entity.setD_AUD_FECHA_CONEXION(conexion.getD_AUD_FECHA_CONEXION());
//            entity.setC_AUD_USUARIO_ACTUALIZACION(conexion.getC_AUD_USUARIO_ACTUALIZACION());
//            entity.setD_AUD_FECHA_ACTUALIZACION(conexion.getD_AUD_FECHA_ACTUALIZACION());         
//        }        
    }
    
}
