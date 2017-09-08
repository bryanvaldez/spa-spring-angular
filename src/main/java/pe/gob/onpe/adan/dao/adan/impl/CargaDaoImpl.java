/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.CargaDao;
import pe.gob.onpe.adan.model.adan.Uploader;

/**
 *
 * @author marrisueno
 */
@Repository("cargaDao")
public class CargaDaoImpl extends AbstractDao<Integer, Uploader> implements CargaDao{                
    
    @Override
    public List<Uploader> listColumns(int typeUpload) {                                  
        try {
            List<Uploader> lstUploader = getEntityManager()
                .createQuery("SELECT r FROM Uploader r WHERE r.uploadType=:uploadType")
                .setParameter("uploadType", typeUpload)                
                .getResultList();        
            return lstUploader; 
        } catch (Exception ex) {
            return null;
        } 
    }
        
}
