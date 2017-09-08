/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author marrisueno
 */
@Entity
@Table(name = "TAB_ASIGNACION_MESA")
public class Mesa implements Serializable{
    
    @Id          
    @Column(name="C_DOCUMENTO_IDENTIDAD")    
    private String C_DOCUMENTO_IDENTIDAD;        
    
    @Column(name="C_UBIGEO")
    @JsonProperty("C_UBIGEO")
    private String C_UBIGEO;
    
    @Column(name="C_LOCAL")
    @JsonProperty("C_LOCAL")
    private String C_LOCAL;
    
    @Column(name="C_MESA")
    @JsonProperty("C_MESA")
    private String C_MESA;
    
    @Column(name="N_ORDEN")
    @JsonProperty("N_ORDEN")
    private Integer N_ORDEN;
    
    @Column(name="N_TIPO_SOLUCION")
    @JsonProperty("N_TIPO_SOLUCION")
    private Integer N_TIPO_SOLUCION;
    
    @Column (name="C_AUD_USUARIO_CREACION",nullable = true)
    @JsonProperty("C_AUD_USUARIO_CREACION")
    private String C_AUD_USUARIO_CREACION;
    
    @Column (name="D_AUD_FECHA_CREACION",nullable = true)
    @JsonProperty("D_AUD_FECHA_CREACION")
    private String D_AUD_FECHA_CREACION;
    
    @Column (name="C_AUD_USUARIO_MODIFICACION",nullable = true)
    @JsonProperty("C_AUD_USUARIO_MODIFICACION")
    private String C_AUD_USUARIO_MODIFICACION;
    
    @Column(name="D_AUD_FECHA_MODIFICACION",nullable = true)
    @JsonProperty("D_AUD_FECHA_MODIFICACION")
    private String D_AUD_FECHA_MODIFICACION;

    public String getC_DOCUMENTO_IDENTIDAD() {
        return C_DOCUMENTO_IDENTIDAD;
    }

    public void setC_DOCUMENTO_IDENTIDAD(String C_DOCUMENTO_IDENTIDAD) {
        this.C_DOCUMENTO_IDENTIDAD = C_DOCUMENTO_IDENTIDAD;
    }

    public String getC_UBIGEO() {
        return C_UBIGEO;
    }

    public void setC_UBIGEO(String C_UBIGEO) {
        this.C_UBIGEO = C_UBIGEO;
    }

    public String getC_LOCAL() {
        return C_LOCAL;
    }

    public void setC_LOCAL(String C_LOCAL) {
        this.C_LOCAL = C_LOCAL;
    }

    public String getC_MESA() {
        return C_MESA;
    }

    public void setC_MESA(String C_MESA) {
        this.C_MESA = C_MESA;
    }

    public Integer getN_ORDEN() {
        return N_ORDEN;
    }

    public void setN_ORDEN(Integer N_ORDEN) {
        this.N_ORDEN = N_ORDEN;
    }

    public Integer getN_TIPO_SOLUCION() {
        return N_TIPO_SOLUCION;
    }

    public void setN_TIPO_SOLUCION(Integer N_TIPO_SOLUCION) {
        this.N_TIPO_SOLUCION = N_TIPO_SOLUCION;
    }

    public String getC_AUD_USUARIO_CREACION() {
        return C_AUD_USUARIO_CREACION;
    }

    public void setC_AUD_USUARIO_CREACION(String C_AUD_USUARIO_CREACION) {
        this.C_AUD_USUARIO_CREACION = C_AUD_USUARIO_CREACION;
    }

    public String getD_AUD_FECHA_CREACION() {
        return D_AUD_FECHA_CREACION;
    }

    public void setD_AUD_FECHA_CREACION(String D_AUD_FECHA_CREACION) {
        this.D_AUD_FECHA_CREACION = D_AUD_FECHA_CREACION;
    }

    public String getC_AUD_USUARIO_MODIFICACION() {
        return C_AUD_USUARIO_MODIFICACION;
    }

    public void setC_AUD_USUARIO_MODIFICACION(String C_AUD_USUARIO_MODIFICACION) {
        this.C_AUD_USUARIO_MODIFICACION = C_AUD_USUARIO_MODIFICACION;
    }

    public String getD_AUD_FECHA_MODIFICACION() {
        return D_AUD_FECHA_MODIFICACION;
    }

    public void setD_AUD_FECHA_MODIFICACION(String D_AUD_FECHA_MODIFICACION) {
        this.D_AUD_FECHA_MODIFICACION = D_AUD_FECHA_MODIFICACION;
    }
    
}
