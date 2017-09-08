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
@Table(name = "TAB_PADRON")
public class Padron implements Serializable {

    @Id
    @Column(name = "NUMELE")
    @JsonProperty("NUMELE")
    private String NUMELE;
    
    @Column(name = "DIGVER")
    @JsonProperty("DIGVER")    
    private String DIGVER;
    
    @Column(name = "NUMMESA")
    @JsonProperty("NUMMESA")    
    private String NUMMESA;
    
    @Column(name = "UBIGEO")
    @JsonProperty("UBIGEO")    
    private String UBIGEO;
    
    @Column(name = "APPAT")
    @JsonProperty("APPAT")    
    private String APPAT;
    
    @Column(name = "APMAT")
    @JsonProperty("APMAT")    
    private String APMAT;
    
    @Column(name = "NOMBRES")
    @JsonProperty("NOMBRES")    
    private String NOMBRES;

    @Column(name = "FECNAC")
    @JsonProperty("FECNAC")    
    private String FECNAC;
    
    @Column(name = "SEXO")
    @JsonProperty("SEXO")    
    private String SEXO;
    
    @Column(name = "GRADINS")
    @JsonProperty("GRADINS")    
    private String GRADINS;
    
    @Column(name = "RESTRIC")
    @JsonProperty("RESTRIC")    
    private String RESTRIC;
    
    @Column(name = "TIPODOC")
    @JsonProperty("TIPODOC")    
    private String TIPODOC;
    
    @Column(name = "DISCAP")
    @JsonProperty("DISCAP")    
    private String DISCAP;
    
    @Column(name = "NUMMESA_ANT")
    @JsonProperty("NUMMESA_ANT")    
    private String NUMMESA_ANT;
    
    @Column(name = "UBIGEO_RENIEC")
    @JsonProperty("UBIGEO_RENIEC")    
    private String UBIGEO_RENIEC;
    
    @Column(name = "CCOMPUTO")
    @JsonProperty("CCOMPUTO")    
    private String CCOMPUTO;
    
    @Column(name = "CCARGO")
    @JsonProperty("CCARGO")    
    private String CCARGO;
    
    @Column(name = "BMAYOR")
    @JsonProperty("BMAYOR")    
    private String BMAYOR;
    
    @Column(name = "NORDEN")
    @JsonProperty("NORDEN")    
    private Integer NORDEN;

    @Column(name = "EDAD")
    @JsonProperty("EDAD")    
    private Integer EDAD;
    
    @Column(name = "N_VIP")
    @JsonProperty("N_VIP")    
    private Integer N_VIP;

    public String getNUMELE() {
        return NUMELE;
    }

    public void setNUMELE(String NUMELE) {
        this.NUMELE = NUMELE;
    }

    public String getDIGVER() {
        return DIGVER;
    }

    public void setDIGVER(String DIGVER) {
        this.DIGVER = DIGVER;
    }

    public String getNUMMESA() {
        return NUMMESA;
    }

    public void setNUMMESA(String NUMMESA) {
        this.NUMMESA = NUMMESA;
    }

    public String getUBIGEO() {
        return UBIGEO;
    }

    public void setUBIGEO(String UBIGEO) {
        this.UBIGEO = UBIGEO;
    }

    public String getAPPAT() {
        return APPAT;
    }

    public void setAPPAT(String APPAT) {
        this.APPAT = APPAT;
    }

    public String getAPMAT() {
        return APMAT;
    }

    public void setAPMAT(String APMAT) {
        this.APMAT = APMAT;
    }

    public String getNOMBRES() {
        return NOMBRES;
    }

    public void setNOMBRES(String NOMBRES) {
        this.NOMBRES = NOMBRES;
    }

    public String getFECNAC() {
        return FECNAC;
    }

    public void setFECNAC(String FECNAC) {
        this.FECNAC = FECNAC;
    }

    public String getSEXO() {
        return SEXO;
    }

    public void setSEXO(String SEXO) {
        this.SEXO = SEXO;
    }

    public String getGRADINS() {
        return GRADINS;
    }

    public void setGRADINS(String GRADINS) {
        this.GRADINS = GRADINS;
    }

    public String getRESTRIC() {
        return RESTRIC;
    }

    public void setRESTRIC(String RESTRIC) {
        this.RESTRIC = RESTRIC;
    }

    public String getTIPODOC() {
        return TIPODOC;
    }

    public void setTIPODOC(String TIPODOC) {
        this.TIPODOC = TIPODOC;
    }

    public String getDISCAP() {
        return DISCAP;
    }

    public void setDISCAP(String DISCAP) {
        this.DISCAP = DISCAP;
    }

    public String getNUMMESA_ANT() {
        return NUMMESA_ANT;
    }

    public void setNUMMESA_ANT(String NUMMESA_ANT) {
        this.NUMMESA_ANT = NUMMESA_ANT;
    }

    public String getUBIGEO_RENIEC() {
        return UBIGEO_RENIEC;
    }

    public void setUBIGEO_RENIEC(String UBIGEO_RENIEC) {
        this.UBIGEO_RENIEC = UBIGEO_RENIEC;
    }

    public String getCCOMPUTO() {
        return CCOMPUTO;
    }

    public void setCCOMPUTO(String CCOMPUTO) {
        this.CCOMPUTO = CCOMPUTO;
    }

    public String getCCARGO() {
        return CCARGO;
    }

    public void setCCARGO(String CCARGO) {
        this.CCARGO = CCARGO;
    }

    public String getBMAYOR() {
        return BMAYOR;
    }

    public void setBMAYOR(String BMAYOR) {
        this.BMAYOR = BMAYOR;
    }

    public Integer getNORDEN() {
        return NORDEN;
    }

    public void setNORDEN(Integer NORDEN) {
        this.NORDEN = NORDEN;
    }

    public Integer getEDAD() {
        return EDAD;
    }

    public void setEDAD(Integer EDAD) {
        this.EDAD = EDAD;
    }

    public Integer getN_VIP() {
        return N_VIP;
    }

    public void setN_VIP(Integer N_VIP) {
        this.N_VIP = N_VIP;
    }
    
    
}
