/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table( name = "TAB_ASIGNACION_LOCAL" )
public class AsignacionLocal {
    
    @Id
    @Column(name="C_DOCUMENTO_IDENTIDAD")
    @JsonProperty("C_DOCUMENTO_IDENTIDAD")       
    private String C_DOCUMENTO_IDENTIDAD;
            
    @Column(name="C_UBIGEO")
    @JsonProperty("C_UBIGEO")               
    private String C_UBIGEO;
            
    @Column(name="C_LOCAL")
    @JsonProperty("C_LOCAL")               
    private String C_LOCAL;
            
    @Column(name="N_ATENCION_PREFERENCIAL")
    @JsonProperty("N_ATENCION_PREFERENCIAL")               
    private Integer N_ATENCION_PREFERENCIAL;
            
    @Column(name="C_AUD_USUARIO_CREACION")
    @JsonProperty("C_AUD_USUARIO_CREACION")               
    private String C_AUD_USUARIO_CREACION;
            
    @Column(name="D_AUD_FECHA_CREACION")
    @JsonProperty("D_AUD_FECHA_CREACION")               
    private Date D_AUD_FECHA_CREACION;
            
    @Column(name="C_AUD_USUARIO_MODIFICACION")
    @JsonProperty("C_AUD_USUARIO_MODIFICACION")               
    private String C_AUD_USUARIO_MODIFICACION;
            
    @Column(name="D_AUD_FECHA_MODIFICACION")
    @JsonProperty("D_AUD_FECHA_MODIFICACION")               
    private Date D_AUD_FECHA_MODIFICACION;
            
    @Column(name="N_PROCEDENCIA")
    @JsonProperty("N_PROCEDENCIA")               
    private Integer N_PROCEDENCIA;

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

    public Integer getN_ATENCION_PREFERENCIAL() {
        return N_ATENCION_PREFERENCIAL;
    }

    public void setN_ATENCION_PREFERENCIAL(Integer N_ATENCION_PREFERENCIAL) {
        this.N_ATENCION_PREFERENCIAL = N_ATENCION_PREFERENCIAL;
    }

    public String getC_AUD_USUARIO_CREACION() {
        return C_AUD_USUARIO_CREACION;
    }

    public void setC_AUD_USUARIO_CREACION(String C_AUD_USUARIO_CREACION) {
        this.C_AUD_USUARIO_CREACION = C_AUD_USUARIO_CREACION;
    }

    public Date getD_AUD_FECHA_CREACION() {
        return D_AUD_FECHA_CREACION;
    }

    public void setD_AUD_FECHA_CREACION(Date D_AUD_FECHA_CREACION) {
        this.D_AUD_FECHA_CREACION = D_AUD_FECHA_CREACION;
    }

    public String getC_AUD_USUARIO_MODIFICACION() {
        return C_AUD_USUARIO_MODIFICACION;
    }

    public void setC_AUD_USUARIO_MODIFICACION(String C_AUD_USUARIO_MODIFICACION) {
        this.C_AUD_USUARIO_MODIFICACION = C_AUD_USUARIO_MODIFICACION;
    }

    public Date getD_AUD_FECHA_MODIFICACION() {
        return D_AUD_FECHA_MODIFICACION;
    }

    public void setD_AUD_FECHA_MODIFICACION(Date D_AUD_FECHA_MODIFICACION) {
        this.D_AUD_FECHA_MODIFICACION = D_AUD_FECHA_MODIFICACION;
    }

    public Integer getN_PROCEDENCIA() {
        return N_PROCEDENCIA;
    }

    public void setN_PROCEDENCIA(Integer N_PROCEDENCIA) {
        this.N_PROCEDENCIA = N_PROCEDENCIA;
    }
    
    
}
