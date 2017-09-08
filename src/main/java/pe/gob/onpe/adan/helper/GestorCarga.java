/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.helper;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import pe.gob.onpe.adan.model.adan.CabeceraCarga;

/**
 *
 * @author MArrisueno
 */
public class GestorCarga {

    public static JsonObject getObservacionGeneral() {
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("cantidadRegistros", 0);        
        jsonObject.addProperty("cantidadRegistrosError", 0);
        jsonObject.addProperty("cantidadRegistrosCorrectos", 0);
        jsonObject.addProperty("cantidadRegistrosCargados", 0);
        return jsonObject;
    }

    public static CabeceraCarga getCabeceraCarga(CabeceraCarga cabeceraCarga, int tipoCarga, int idEntidad, String usuario) {
        if (cabeceraCarga == null) {
            Gson g = new Gson();
            cabeceraCarga = new CabeceraCarga();
            cabeceraCarga.setObservacionGeneral(g.toJson(GestorCarga.getObservacionGeneral()));
        } else {
            cabeceraCarga.setArchivoExcel(null);
            cabeceraCarga.setJsonExcel("");
            cabeceraCarga.setObservacionDetalle("");
        }
        cabeceraCarga.setTipoCarga(tipoCarga);
        cabeceraCarga.setIdEntidad(idEntidad);
        cabeceraCarga.setUsuario(usuario);
        return cabeceraCarga;
    }
      
}
