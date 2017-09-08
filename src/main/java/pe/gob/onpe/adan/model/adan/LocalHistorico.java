/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Date;

/**
 *
 * @author bvaldez
 */
public class LocalHistorico {
    @JsonProperty("C_NOMBRE")    
    private String C_NOMBRE;
    @JsonProperty("C_UBIGEO")    
    private String C_UBIGEO;
    @JsonProperty("C_MESA")    
    private String C_MESA;
    @JsonProperty("C_LOCAL")    
    private String C_LOCAL;
    @JsonProperty("C_ACTUAL")    
    private String C_ACTUAL;   
    @JsonProperty("C_DESCRIPCION")    
    private String C_DESCRIPCION;
    @JsonProperty("C_ESTADO")    
    private String C_ESTADO;    

    public String getC_NOMBRE() {
        return C_NOMBRE;
    }

    public void setC_NOMBRE(String C_NOMBRE) {
        this.C_NOMBRE = C_NOMBRE;
    }

    public String getC_UBIGEO() {
        return C_UBIGEO;
    }

    public void setC_UBIGEO(String C_UBIGEO) {
        this.C_UBIGEO = C_UBIGEO;
    }

    public String getC_MESA() {
        return C_MESA;
    }

    public void setC_MESA(String C_MESA) {
        this.C_MESA = C_MESA;
    }

    public String getC_LOCAL() {
        return C_LOCAL;
    }

    public void setC_LOCAL(String C_LOCAL) {
        this.C_LOCAL = C_LOCAL;
    }

    public String getC_ACTUAL() {
        return C_ACTUAL;
    }

    public void setC_ACTUAL(String C_ACTUAL) {
        this.C_ACTUAL = C_ACTUAL;
    }

    public String getC_DESCRIPCION() {
        return C_DESCRIPCION;
    }

    public void setC_DESCRIPCION(String C_DESCRIPCION) {
        this.C_DESCRIPCION = C_DESCRIPCION;
    }
    public String getC_ESTADO() {
        return C_ESTADO;
    }

    public void setC_ESTADO(String C_ESTADO) {
        this.C_ESTADO = C_ESTADO;
    }
    

    
}
