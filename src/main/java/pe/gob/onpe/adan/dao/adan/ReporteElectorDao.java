/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.ArrayList;
import pe.gob.onpe.adan.model.adan.ReporteElector;
import pe.gob.onpe.adan.model.adan.ReporteElectorPorLocal;

/**
 *
 * @author bvaldez
 */
public interface ReporteElectorDao {
    ReporteElector getNacion(String tipo);
    ReporteElector getPeru(String tipo);
    ReporteElector getExtranjero(String tipo);    
    ReporteElector getOdpe(String tipo, String codigo);
    ReporteElector getOdpebyProvincia(String tipo, String codigo, String codigo2);
    ReporteElector getOdpebyDepartamento(String tipo, String codigo, String codigo2);
    ReporteElector getDepartamentoOrContinente(String tipo, String codigo);
    ReporteElector getProvinciaOrPais(String tipo, String codigo);
    ReporteElector getDistritoOrCiudad(String tipo, String codigo); 
    ReporteElectorPorLocal getLocalOrMesa(String tipo, String codigo); 
    String getReporteElector(Integer option, String ubigeo);
    ArrayList getElectorByHistoricoAndMesa(String dni);
    ArrayList getElectorByHistoricoAndLocal(String dni);
    boolean isAssignedMesaElector(String dni);
    
}
