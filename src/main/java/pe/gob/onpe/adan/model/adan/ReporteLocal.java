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
@Table(name="VW_SECCION_LOCAL")
public class ReporteLocal implements Serializable {
    
    @Id
    @Column(name = "N_TIPO_CONSULTA")
    @JsonProperty("N_TIPO_CONSULTA")
    private Integer N_TIPO_CONSULTA;
    
    @Column(name = "C_TIPO_CONSULTA")
    @JsonProperty("C_TIPO_CONSULTA")
    private String C_TIPO_CONSULTA;
    
    @Column(name = "C_CODIGO_ODPE")
    @JsonProperty("C_CODIGO_ODPE")
    private String C_CODIGO_ODPE;

    @Column(name = "C_NOMBRE_ODPE")
    @JsonProperty("C_NOMBRE_ODPE")
    private String C_NOMBRE_ODPE;
    
    @Column(name = "C_UBIGEO")
    @JsonProperty("C_UBIGEO")
    private String C_UBIGEO;
    
    @Column(name = "C_DEPARTAMENTO")
    @JsonProperty("C_DEPARTAMENTO")
    private String C_DEPARTAMENTO;

    @Column(name = "C_PROVINCIA")
    @JsonProperty("C_PROVINCIA")
    private String C_PROVINCIA;   

    @Column(name = "C_DISTRITO")
    @JsonProperty("C_DISTRITO")
    private String C_DISTRITO;
    
//    @Column(name = "N_TOTAL_NUEVO_DISTRITO")
//    @JsonProperty("N_TOTAL_NUEVO_DISTRITO")
//    private Integer N_TOTAL_NUEVO_DISTRITO;
    
    @Column(name = "N_TOTAL_CCPP")
    @JsonProperty("N_TOTAL_CCPP")
    private Integer N_TOTAL_CCPP;
    
    @Column(name = "N_TOTAL_LV")
    @JsonProperty("N_TOTAL_LV")
    private Integer N_TOTAL_LV;     
    
//    @Column(name = "N_CANT_LV_COMPLETO")
//    @JsonProperty("N_CANT_LV_COMPLETO")
//    private Integer N_CANT_LV_COMPLETO;
//    
//    @Column(name = "N_PORC_LV_COMPLETO")
//    @JsonProperty("N_PORC_LV_COMPLETO")
//    private Double N_PORC_LV_COMPLETO;
//    
//    @Column(name = "N_CANT_LV_TEMPORAL")
//    @JsonProperty("N_CANT_LV_TEMPORAL")
//    private Integer N_CANT_LV_TEMPORAL;     
//    
//    @Column(name = "N_PORC_LV_TEMPORAL")
//    @JsonProperty("N_PORC_LV_TEMPORAL")
//    private Double N_PORC_LV_TEMPORAL;     
    
//    @Column(name = "N_CANT_LV_EXTRA")
//    @JsonProperty("N_CANT_LV_EXTRA")
//    private Integer N_CANT_LV_EXTRA;     
//    
//    @Column(name = "N_PORC_LV_EXTRA")
//    @JsonProperty("N_PORC_LV_EXTRA")
//    private Double N_PORC_LV_EXTRA;     
//    
//    @Column(name = "N_CANT_LV_INCOMPLETO")
//    @JsonProperty("N_CANT_LV_INCOMPLETO")
//    private Integer N_CANT_LV_INCOMPLETO;     
//    
//    @Column(name = "N_PORC_LV_INCOMPLETO")
//    @JsonProperty("N_PORC_LV_INCOMPLETO")
//    private Double N_PORC_LV_INCOMPLETO; 
//    
//    @Column(name = "N_CANT_LV_DESHABILITADO")
//    @JsonProperty("N_CANT_LV_DESHABILITADO")
//    private Integer N_CANT_LV_DESHABILITADO;     
//    
//    @Column(name = "N_PORC_LV_DESHABILITADO")
//    @JsonProperty("N_PORC_LV_DESHABILITADO")
//    private Double N_PORC_LV_DESHABILITADO;
    
//    @Column(name = "N_CANT_LV_SEA")
//    @JsonProperty("N_PORC_LV_SEA")
//    private Integer N_PORC_LV_SEA;     
//    
//    @Column(name = "N_CANT_LV_VEP")
//    @JsonProperty("N_PORC_LV_VE")
//    private Integer N_PORC_LV_VE;
//    
//    @Column(name = "N_CANT_LV_CONV")
//    @JsonProperty("N_PORC_LV_CONVENCIONAL")
//    private Integer N_PORC_LV_CONVENCIONAL;

    public Integer getN_TIPO_CONSULTA() {
        return N_TIPO_CONSULTA;
    }

    public void setN_TIPO_CONSULTA(Integer N_TIPO_CONSULTA) {
        this.N_TIPO_CONSULTA = N_TIPO_CONSULTA;
    }

    public String getC_TIPO_CONSULTA() {
        return C_TIPO_CONSULTA;
    }

    public void setC_TIPO_CONSULTA(String C_TIPO_CONSULTA) {
        this.C_TIPO_CONSULTA = C_TIPO_CONSULTA;
    }

    public String getC_CODIGO_ODPE() {
        return C_CODIGO_ODPE;
    }

    public void setC_CODIGO_ODPE(String C_CODIGO_ODPE) {
        this.C_CODIGO_ODPE = C_CODIGO_ODPE;
    }

    public String getC_NOMBRE_ODPE() {
        return C_NOMBRE_ODPE;
    }

    public void setC_NOMBRE_ODPE(String C_NOMBRE_ODPE) {
        this.C_NOMBRE_ODPE = C_NOMBRE_ODPE;
    }

    public String getC_UBIGEO() {
        return C_UBIGEO;
    }

    public void setC_UBIGEO(String C_UBIGEO) {
        this.C_UBIGEO = C_UBIGEO;
    }

    public String getC_DEPARTAMENTO() {
        return C_DEPARTAMENTO;
    }

    public void setC_DEPARTAMENTO(String C_DEPARTAMENTO) {
        this.C_DEPARTAMENTO = C_DEPARTAMENTO;
    }

    public String getC_PROVINCIA() {
        return C_PROVINCIA;
    }

    public void setC_PROVINCIA(String C_PROVINCIA) {
        this.C_PROVINCIA = C_PROVINCIA;
    }

    public String getC_DISTRITO() {
        return C_DISTRITO;
    }

    public void setC_DISTRITO(String C_DISTRITO) {
        this.C_DISTRITO = C_DISTRITO;
    }

//    public Integer getN_TOTAL_NUEVO_DISTRITO() {
//        return N_TOTAL_NUEVO_DISTRITO;
//    }
//
//    public void setN_TOTAL_NUEVO_DISTRITO(Integer N_TOTAL_NUEVO_DISTRITO) {
//        this.N_TOTAL_NUEVO_DISTRITO = N_TOTAL_NUEVO_DISTRITO;
//    }

    public Integer getN_TOTAL_CCPP() {
        return N_TOTAL_CCPP;
    }

    public void setN_TOTAL_CCPP(Integer N_TOTAL_CCPP) {
        this.N_TOTAL_CCPP = N_TOTAL_CCPP;
    }

    public Integer getN_TOTAL_LV() {
        return N_TOTAL_LV;
    }

    public void setN_TOTAL_LV(Integer N_TOTAL_LV) {
        this.N_TOTAL_LV = N_TOTAL_LV;
    }

//    public Integer getN_CANT_LV_COMPLETO() {
//        return N_CANT_LV_COMPLETO;
//    }
//
//    public void setN_CANT_LV_COMPLETO(Integer N_CANT_LV_COMPLETO) {
//        this.N_CANT_LV_COMPLETO = N_CANT_LV_COMPLETO;
//    }
//
//    public Double getN_PORC_LV_COMPLETO() {
//        return N_PORC_LV_COMPLETO;
//    }
//
//    public void setN_PORC_LV_COMPLETO(Double N_PORC_LV_COMPLETO) {
//        this.N_PORC_LV_COMPLETO = N_PORC_LV_COMPLETO;
//    }
//
//    public Integer getN_CANT_LV_TEMPORAL() {
//        return N_CANT_LV_TEMPORAL;
//    }
//
//    public void setN_CANT_LV_TEMPORAL(Integer N_CANT_LV_TEMPORAL) {
//        this.N_CANT_LV_TEMPORAL = N_CANT_LV_TEMPORAL;
//    }
//
//    public Double getN_PORC_LV_TEMPORAL() {
//        return N_PORC_LV_TEMPORAL;
//    }
//
//    public void setN_PORC_LV_TEMPORAL(Double N_PORC_LV_TEMPORAL) {
//        this.N_PORC_LV_TEMPORAL = N_PORC_LV_TEMPORAL;
//    }
//
//    public Integer getN_CANT_LV_EXTRA() {
//        return N_CANT_LV_EXTRA;
//    }
//
//    public void setN_CANT_LV_EXTRA(Integer N_CANT_LV_EXTRA) {
//        this.N_CANT_LV_EXTRA = N_CANT_LV_EXTRA;
//    }
//
//    public Double getN_PORC_LV_EXTRA() {
//        return N_PORC_LV_EXTRA;
//    }
//
//    public void setN_PORC_LV_EXTRA(Double N_PORC_LV_EXTRA) {
//        this.N_PORC_LV_EXTRA = N_PORC_LV_EXTRA;
//    }
//
//    public Integer getN_CANT_LV_INCOMPLETO() {
//        return N_CANT_LV_INCOMPLETO;
//    }
//
//    public void setN_CANT_LV_INCOMPLETO(Integer N_CANT_LV_INCOMPLETO) {
//        this.N_CANT_LV_INCOMPLETO = N_CANT_LV_INCOMPLETO;
//    }
//
//    public Double getN_PORC_LV_INCOMPLETO() {
//        return N_PORC_LV_INCOMPLETO;
//    }
//
//    public void setN_PORC_LV_INCOMPLETO(Double N_PORC_LV_INCOMPLETO) {
//        this.N_PORC_LV_INCOMPLETO = N_PORC_LV_INCOMPLETO;
//    }
//
//    public Integer getN_CANT_LV_DESHABILITADO() {
//        return N_CANT_LV_DESHABILITADO;
//    }
//
//    public void setN_CANT_LV_DESHABILITADO(Integer N_CANT_LV_DESHABILITADO) {
//        this.N_CANT_LV_DESHABILITADO = N_CANT_LV_DESHABILITADO;
//    }
//
//    public Double getN_PORC_LV_DESHABILITADO() {
//        return N_PORC_LV_DESHABILITADO;
//    }
//
//    public void setN_PORC_LV_DESHABILITADO(Double N_PORC_LV_DESHABILITADO) {
//        this.N_PORC_LV_DESHABILITADO = N_PORC_LV_DESHABILITADO;
//    }

//    public Integer getN_PORC_LV_SEA() {
//        return N_PORC_LV_SEA;
//    }
//
//    public void setN_PORC_LV_SEA(Integer N_PORC_LV_SEA) {
//        this.N_PORC_LV_SEA = N_PORC_LV_SEA;
//    }
//
//    public Integer getN_PORC_LV_VE() {
//        return N_PORC_LV_VE;
//    }
//
//    public void setN_PORC_LV_VE(Integer N_PORC_LV_VE) {
//        this.N_PORC_LV_VE = N_PORC_LV_VE;
//    }
//
//    public Integer getN_PORC_LV_CONVENCIONAL() {
//        return N_PORC_LV_CONVENCIONAL;
//    }
//
//    public void setN_PORC_LV_CONVENCIONAL(Integer N_PORC_LV_CONVENCIONAL) {
//        this.N_PORC_LV_CONVENCIONAL = N_PORC_LV_CONVENCIONAL;
//    }
    
}
