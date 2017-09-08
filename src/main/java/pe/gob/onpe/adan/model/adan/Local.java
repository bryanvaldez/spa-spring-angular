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
@Table(name = "TAB_LOCAL")
public class Local implements Serializable{
    
    @Id  
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_LOCAL")
    @SequenceGenerator(name = "SEQ_LOCAL", sequenceName = "SEQ_TAB_LOCAL_PK")        
    @Column(name="N_LOCAL_PK")    
    private Integer N_LOCAL_PK;        
    
    @Column(name="C_CODIGO")
    @JsonProperty("C_CODIGO")
    private String C_CODIGO;
    
    @Column(name="C_UBIGEO")
    @JsonProperty("C_UBIGEO")
    private String C_UBIGEO;
    
    @Column(name="C_NOMBRE")
    @JsonProperty("C_NOMBRE")
    private String C_NOMBRE;
    
    @Column(name="C_DIRECCION")
    @JsonProperty("C_DIRECCION")
    private String C_DIRECCION;
    
    @Column(name="N_MESAS")
    @JsonProperty("N_MESAS")
    private Integer N_MESAS;
    
    @Column(name="N_ELECTORES")
    @JsonProperty("N_ELECTORES")
    private Integer N_ELECTORES;
    
    @Column(name="C_CCPP")
    @JsonProperty("C_CCPP")
    private String C_CCPP;
    
    @Column(name="N_LATITUD",nullable = true)
    @JsonProperty("N_LATITUD")
    private String N_LATITUD;
    
    @Column(name="N_LONGITUD",nullable = true)
    @JsonProperty("N_LONGITUD")
    private String N_LONGITUD;
    
    @Column(name="N_ESTADO")
    @JsonProperty("N_ESTADO")
    private int N_ESTADO;
    
    @Column (name="C_REFERENCIA")
    @JsonProperty("C_REFERENCIA")
    private String C_REFERENCIA;
    
    @Column (name="C_AUD_USUARIO_CREACION",nullable = true)
    @JsonProperty("C_AUD_USUARIO_CREACION")
    private String C_AUD_USUARIO_CREACION;
    
    @Column (name="D_AUD_FECHA_CREACION",nullable = true)
    @JsonProperty("D_AUD_FECHA_CREACION")
    private Date D_AUD_FECHA_CREACION;
    
    @Column (name="C_AUD_USUARIO_MODIFICACION",nullable = true)
    @JsonProperty("C_AUD_USUARIO_MODIFICACION")
    private String C_AUD_USUARIO_MODIFICACION;
    
    @Column(name="D_AUD_FECHA_MODIFICACION",nullable = true)
    @JsonProperty("D_AUD_FECHA_MODIFICACION")
    private Date D_AUD_FECHA_MODIFICACION;
    
    @Column(name="C_OBSERVACION",nullable = true)
    @JsonProperty("C_OBSERVACION")
    private String C_OBSERVACION;
    
    @Column(name="N_TIPO_SOLUCION")
    @JsonProperty("N_TIPO_SOLUCION")
    private Integer N_TIPO_SOLUCION;
    
    @Column(name="C_TIPO_SOLUCIONES",nullable = true)
    @JsonProperty("C_TIPO_SOLUCIONES")
    private String C_TIPO_SOLUCIONES;  
    
    @Column(name="N_MESAS_ESTIMADAS",nullable = true)
    @JsonProperty("N_MESAS_ESTIMADAS")
    private Integer N_MESAS_ESTIMADAS; 
    
    @Column(name="N_MESAS_ACTUALIZADAS",nullable = true)
    @JsonProperty("N_MESAS_ACTUALIZADAS")
    private Integer N_MESAS_ACTUALIZADAS;

    @Column(name="N_ELECTORES_MESA",nullable = true)
    @JsonProperty("N_ELECTORES_MESA")
    private String N_ELECTORES_MESA;      

    public Integer getN_LOCAL_PK() {
        return N_LOCAL_PK;
    }

    public void setN_LOCAL_PK(Integer N_LOCAL_PK) {
        this.N_LOCAL_PK = N_LOCAL_PK;
    }

    public String getC_CODIGO() {
        return C_CODIGO;
    }

    public void setC_CODIGO(String C_CODIGO) {
        this.C_CODIGO = C_CODIGO;
    }

    public String getC_UBIGEO() {
        return C_UBIGEO;
    }

    public void setC_UBIGEO(String C_UBIGEO) {
        this.C_UBIGEO = C_UBIGEO;
    }

    public String getC_NOMBRE() {
        return C_NOMBRE;
    }

    public void setC_NOMBRE(String C_NOMBRE) {
        this.C_NOMBRE = C_NOMBRE;
    }

    public String getC_DIRECCION() {
        return C_DIRECCION;
    }

    public void setC_DIRECCION(String C_DIRECCION) {
        this.C_DIRECCION = C_DIRECCION;
    }

    public Integer getN_MESAS() {
        return N_MESAS;
    }

    public void setN_MESAS(Integer N_MESAS) {
        this.N_MESAS = N_MESAS;
    }

    public Integer getN_ELECTORES() {
        return N_ELECTORES;
    }

    public void setN_ELECTORES(Integer N_ELECTORES) {
        this.N_ELECTORES = N_ELECTORES;
    }

    public String getC_CCPP() {
        return C_CCPP;
    }

    public void setC_CCPP(String C_CCPP) {
        this.C_CCPP = C_CCPP;
    }

    public String getN_LATITUD() {
        return N_LATITUD;
    }

    public void setN_LATITUD(String N_LATITUD) {
        this.N_LATITUD = N_LATITUD;
    }

    public String getN_LONGITUD() {
        return N_LONGITUD;
    }

    public void setN_LONGITUD(String N_LONGITUD) {
        this.N_LONGITUD = N_LONGITUD;
    }

    public int getN_ESTADO() {
        return N_ESTADO;
    }

    public void setN_ESTADO(int N_ESTADO) {
        this.N_ESTADO = N_ESTADO;
    }

    public String getC_REFERENCIA() {
        return C_REFERENCIA;
    }

    public void setC_REFERENCIA(String C_REFERENCIA) {
        this.C_REFERENCIA = C_REFERENCIA;
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

    public String getC_OBSERVACION() {
        return C_OBSERVACION;
    }

    public void setC_OBSERVACION(String C_OBSERVACION) {
        this.C_OBSERVACION = C_OBSERVACION;
    }

    public Integer getN_TIPO_SOLUCION() {
        return N_TIPO_SOLUCION;
    }

    public void setN_TIPO_SOLUCION(Integer N_TIPO_SOLUCION) {
        this.N_TIPO_SOLUCION = N_TIPO_SOLUCION;
    }

    public String getC_TIPO_SOLUCIONES() {
        return C_TIPO_SOLUCIONES;
    }

    public void setC_TIPO_SOLUCIONES(String C_TIPO_SOLUCIONES) {
        this.C_TIPO_SOLUCIONES = C_TIPO_SOLUCIONES;
    }

    public Integer getN_MESAS_ESTIMADAS() {
        return N_MESAS_ESTIMADAS;
    }

    public void setN_MESAS_ESTIMADAS(Integer N_MESAS_ESTIMADAS) {
        this.N_MESAS_ESTIMADAS = N_MESAS_ESTIMADAS;
    }

    public Integer getN_MESAS_ACTUALIZADAS() {
        return N_MESAS_ACTUALIZADAS;
    }

    public void setN_MESAS_ACTUALIZADAS(Integer N_MESAS_ACTUALIZADAS) {
        this.N_MESAS_ACTUALIZADAS = N_MESAS_ACTUALIZADAS;
    }

    public String getN_ELECTORES_MESA() {
        return N_ELECTORES_MESA;
    }

    public void setN_ELECTORES_MESA(String N_ELECTORES_MESA) {
        this.N_ELECTORES_MESA = N_ELECTORES_MESA;
    }   
    
}
