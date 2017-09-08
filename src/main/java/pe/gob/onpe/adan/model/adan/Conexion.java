/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name="TAB_CONEXION")
public class Conexion implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_CONEXION")
    @SequenceGenerator(name = "SEQ_CONEXION", sequenceName = "SEQ_CONEXION_PK")  
    @Column(name="N_CONEXION_PK")
    @JsonProperty("N_CONEXION_PK")    
    private Integer N_CONEXION_PK;  
    
    @Column(name="C_NOMBRE")
    @JsonProperty("C_NOMBRE")    
    private String C_NOMBRE;
    
    @Column(name="C_SIGLAS")
    @JsonProperty("C_SIGLAS")    
    private String C_SIGLAS; 
    
    @Column(name="N_TIPO_CONEXION")
    @JsonProperty("N_TIPO_CONEXION")    
    private Integer N_TIPO_CONEXION;    
    
    @Column(name="N_ESTADO")
    @JsonProperty("N_ESTADO")    
    private Integer N_ESTADO;  
    
    @Column(name="N_ORDEN")
    @JsonProperty("N_ORDEN")    
    private Integer N_ORDEN;  

    @Column(name="N_CARGA")
    @JsonProperty("N_CARGA")    
    private Integer N_CARGA;      
    
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

    @Column(name="C_AUD_USUARIO_CONEXION")
    @JsonProperty("C_AUD_USUARIO_CONEXION")    
    private String C_AUD_USUARIO_CONEXION;

    @Column(name="D_AUD_FECHA_CONEXION")
    @JsonProperty("D_AUD_FECHA_CONEXION")    
    private Date D_AUD_FECHA_CONEXION;   

    @Column(name="C_AUD_USUARIO_ACTUALIZACION")
    @JsonProperty("C_AUD_USUARIO_ACTUALIZACION")    
    private String C_AUD_USUARIO_ACTUALIZACION;

    @Column(name="D_AUD_FECHA_ACTUALIZACION")
    @JsonProperty("D_AUD_FECHA_ACTUALIZACION")    
    private Date D_AUD_FECHA_ACTUALIZACION;       


    public Integer getN_CONEXION_PK() {
        return N_CONEXION_PK;
    }

    public void setN_CONEXION_PK(Integer N_CONEXION_PK) {
        this.N_CONEXION_PK = N_CONEXION_PK;
    }
    
    public String getC_NOMBRE() {
        return C_NOMBRE;
    }

    public void setC_NOMBRE(String C_NOMBRE) {
        this.C_NOMBRE = C_NOMBRE;
    }

    public String getC_SIGLAS() {
        return C_SIGLAS;
    }

    public void setC_SIGLAS(String C_SIGLAS) {
        this.C_SIGLAS = C_SIGLAS;
    }

    public Integer getN_TIPO_CONEXION() {
        return N_TIPO_CONEXION;
    }

    public void setN_TIPO_CONEXION(Integer N_TIPO_CONEXION) {
        this.N_TIPO_CONEXION = N_TIPO_CONEXION;
    }

    public Integer getN_ESTADO() {
        return N_ESTADO;
    }

    public void setN_ESTADO(Integer N_ESTADO) {
        this.N_ESTADO = N_ESTADO;
    }

    public Integer getN_ORDEN() {
        return N_ORDEN;
    }

    public void setN_ORDEN(Integer N_ORDEN) {
        this.N_ORDEN = N_ORDEN;
    }

    public Integer getN_CARGA() {
        return N_CARGA;
    }

    public void setN_CARGA(Integer N_CARGA) {
        this.N_CARGA = N_CARGA;
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

    public String getC_AUD_USUARIO_CONEXION() {
        return C_AUD_USUARIO_CONEXION;
    }

    public void setC_AUD_USUARIO_CONEXION(String C_AUD_USUARIO_CONEXION) {
        this.C_AUD_USUARIO_CONEXION = C_AUD_USUARIO_CONEXION;
    }

    public Date getD_AUD_FECHA_CONEXION() {
        return D_AUD_FECHA_CONEXION;
    }

    public void setD_AUD_FECHA_CONEXION(Date D_AUD_FECHA_CONEXION) {
        this.D_AUD_FECHA_CONEXION = D_AUD_FECHA_CONEXION;
    }

    public String getC_AUD_USUARIO_ACTUALIZACION() {
        return C_AUD_USUARIO_ACTUALIZACION;
    }

    public void setC_AUD_USUARIO_ACTUALIZACION(String C_AUD_USUARIO_ACTUALIZACION) {
        this.C_AUD_USUARIO_ACTUALIZACION = C_AUD_USUARIO_ACTUALIZACION;
    }

    public Date getD_AUD_FECHA_ACTUALIZACION() {
        return D_AUD_FECHA_ACTUALIZACION;
    }

    public void setD_AUD_FECHA_ACTUALIZACION(Date D_AUD_FECHA_ACTUALIZACION) {
        this.D_AUD_FECHA_ACTUALIZACION = D_AUD_FECHA_ACTUALIZACION;
    }

       
}
