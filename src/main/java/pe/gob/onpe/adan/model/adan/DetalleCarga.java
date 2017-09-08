/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

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
 * @author MArrisueno
 */
@Entity
@Table(name = "DET_CARGA")
public class DetalleCarga {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_DET_CARGA_PK")
    @SequenceGenerator(name="SEQ_DET_CARGA_PK", sequenceName="SEQ_DET_CARGA_PK")
    @Column(name = "N_DET_CARGA_PK")
    private int N_DET_CARGA_PK;
    
    @Column(name = "N_ENTIDAD")
    private int N_ENTIDAD;
        
    @Column(name = "N_TIPO_CARGA")
    private int N_TIPO_CARGA;
        
    @Column(name = "N_CARGA")
    private int N_CARGA;
    
    @Column(name = "N_LOCAL_PK")
    private int N_LOCAL_PK;
    
    @Column(name = "C_CODIGO")
    private String C_CODIGO;
    
    @Column(name = "C_UBIGEO")
    private String C_UBIGEO;
    
    @Column(name = "C_NOMBRE")
    private String C_NOMBRE;
    
    @Column(name = "C_DIRECCION")
    private String C_DIRECCION;
    
    @Column(name = "N_MESAS")
    private int N_MESAS;
    
    @Column(name = "N_ELECTORES")
    private int N_ELECTORES;
    
    @Column(name = "C_CCPP")
    private String C_CCPP;
    
    @Column(name = "N_LATITUD")
    private String N_LATITUD;
    
    @Column(name = "N_LONGITUD")
    private String N_LONGITUD;
       
    @Column(name = "C_REFERENCIA")
    private String C_REFERENCIA;
       
    @Column(name = "ODPE")
    private String ODPE;
    
    @Column(name = "ODPE_DES")
    private String ODPE_DES;
    
    @Column(name = "DEPARTAMENTO")
    private String DEPARTAMENTO;
    
    @Column(name = "PROVINCIA")
    private String PROVINCIA;
    
    @Column(name = "DISTRITO")
    private String DISTRITO; 
    
    @Column(name = "SEDE")
    private String SEDE;
    
    @Column(name = "C_FUENTE")
    private String C_FUENTE;
    
    @Column(name = "N_ID_REGISTRO")
    private int N_ID_REGISTRO;
    
    @Column(name = "C_DOCUMENTO_IDENTIDAD")
    private String C_DOCUMENTO_IDENTIDAD;
    
    @Column(name = "C_APELLIDO_PATERNO")
    private String C_APELLIDO_PATERNO;
    
    @Column(name = "C_APELLIDO_MATERNO")
    private String C_APELLIDO_MATERNO;
    
    @Column(name = "C_NOMBRES")
    private String C_NOMBRES;
    
    @Column(name = "D_FECHA_REGISTRO")
    private String D_FECHA_REGISTRO;
    
    @Column(name = "C_TIPO")
    private String C_TIPO;

    public int getN_DET_CARGA_PK() {
        return N_DET_CARGA_PK;
    }

    public void setN_DET_CARGA_PK(int N_DET_CARGA_PK) {
        this.N_DET_CARGA_PK = N_DET_CARGA_PK;
    }

    public int getN_ENTIDAD() {
        return N_ENTIDAD;
    }

    public void setN_ENTIDAD(int N_ENTIDAD) {
        this.N_ENTIDAD = N_ENTIDAD;
    }

    public int getN_TIPO_CARGA() {
        return N_TIPO_CARGA;
    }

    public void setN_TIPO_CARGA(int N_TIPO_CARGA) {
        this.N_TIPO_CARGA = N_TIPO_CARGA;
    }

    public int getN_CARGA() {
        return N_CARGA;
    }

    public void setN_CARGA(int N_CARGA) {
        this.N_CARGA = N_CARGA;
    }

    public int getN_LOCAL_PK() {
        return N_LOCAL_PK;
    }

    public void setN_LOCAL_PK(int N_LOCAL_PK) {
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

    public int getN_MESAS() {
        return N_MESAS;
    }

    public void setN_MESAS(int N_MESAS) {
        this.N_MESAS = N_MESAS;
    }

    public int getN_ELECTORES() {
        return N_ELECTORES;
    }

    public void setN_ELECTORES(int N_ELECTORES) {
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

    public String getC_REFERENCIA() {
        return C_REFERENCIA;
    }

    public void setC_REFERENCIA(String C_REFERENCIA) {
        this.C_REFERENCIA = C_REFERENCIA;
    }

    public String getODPE() {
        return ODPE;
    }

    public void setODPE(String ODPE) {
        this.ODPE = ODPE;
    }

    public String getODPE_DES() {
        return ODPE_DES;
    }

    public void setODPE_DESC(String ODPE_DES) {
        this.ODPE_DES = ODPE_DES;
    }

    public String getDEPARTAMENTO() {
        return DEPARTAMENTO;
    }

    public void setDEPARTAMENTO(String DEPARTAMENTO) {
        this.DEPARTAMENTO = DEPARTAMENTO;
    }

    public String getPROVINCIA() {
        return PROVINCIA;
    }

    public void setPROVINCIA(String PROVINCIA) {
        this.PROVINCIA = PROVINCIA;
    }

    public String getDISTRITO() {
        return DISTRITO;
    }

    public void setDISTRITO(String DISTRITO) {
        this.DISTRITO = DISTRITO;
    }

    public String getSEDE() {
        return SEDE;
    }

    public void setSEDE(String SEDE) {
        this.SEDE = SEDE;
    }

    public String getC_FUENTE() {
        return C_FUENTE;
    }

    public void setC_FUENTE(String C_FUENTE) {
        this.C_FUENTE = C_FUENTE;
    }

    public int getN_ID_REGISTRO() {
        return N_ID_REGISTRO;
    }

    public void setN_ID_REGISTRO(int N_ID_REGISTRO) {
        this.N_ID_REGISTRO = N_ID_REGISTRO;
    }

    public String getC_DOCUMENTO_IDENTIDAD() {
        return C_DOCUMENTO_IDENTIDAD;
    }

    public void setC_DOCUMENTO_IDENTIDAD(String C_DOCUMENTO_IDENTIDAD) {
        this.C_DOCUMENTO_IDENTIDAD = C_DOCUMENTO_IDENTIDAD;
    }

    public String getC_APELLIDO_PATERNO() {
        return C_APELLIDO_PATERNO;
    }

    public void setC_APELLIDO_PATERNO(String C_APELLIDO_PATERNO) {
        this.C_APELLIDO_PATERNO = C_APELLIDO_PATERNO;
    }

    public String getC_APELLIDO_MATERNO() {
        return C_APELLIDO_MATERNO;
    }

    public void setC_APELLIDO_MATERNO(String C_APELLIDO_MATERNO) {
        this.C_APELLIDO_MATERNO = C_APELLIDO_MATERNO;
    }

    public String getC_NOMBRES() {
        return C_NOMBRES;
    }

    public void setC_NOMBRES(String C_NOMBRES) {
        this.C_NOMBRES = C_NOMBRES;
    }

    public String getD_FECHA_REGISTRO() {
        return D_FECHA_REGISTRO;
    }

    public void setD_FECHA_REGISTRO(String D_FECHA_REGISTRO) {
        this.D_FECHA_REGISTRO = D_FECHA_REGISTRO;
    }

    public String getC_TIPO() {
        return C_TIPO;
    }

    public void setC_TIPO(String C_TIPO) {
        this.C_TIPO = C_TIPO;
    }        
    
}
