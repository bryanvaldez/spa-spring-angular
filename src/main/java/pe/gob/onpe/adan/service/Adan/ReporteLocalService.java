/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import pe.gob.onpe.adan.model.adan.ReporteLocal;

/**
 *
 * @author bvaldez
 */
public interface ReporteLocalService {
    ReporteLocal getNacion(String tipo);
    Object getNacion1(String tipo);
    ReporteLocal getPeru(String tipo);
    Object getPeru1(String tipo);
    ReporteLocal getExtranjero(String tipo);
    Object getExtranjero1(String tipo);
    ReporteLocal getOdpe(String tipo, String codigo);
    Object getOdpe1(String tipo, String codigo);
    ReporteLocal getOdpebyProvincia(String tipo, String codigo, String codigo2);
    Object getOdpebyProvincia1(String tipo, String codigo, String codigo2);
    ReporteLocal getOdpebyDepartamento(String tipo, String codigo, String codigo2);
    Object getOdpebyDepartamento1(String tipo, String codigo, String codigo2);
    ReporteLocal getDepartamentoOrContinente(String tipo, String codigo);
    Object getDepartamentoOrContinente1(String tipo, String codigo);
    ReporteLocal getProvinciaOrPais(String tipo, String codigo);
    Object getProvinciaOrPais1(String tipo, String codigo);
    ReporteLocal getDistritoOrCiudad(String tipo, String codigo);
    Object getDistritoOrCiudad1(String tipo, String codigo);
}
