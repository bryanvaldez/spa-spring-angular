/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author bvaldez
 */
public interface TreeTableDao {

    String executeElectoresAsignar(int opcion);

    String executeResumenQuery();

    ArrayList getResumen(String sqlQuery);

    ArrayList getListaDistritosFaltantes();

    ArrayList getListaDistritosAsignados();

    ArrayList getLocalesAutocomplete(String value, String tipo);

    ArrayList getChildrenFiltro(String id, String idPadre);

    ArrayList getChildrenTotal(String idPadre);

    ArrayList getChildrenCCPP(String idPadre);

    ArrayList getChildrenNoCCPP(String idPadre);

    ArrayList getParentTotal(String id);

    ArrayList getParentCCPP(String id);

    ArrayList getParentNoCCPP(String id);

    ArrayList getTipoSolucion(int estado);

    ArrayList getValidacion(int solucion);

    ArrayList getFiltroMasivo(String id);

    void updateSolucionTotal(String id, int solucion);

    void updateSolucionCCPP(String id, int solucion);

    void updateSolucionNoCCPP(String id, int solucion);

    void updateSolucionMasiva(String idPadre, int solucion, String nivel, String nacion, String filtroTipo, String filtroAsignados, String filtroSolucion);

    void executeVista(int tipo, int solucion);

}
