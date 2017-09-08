/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;
import java.util.List;
import pe.gob.onpe.adan.helper.Filtro;
import pe.gob.onpe.adan.model.adan.Reporte;

/**
 *
 * @author marrisueno
 */
public interface ReporteDao { 
    Reporte findById(int id);
    List<Reporte> findAllReporte();    
    Reporte findByCodigo(String codigo);
    List execute(String sql, Filtro filter, String url);  
    List execute(String sql, String url);
}
