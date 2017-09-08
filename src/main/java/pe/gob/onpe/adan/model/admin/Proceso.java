/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.admin;

import com.fasterxml.jackson.annotation.JsonProperty;
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
@Table(name = "TAB_PROCESO")
public class Proceso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_PROCESO")
    @SequenceGenerator(name = "SEQ_PROCESO", sequenceName = "SEQ_PROCESO_PK")
    @Column(name = "N_PROCESO_PK")
    @JsonProperty("N_PROCESO_PK")
    private Integer N_PROCESO_PK;

    @Column(name = "C_NOMBRE")
    @JsonProperty("C_NOMBRE")
    private String C_NOMBRE;

    @Column(name = "C_ALIAS")
    @JsonProperty("C_ALIAS")
    private String C_ALIAS;

    @Column(name = "N_ESTADO")
    @JsonProperty("N_ESTADO")
    private Integer N_ESTADO;

    @Column(name = "C_AUD_USUARIO_CREACION")
    @JsonProperty("C_AUD_USUARIO_CREACION")
    private String C_AUD_USUARIO_CREACION;

    @Column(name = "D_AUD_FECHA_CREACION")
    @JsonProperty("D_AUD_FECHA_CREACION")
    private Date D_AUD_FECHA_CREACION;

    @Column(name = "C_CONEXION")
    @JsonProperty("C_CONEXION")
    private String C_CONEXION;

    @Column(name = "N_TOTAL_EH")
    @JsonProperty("N_TOTAL_EH")
    private Integer N_TOTAL_EH;

    @Column(name = "N_TOTAL_LV")
    @JsonProperty("N_TOTAL_LV")
    private Integer N_TOTAL_LV;

    @Column(name = "N_PORC_EH_MUJER")
    @JsonProperty("N_PORC_EH_MUJER")
    private Integer N_PORC_EH_MUJER;

    @Column(name = "N_PORC_EH_HOMBRE")
    @JsonProperty("N_PORC_EH_HOMBRE")
    private Integer N_PORC_EH_HOMBRE;

    @Column(name = "N_PORC_LV_COMPLETO")
    @JsonProperty("N_PORC_LV_COMPLETO")
    private Integer N_PORC_LV_COMPLETO;

    @Column(name = "N_CANT_EH_TEMPORAL")
    @JsonProperty("N_CANT_EH_TEMPORAL")
    private Integer N_CANT_EH_TEMPORAL;

    @Column(name = "N_CANT_LV_DESHABILITADO")
    @JsonProperty("N_CANT_LV_DESHABILITADO")
    private Integer N_CANT_LV_DESHABILITADO;

    @Column(name = "N_TOTAL_EH_CCPP")
    @JsonProperty("N_TOTAL_EH_CCPP")
    private Integer N_TOTAL_EH_CCPP;

    @Column(name = "N_TOTAL_LV_CCPP")
    @JsonProperty("N_TOTAL_LV_CCPP")
    private Integer N_TOTAL_LV_CCPP;

    @Column(name = "N_TOTAL_MESAS")
    @JsonProperty("N_TOTAL_MESAS")
    private Integer N_TOTAL_MESAS;

    @Column(name = "N_TOTAL_MESAS_CCPP")
    @JsonProperty("N_TOTAL_MESAS_CCPP")
    private Integer N_TOTAL_MESAS_CCPP;

    @Column(name = "N_ELECTORES_X_ASIGNAR")
    @JsonProperty("N_ELECTORES_X_ASIGNAR")
    private Long N_ELECTORES_X_ASIGNAR;

    @Column(name = "N_USUARIO_CONECTADO")
    @JsonProperty("N_USUARIO_CONECTADO")
    private Integer N_USUARIO_CONECTADO;

    public Integer getN_PROCESO_PK() {
        return N_PROCESO_PK;
    }

    public void setN_PROCESO_PK(Integer N_PROCESO_PK) {
        this.N_PROCESO_PK = N_PROCESO_PK;
    }

    public String getC_NOMBRE() {
        return C_NOMBRE;
    }

    public void setC_NOMBRE(String C_NOMBRE) {
        this.C_NOMBRE = C_NOMBRE;
    }

    public String getC_ALIAS() {
        return C_ALIAS;
    }

    public void setC_ALIAS(String C_ALIAS) {
        this.C_ALIAS = C_ALIAS;
    }

    public Integer getN_ESTADO() {
        return N_ESTADO;
    }

    public void setN_ESTADO(Integer N_ESTADO) {
        this.N_ESTADO = N_ESTADO;
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

    public String getC_CONEXION() {
        return C_CONEXION;
    }

    public void setC_CONEXION(String C_CONEXION) {
        this.C_CONEXION = C_CONEXION;
    }

    public Integer getN_TOTAL_EH() {
        return N_TOTAL_EH;
    }

    public void setN_TOTAL_EH(Integer N_TOTAL_EH) {
        this.N_TOTAL_EH = N_TOTAL_EH;
    }

    public Integer getN_TOTAL_LV() {
        return N_TOTAL_LV;
    }

    public void setN_TOTAL_LV(Integer N_TOTAL_LV) {
        this.N_TOTAL_LV = N_TOTAL_LV;
    }

    public Integer getN_PORC_EH_MUJER() {
        return N_PORC_EH_MUJER;
    }

    public void setN_PORC_EH_MUJER(Integer N_PORC_EH_MUJER) {
        this.N_PORC_EH_MUJER = N_PORC_EH_MUJER;
    }

    public Integer getN_PORC_EH_HOMBRE() {
        return N_PORC_EH_HOMBRE;
    }

    public void setN_PORC_EH_HOMBRE(Integer N_PORC_EH_HOMBRE) {
        this.N_PORC_EH_HOMBRE = N_PORC_EH_HOMBRE;
    }

    public Integer getN_PORC_LV_COMPLETO() {
        return N_PORC_LV_COMPLETO;
    }

    public void setN_PORC_LV_COMPLETO(Integer N_PORC_LV_COMPLETO) {
        this.N_PORC_LV_COMPLETO = N_PORC_LV_COMPLETO;
    }

    public Integer getN_CANT_EH_TEMPORAL() {
        return N_CANT_EH_TEMPORAL;
    }

    public void setN_CANT_EH_TEMPORAL(Integer N_CANT_EH_TEMPORAL) {
        this.N_CANT_EH_TEMPORAL = N_CANT_EH_TEMPORAL;
    }

    public Integer getN_CANT_LV_DESHABILITADO() {
        return N_CANT_LV_DESHABILITADO;
    }

    public void setN_CANT_LV_DESHABILITADO(Integer N_CANT_LV_DESHABILITADO) {
        this.N_CANT_LV_DESHABILITADO = N_CANT_LV_DESHABILITADO;
    }

    public Integer getN_TOTAL_EH_CCPP() {
        return N_TOTAL_EH_CCPP;
    }

    public void setN_TOTAL_EH_CCPP(Integer N_TOTAL_EH_CCPP) {
        this.N_TOTAL_EH_CCPP = N_TOTAL_EH_CCPP;
    }

    public Integer getN_TOTAL_LV_CCPP() {
        return N_TOTAL_LV_CCPP;
    }

    public void setN_TOTAL_LV_CCPP(Integer N_TOTAL_LV_CCPP) {
        this.N_TOTAL_LV_CCPP = N_TOTAL_LV_CCPP;
    }

    public Integer getN_TOTAL_MESAS() {
        return N_TOTAL_MESAS;
    }

    public void setN_TOTAL_MESAS(Integer N_TOTAL_MESAS) {
        this.N_TOTAL_MESAS = N_TOTAL_MESAS;
    }

    public Integer getN_TOTAL_MESAS_CCPP() {
        return N_TOTAL_MESAS_CCPP;
    }

    public void setN_TOTAL_MESAS_CCPP(Integer N_TOTAL_MESAS_CCPP) {
        this.N_TOTAL_MESAS_CCPP = N_TOTAL_MESAS_CCPP;
    }

    public Long getN_ELECTORES_X_ASIGNAR() {
        return N_ELECTORES_X_ASIGNAR;
    }

    public void setN_ELECTORES_X_ASIGNAR(Long N_ELECTORES_X_ASIGNAR) {
        this.N_ELECTORES_X_ASIGNAR = N_ELECTORES_X_ASIGNAR;
    }

    public Integer getN_USUARIO_CONECTADO() {
        return N_USUARIO_CONECTADO;
    }

    public void setN_USUARIO_CONECTADO(Integer N_USUARIO_CONECTADO) {
        this.N_USUARIO_CONECTADO = N_USUARIO_CONECTADO;
    }

}
