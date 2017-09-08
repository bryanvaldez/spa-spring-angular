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
@Table(name="TAB_SECCION_ELECTOR")
public class ReporteElector implements Serializable{
    
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
    
    @Column(name = "N_TOTAL_EH")
    @JsonProperty("N_TOTAL_EH")
    private Integer N_TOTAL_EH;    
    
    @Column(name = "N_CANT_EH_MUJER")
    @JsonProperty("N_CANT_EH_MUJER")
    private Integer N_CANT_EH_MUJER;
    
    @Column(name = "N_CANT_EH_HOMBRE")
    @JsonProperty("N_CANT_EH_HOMBRE")
    private Integer N_CANT_EH_HOMBRE;     
    
    @Column(name = "N_PORC_EH_MUJER")
    @JsonProperty("N_PORC_EH_MUJER")
    private Double N_PORC_EH_MUJER;
    
    @Column(name = "N_PORC_EH_HOMBRE")
    @JsonProperty("N_PORC_EH_HOMBRE")
    private Double N_PORC_EH_HOMBRE;   
        
    @Column(name = "N_CANT_RANGO_EDAD_A")
    @JsonProperty("N_CANT_RANGO_EDAD_A")
    private Integer N_CANT_RANGO_EDAD_A;   

    @Column(name = "N_PORC_RANGO_EDAD_A")
    @JsonProperty("N_PORC_RANGO_EDAD_A")
    private Double N_PORC_RANGO_EDAD_A;    
    
    @Column(name = "N_CANT_RANGO_EDAD_B")
    @JsonProperty("N_CANT_RANGO_EDAD_B")
    private Integer N_CANT_RANGO_EDAD_B;   

    @Column(name = "N_PORC_RANGO_EDAD_B")
    @JsonProperty("N_PORC_RANGO_EDAD_B")
    private Double N_PORC_RANGO_EDAD_B;  

    @Column(name = "N_CANT_RANGO_EDAD_C")
    @JsonProperty("N_CANT_RANGO_EDAD_C")
    private Integer N_CANT_RANGO_EDAD_C;   

    @Column(name = "N_PORC_RANGO_EDAD_C")
    @JsonProperty("N_PORC_RANGO_EDAD_C")
    private Double N_PORC_RANGO_EDAD_C;  
    
    @Column(name = "N_CANT_RANGO_EDAD_D")
    @JsonProperty("N_CANT_RANGO_EDAD_D")
    private Integer N_CANT_RANGO_EDAD_D;   

    @Column(name = "N_PORC_RANGO_EDAD_D")
    @JsonProperty("N_PORC_RANGO_EDAD_D")
    private Double N_PORC_RANGO_EDAD_D;

    @Column(name = "N_CANT_RANGO_EDAD_E")
    @JsonProperty("N_CANT_RANGO_EDAD_E")
    private Integer N_CANT_RANGO_EDAD_E;   

    @Column(name = "N_PORC_RANGO_EDAD_E")
    @JsonProperty("N_PORC_RANGO_EDAD_E")
    private Double N_PORC_RANGO_EDAD_E;
    
    @Column(name = "N_CANT_RANGO_EDAD_F")
    @JsonProperty("N_CANT_RANGO_EDAD_F")
    private Integer N_CANT_RANGO_EDAD_F;   

    @Column(name = "N_PORC_RANGO_EDAD_F")
    @JsonProperty("N_PORC_RANGO_EDAD_F")
    private Double N_PORC_RANGO_EDAD_F; 
    
//    @Column(name = "N_TOTAL_CCPP")
//    @JsonProperty("N_TOTAL_CCPP")
//    private Integer N_TOTAL_CCPP;

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

    public Integer getN_TOTAL_EH() {
        return N_TOTAL_EH;
    }

    public void setN_TOTAL_EH(Integer N_TOTAL_EH) {
        this.N_TOTAL_EH = N_TOTAL_EH;
    }

    public Integer getN_CANT_EH_MUJER() {
        return N_CANT_EH_MUJER;
    }

    public void setN_CANT_EH_MUJER(Integer N_CANT_EH_MUJER) {
        this.N_CANT_EH_MUJER = N_CANT_EH_MUJER;
    }

    public Integer getN_CANT_EH_HOMBRE() {
        return N_CANT_EH_HOMBRE;
    }

    public void setN_CANT_EH_HOMBRE(Integer N_CANT_EH_HOMBRE) {
        this.N_CANT_EH_HOMBRE = N_CANT_EH_HOMBRE;
    }

    public Double getN_PORC_EH_MUJER() {
        return N_PORC_EH_MUJER;
    }

    public void setN_PORC_EH_MUJER(Double N_PORC_EH_MUJER) {
        this.N_PORC_EH_MUJER = N_PORC_EH_MUJER;
    }

    public Double getN_PORC_EH_HOMBRE() {
        return N_PORC_EH_HOMBRE;
    }

    public void setN_PORC_EH_HOMBRE(Double N_PORC_EH_HOMBRE) {
        this.N_PORC_EH_HOMBRE = N_PORC_EH_HOMBRE;
    }

    public Integer getN_CANT_RANGO_EDAD_A() {
        return N_CANT_RANGO_EDAD_A;
    }

    public void setN_CANT_RANGO_EDAD_A(Integer N_CANT_RANGO_EDAD_A) {
        this.N_CANT_RANGO_EDAD_A = N_CANT_RANGO_EDAD_A;
    }

    public Double getN_PORC_RANGO_EDAD_A() {
        return N_PORC_RANGO_EDAD_A;
    }

    public void setN_PORC_RANGO_EDAD_A(Double N_PORC_RANGO_EDAD_A) {
        this.N_PORC_RANGO_EDAD_A = N_PORC_RANGO_EDAD_A;
    }

    public Integer getN_CANT_RANGO_EDAD_B() {
        return N_CANT_RANGO_EDAD_B;
    }

    public void setN_CANT_RANGO_EDAD_B(Integer N_CANT_RANGO_EDAD_B) {
        this.N_CANT_RANGO_EDAD_B = N_CANT_RANGO_EDAD_B;
    }

    public Double getN_PORC_RANGO_EDAD_B() {
        return N_PORC_RANGO_EDAD_B;
    }

    public void setN_PORC_RANGO_EDAD_B(Double N_PORC_RANGO_EDAD_B) {
        this.N_PORC_RANGO_EDAD_B = N_PORC_RANGO_EDAD_B;
    }

    public Integer getN_CANT_RANGO_EDAD_C() {
        return N_CANT_RANGO_EDAD_C;
    }

    public void setN_CANT_RANGO_EDAD_C(Integer N_CANT_RANGO_EDAD_C) {
        this.N_CANT_RANGO_EDAD_C = N_CANT_RANGO_EDAD_C;
    }

    public Double getN_PORC_RANGO_EDAD_C() {
        return N_PORC_RANGO_EDAD_C;
    }

    public void setN_PORC_RANGO_EDAD_C(Double N_PORC_RANGO_EDAD_C) {
        this.N_PORC_RANGO_EDAD_C = N_PORC_RANGO_EDAD_C;
    }

    public Integer getN_CANT_RANGO_EDAD_D() {
        return N_CANT_RANGO_EDAD_D;
    }

    public void setN_CANT_RANGO_EDAD_D(Integer N_CANT_RANGO_EDAD_D) {
        this.N_CANT_RANGO_EDAD_D = N_CANT_RANGO_EDAD_D;
    }

    public Double getN_PORC_RANGO_EDAD_D() {
        return N_PORC_RANGO_EDAD_D;
    }

    public void setN_PORC_RANGO_EDAD_D(Double N_PORC_RANGO_EDAD_D) {
        this.N_PORC_RANGO_EDAD_D = N_PORC_RANGO_EDAD_D;
    }

    public Integer getN_CANT_RANGO_EDAD_E() {
        return N_CANT_RANGO_EDAD_E;
    }

    public void setN_CANT_RANGO_EDAD_E(Integer N_CANT_RANGO_EDAD_E) {
        this.N_CANT_RANGO_EDAD_E = N_CANT_RANGO_EDAD_E;
    }

    public Double getN_PORC_RANGO_EDAD_E() {
        return N_PORC_RANGO_EDAD_E;
    }

    public void setN_PORC_RANGO_EDAD_E(Double N_PORC_RANGO_EDAD_E) {
        this.N_PORC_RANGO_EDAD_E = N_PORC_RANGO_EDAD_E;
    }

    public Integer getN_CANT_RANGO_EDAD_F() {
        return N_CANT_RANGO_EDAD_F;
    }

    public void setN_CANT_RANGO_EDAD_F(Integer N_CANT_RANGO_EDAD_F) {
        this.N_CANT_RANGO_EDAD_F = N_CANT_RANGO_EDAD_F;
    }

    public Double getN_PORC_RANGO_EDAD_F() {
        return N_PORC_RANGO_EDAD_F;
    }

    public void setN_PORC_RANGO_EDAD_F(Double N_PORC_RANGO_EDAD_F) {
        this.N_PORC_RANGO_EDAD_F = N_PORC_RANGO_EDAD_F;
    }
    
//    public Integer getN_TOTAL_CCPP() {
//        return N_TOTAL_CCPP;
//    }
//
//    public void setN_TOTAL_CCPP(Integer N_TOTAL_CCPP) {
//        this.N_TOTAL_CCPP = N_TOTAL_CCPP;
//    }

}
