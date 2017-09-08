/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import java.util.List;
import java.util.Map;
import pe.gob.onpe.adan.model.adan.FichaTecnica;

/**
 *
 * @author bvaldez
 */
public interface FichaTecnicaService {    
    List findAllByEstado(int estado);
    FichaTecnica findById(int id);   
    FichaTecnica saveFichaTecnica(FichaTecnica fichaTecnica);
    void updateFichaTecnica(FichaTecnica fichaTecnica);    
    void updateFichaTecnica2(FichaTecnica ft);
    List findFichaTecnicaConfig();
    Map getSPFichaTecnicaFinal();
    Object getDateServer();
    Object getDifFechaEleccion();
}
