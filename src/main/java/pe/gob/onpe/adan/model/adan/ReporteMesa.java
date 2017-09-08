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
 * @author bvaldez
 */
@Entity
@Table(name="VW_SECCION_MESA")
public class ReporteMesa implements Serializable{
    
    @Id
    @Column(name="N_TIPO_CONSULTA")
    @JsonProperty("N_TIPO_CONSULTA")
    private Integer N_TIPO_CONSULTA;
    
    @Column(name="C_TIPO_CONSULTA")
    @JsonProperty("C_TIPO_CONSULTA")
    private String C_TIPO_CONSULTA;
    
    @Column(name="C_CODIGO_ODPE")
    @JsonProperty("C_CODIGO_ODPE")
    private String C_CODIGO_ODPE;
    
    @Column(name="C_NOMBRE_ODPE")
    @JsonProperty("C_NOMBRE_ODPE")
    private String C_NOMBRE_ODPE;
    
    @Column(name="C_UBIGEO")
    @JsonProperty("C_UBIGEO")
    private String C_UBIGEO;
    
    @Column(name="C_DEPARTAMENTO")
    @JsonProperty("C_DEPARTAMENTO")
    private String C_DEPARTAMENTO;
    
    @Column(name="C_PROVINCIA")
    @JsonProperty("C_PROVINCIA")
    private String C_PROVINCIA;
    
    @Column(name="C_DISTRITO")
    @JsonProperty("C_DISTRITO")
    private String C_DISTRITO;
    
//    @Column(name="N_TOTAL_REGLA")
//    @JsonProperty("N_TOTAL_REGLA")
//    private Integer N_TOTAL_REGLA;
//    
    
//    @Column(name = "N_TOTAL_CCPP")
//    @JsonProperty("N_TOTAL_CCPP")
//    private Integer N_TOTAL_CCPP;
    
    @Column(name="N_TOTAL_MS")
    @JsonProperty("N_TOTAL_MS")
    private Integer N_TOTAL_MS;
    
    @Column(name="N_TOTAL_MS_ESTIMADAS")
    @JsonProperty("N_TOTAL_MS_ESTIMADAS")
    private Integer N_TOTAL_MS_ESTIMADAS;
    
//    @Column(name="N_CANT_MS_COMPLETA")
//    @JsonProperty("N_CANT_MS_COMPLETA")
//    private Integer N_CANT_MS_COMPLETA;
//    
//    @Column(name="N_PORC_MS_COMPLETA")
//    @JsonProperty("N_PORC_MS_COMPLETA")
//    private Integer N_PORC_MS_COMPLETA;
//    
//    @Column(name="N_CANT_MS_TEMPORAL")
//    @JsonProperty("N_CANT_MS_TEMPORAL")
//    private Integer N_CANT_MS_TEMPORAL;
//    
//    @Column(name="N_PORC_MS_TEMPORAL")
//    @JsonProperty("N_PORC_MS_TEMPORAL")
//    private Integer N_PORC_MS_TEMPORAL;
    
//    @Column(name="N_CANT_MS_EXTRA")
//    @JsonProperty("N_CANT_MS_EXTRA")
//    private Integer N_CANT_MS_EXTRA;
//    
//    @Column(name="N_PORC_MS_EXTRA")
//    @JsonProperty("N_PORC_MS_EXTRA")
//    private Integer N_PORC_MS_EXTRA;
    
//    @Column(name="N_PORC_MS_SEA")
//    @JsonProperty("N_PORC_MS_SEA")
//    private Integer N_PORC_MS_SEA;
//    
//    @Column(name="N_PORC_MS_VE")
//    @JsonProperty("N_PORC_MS_VE")
//    private Integer N_PORC_MS_VE;
//    
//    @Column(name="N_PORC_MS_CONV")
//    @JsonProperty("N_PORC_MS_CONVENCIONAL")
//    private Integer N_PORC_MS_CONVENCIONAL;

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

//    public Integer getN_TOTAL_REGLA() {
//        return N_TOTAL_REGLA;
//    }
//
//    public void setN_TOTAL_REGLA(Integer N_TOTAL_REGLA) {
//        this.N_TOTAL_REGLA = N_TOTAL_REGLA;
//    }

//    public Integer getN_TOTAL_CCPP() {
//        return N_TOTAL_CCPP;
//    }
//
//    public void setN_TOTAL_CCPP(Integer N_TOTAL_CCPP) {
//        this.N_TOTAL_CCPP = N_TOTAL_CCPP;
//    }
    
    public Integer getN_TOTAL_MS() {
        return N_TOTAL_MS;
    }

    public void setN_TOTAL_MS(Integer N_TOTAL_MS) {
        this.N_TOTAL_MS = N_TOTAL_MS;
    }
    
    public Integer getN_TOTAL_MS_ESTIMADAS() {
        return N_TOTAL_MS_ESTIMADAS;
    }

    public void setN_TOTAL_MS_ESTIMADAS(Integer N_TOTAL_MS_ESTIMADAS) {
        this.N_TOTAL_MS_ESTIMADAS = N_TOTAL_MS_ESTIMADAS;
    }

//    public Integer getN_CANT_MS_COMPLETA() {
//        return N_CANT_MS_COMPLETA;
//    }
//
//    public void setN_CANT_MS_COMPLETA(Integer N_CANT_MS_COMPLETA) {
//        this.N_CANT_MS_COMPLETA = N_CANT_MS_COMPLETA;
//    }
//
//    public Integer getN_PORC_MS_COMPLETA() {
//        return N_PORC_MS_COMPLETA;
//    }
//
//    public void setN_PORC_MS_COMPLETA(Integer N_PORC_MS_COMPLETA) {
//        this.N_PORC_MS_COMPLETA = N_PORC_MS_COMPLETA;
//    }
//
//    public Integer getN_CANT_MS_TEMPORAL() {
//        return N_CANT_MS_TEMPORAL;
//    }
//
//    public void setN_CANT_MS_TEMPORAL(Integer N_CANT_MS_TEMPORAL) {
//        this.N_CANT_MS_TEMPORAL = N_CANT_MS_TEMPORAL;
//    }
//
//    public Integer getN_PORC_MS_TEMPORAL() {
//        return N_PORC_MS_TEMPORAL;
//    }
//
//    public void setN_PORC_MS_TEMPORAL(Integer N_PORC_MS_TEMPORAL) {
//        this.N_PORC_MS_TEMPORAL = N_PORC_MS_TEMPORAL;
//    }
//
//    public Integer getN_CANT_MS_EXTRA() {
//        return N_CANT_MS_EXTRA;
//    }
//
//    public void setN_CANT_MS_EXTRA(Integer N_CANT_MS_EXTRA) {
//        this.N_CANT_MS_EXTRA = N_CANT_MS_EXTRA;
//    }
//
//    public Integer getN_PORC_MS_EXTRA() {
//        return N_PORC_MS_EXTRA;
//    }
//
//    public void setN_PORC_MS_EXTRA(Integer N_PORC_MS_EXTRA) {
//        this.N_PORC_MS_EXTRA = N_PORC_MS_EXTRA;
//    }

//    public Integer getN_PORC_MS_SEA() {
//        return N_PORC_MS_SEA;
//    }
//
//    public void setN_PORC_MS_SEA(Integer N_PORC_MS_SEA) {
//        this.N_PORC_MS_SEA = N_PORC_MS_SEA;
//    }
//
//    public Integer getN_PORC_MS_VE() {
//        return N_PORC_MS_VE;
//    }
//
//    public void setN_PORC_MS_VE(Integer N_PORC_MS_VE) {
//        this.N_PORC_MS_VE = N_PORC_MS_VE;
//    }
//
//    public Integer getN_PORC_MS_CONVENCIONAL() {
//        return N_PORC_MS_CONVENCIONAL;
//    }
//
//    public void setN_PORC_MS_CONVENCIONAL(Integer N_PORC_MS_CONVENCIONAL) {
//        this.N_PORC_MS_CONVENCIONAL = N_PORC_MS_CONVENCIONAL;
//    }

  
}
