/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;
import pe.gob.onpe.adan.model.adan.CabeceraCarga;

/**
 *
 * @author marrisueno
 */
public interface CabeceraCargaService {        
    CabeceraCarga getLastUpload(int typeUpload);
    void insertHeader(CabeceraCarga cabeceraCarga);    
}
