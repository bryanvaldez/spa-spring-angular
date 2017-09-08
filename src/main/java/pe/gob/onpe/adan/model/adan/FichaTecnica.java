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
@Table(name = "CAB_FICHA_TECNICA")
public class FichaTecnica implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_FICHA_TECNICA")
    @SequenceGenerator(name = "SEQ_FICHA_TECNICA", sequenceName = "SEQ_FICHA_TECNICA_PK")
    @Column(name = "N_FICHA_TECNICA_PK")         
    private Integer id;

    @Column(name = "C_VERSION")
    private String version;

    @Column(name = "D_FECHA_VERSION")
    private Date fechaVersion;

    @Column(name = "C_RESOLUCION")
    private String resolucion;

    @Column(name = "C_NOMBRE_ARCHIVO")
    private String nombreArchivo;

    @Column(name = "B_ARCHIVO")
    private byte[] archivo;

    @Column(name = "N_TIPO_ELECCION")
    private Integer tipoEleccion;

    @Column(name = "N_ANIO_ELECCION")
    private Integer anioEleccion;

    @Column(name = "C_NOMBRE_CORTO")
    private String nombreCorto;

    @Column(name = "N_PERIODICIDAD")
    private Integer periodicidad;

    @Column(name = "D_FECHA_ELECCION")
    private Date fechaEleccion;

    @Column(name = "N_ESTADO")
    private Integer estado;

    @Column(name = "C_NOMBRE_LARGO")
    private String nombreLargo;

    @Column(name = "N_MUNICIPALIDADES")
    private Integer municipalidades;

    @Column(name = "C_AMBITO")
    private String ambito;

    @Column(name = "D_FECHA_ARCHIVO")
    private Date fechaArchivo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Date getFechaVersion() {
        return fechaVersion;
    }

    public void setFechaVersion(Date fechaVersion) {
        this.fechaVersion = fechaVersion;
    }

    public String getResolucion() {
        return resolucion;
    }

    public void setResolucion(String resolucion) {
        this.resolucion = resolucion;
    }

    public String getNombreArchivo() {
        return nombreArchivo;
    }

    public void setNombreArchivo(String nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    public byte[] getArchivo() {
        return archivo;
    }

    public void setArchivo(byte[] archivo) {
        this.archivo = archivo;
    }

    public Integer getTipoEleccion() {
        return tipoEleccion;
    }

    public void setTipoEleccion(Integer tipoEleccion) {
        this.tipoEleccion = tipoEleccion;
    }

    public Integer getAnioEleccion() {
        return anioEleccion;
    }

    public void setAnioEleccion(Integer anioEleccion) {
        this.anioEleccion = anioEleccion;
    }

    public String getNombreCorto() {
        return nombreCorto;
    }

    public void setNombreCorto(String nombreCorto) {
        this.nombreCorto = nombreCorto;
    }

    public Integer getPeriodicidad() {
        return periodicidad;
    }

    public void setPeriodicidad(Integer periodicidad) {
        this.periodicidad = periodicidad;
    }

    public Date getFechaEleccion() {
        return fechaEleccion;
    }

    public void setFechaEleccion(Date fechaEleccion) {
        this.fechaEleccion = fechaEleccion;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public String getNombreLargo() {
        return nombreLargo;
    }

    public void setNombreLargo(String nombreLargo) {
        this.nombreLargo = nombreLargo;
    }

    public Integer getMunicipalidades() {
        return municipalidades;
    }

    public void setMunicipalidades(Integer municipalidades) {
        this.municipalidades = municipalidades;
    }

    public String getAmbito() {
        return ambito;
    }

    public void setAmbito(String ambito) {
        this.ambito = ambito;
    }

    public Date getFechaArchivo() {
        return fechaArchivo;
    }

    public void setFechaArchivo(Date fechaArchivo) {
        this.fechaArchivo = fechaArchivo;
    }

}
