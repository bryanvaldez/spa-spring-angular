/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

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
@Table(name = "CAB_CARGA")
public class CabeceraCarga {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_CARGA")
    @SequenceGenerator(name="SEQ_CARGA", sequenceName="SEQ_CARGA_PK")
    @Column(name = "n_carga_pk")
    private int id;
    
    @Column(name = "n_entidad")
    private int idEntidad;
    
    @Column(name = "n_tipo_carga")
    private int tipoCarga;
    
    @Column(name = "c_json_excel")
    private String jsonExcel;
    
    @Column(name = "c_observacion_general")
    private String observacionGeneral;
    
    @Column(name = "c_observacion_detalle")
    private String observacionDetalle;
    
    @Column(name = "c_nombre_archivo")
    private String nombreArchivo;
    
    @Column(name = "b_archivo_excel")
    private byte[] archivoExcel;
    
    @Column(name = "n_estado_final")
    private int estadoFinal;
    
    @Column(name = "d_fecha_carga")
    private String fechaCarga;
    
    @Column(name = "c_usuario")
    private String usuario;
        
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdEntidad() {
        return idEntidad;
    }

    public void setIdEntidad(int idEntidad) {
        this.idEntidad = idEntidad;
    }

    public int getTipoCarga() {
        return tipoCarga;
    }

    public void setTipoCarga(int tipoCarga) {
        this.tipoCarga = tipoCarga;
    }

    public String getJsonExcel() {
        return jsonExcel;
    }

    public void setJsonExcel(String jsonExcel) {
        this.jsonExcel = jsonExcel;
    }

    public String getObservacionGeneral() {
        return observacionGeneral;
    }

    public void setObservacionGeneral(String observacionGeneral) {
        this.observacionGeneral = observacionGeneral;
    }

    public String getObservacionDetalle() {
        return observacionDetalle;
    }

    public void setObservacionDetalle(String observacionDetalle) {
        this.observacionDetalle = observacionDetalle;
    }

    public String getNombreArchivo() {
        return nombreArchivo;
    }

    public void setNombreArchivo(String nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    public byte[] getArchivoExcel() {
        return archivoExcel;
    }

    public void setArchivoExcel(byte[] archivoExcel) {
        this.archivoExcel = archivoExcel;
    }

    public int getEstadoFinal() {
        return estadoFinal;
    }

    public void setEstadoFinal(int estadoFinal) {
        this.estadoFinal = estadoFinal;
    }

    public String getFechaCarga() {
        return fechaCarga;
    }

    public void setFechaCarga(String fechaCarga) {
        this.fechaCarga = fechaCarga;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }   

}
