/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Documento;

/**
 *
 * @author AQuispec
 */
public interface DocumentoDao {
    List findAll();
    
    void updateDocumento2(Documento doc);
    
    Documento findById(int id);
    
    void saveDocumento(Documento documento);
    
    void updateDocumento(Documento doc);
}
