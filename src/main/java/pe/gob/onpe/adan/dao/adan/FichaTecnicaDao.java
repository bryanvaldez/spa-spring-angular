/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;
import java.util.Map;
import pe.gob.onpe.adan.model.adan.FichaTecnica;

/**
 *
 * @author AQuispec
 */
public interface FichaTecnicaDao {

    public List findAllByEstado(int estado);

    FichaTecnica findById(int id);

    void updateFichaTecnica2(FichaTecnica ft);

    List findFichaTecnicaConfig();

    Map getSPFichaTecnicaFinal();

    FichaTecnica saveFichaTecnica(FichaTecnica ft);
    
    void updateFichaTecnica(FichaTecnica ft);
    
    Object getDateServer();
    
    Object getDifFechaEleccion();
}
