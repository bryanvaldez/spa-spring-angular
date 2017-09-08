/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Documento;

/**
 *
 * @author bvaldez
 */
public interface DocumentoService {
    void saveDocumento(Documento documento);    
    void updateDocumento(Documento documento);
    List findAllDocumento();   
    void updateDocumento2(Documento doc);
    Documento findById(int id);
}
