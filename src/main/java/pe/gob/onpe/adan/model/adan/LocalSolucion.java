/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name = "VW_LOCALES_SOLUCION")
public class LocalSolucion {
    
    @Id
    @Column(name = "C_CODIGO")
    @JsonProperty("C_CODIGO")
    private String C_CODIGO;  
    
    @Column(name = "C_NOMBRE")
    @JsonProperty("C_NOMBRE")    
    private String C_NOMBRE;    
        
    @Column(name = "C_CODIGO_PADRE")
    @JsonProperty("C_CODIGO_PADRE")    
    private String C_CODIGO_PADRE;  

    @Column(name = "C_CCPP")
    @JsonProperty("C_CCPP")    
    private String C_CCPP;      

    @Column(name = "N_DPTO_CONT")
    @JsonProperty("N_DPTO_CONT")    
    private Integer N_DPTO_CONT;

    @Column(name = "N_PROV_PAIS")
    @JsonProperty("N_PROV_PAIS")    
    private Integer N_PROV_PAIS;

    @Column(name = "N_DIST_CIUD")
    @JsonProperty("N_DIST_CIUD")    
    private Integer N_DIST_CIUD;

    @Column(name = "N_LOCAL")
    @JsonProperty("N_LOCAL")    
    private Integer N_LOCAL;

    @Column(name = "N_MESA")
    @JsonProperty("N_MESA")    
    private Integer N_MESA;

    @Column(name = "VEP")
    @JsonProperty("VEP")    
    private Integer VEP;

    @Column(name = "SEA")
    @JsonProperty("SEA")    
    private Integer SEA;    
    
    @Column(name = "CONV")
    @JsonProperty("CONV")    
    private Integer CONV;  

    @Column(name = "CONN")
    @JsonProperty("CONN")    
    private Integer CONN;  

    public String getC_CODIGO() {
        return C_CODIGO;
    }

    public void setC_CODIGO(String C_CODIGO) {
        this.C_CODIGO = C_CODIGO;
    }

    public String getC_NOMBRE() {
        return C_NOMBRE;
    }

    public void setC_NOMBRE(String C_NOMBRE) {
        this.C_NOMBRE = C_NOMBRE;
    }

    public String getC_CODIGO_PADRE() {
        return C_CODIGO_PADRE;
    }

    public void setC_CODIGO_PADRE(String C_CODIGO_PADRE) {
        this.C_CODIGO_PADRE = C_CODIGO_PADRE;
    }

    public String getC_CCPP() {
        return C_CCPP;
    }

    public void setC_CCPP(String C_CCPP) {
        this.C_CCPP = C_CCPP;
    }

    public Integer getN_DPTO_CONT() {
        return N_DPTO_CONT;
    }

    public void setN_DPTO_CONT(Integer N_DPTO_CONT) {
        this.N_DPTO_CONT = N_DPTO_CONT;
    }

    public Integer getN_PROV_PAIS() {
        return N_PROV_PAIS;
    }

    public void setN_PROV_PAIS(Integer N_PROV_PAIS) {
        this.N_PROV_PAIS = N_PROV_PAIS;
    }

    public Integer getN_DIST_CIUD() {
        return N_DIST_CIUD;
    }

    public void setN_DIST_CIUD(Integer N_DIST_CIUD) {
        this.N_DIST_CIUD = N_DIST_CIUD;
    }

    public Integer getN_LOCAL() {
        return N_LOCAL;
    }

    public void setN_LOCAL(Integer N_LOCAL) {
        this.N_LOCAL = N_LOCAL;
    }

    public Integer getN_MESA() {
        return N_MESA;
    }

    public void setN_MESA(Integer N_MESA) {
        this.N_MESA = N_MESA;
    }

    public Integer getVEP() {
        return VEP;
    }

    public void setVEP(Integer VEP) {
        this.VEP = VEP;
    }

    public Integer getSEA() {
        return SEA;
    }

    public void setSEA(Integer SEA) {
        this.SEA = SEA;
    }

    public Integer getCONV() {
        return CONV;
    }

    public void setCONV(Integer CONV) {
        this.CONV = CONV;
    }

    public Integer getCONN() {
        return CONN;
    }

    public void setCONN(Integer CONN) {
        this.CONN = CONN;
    }


    
}
