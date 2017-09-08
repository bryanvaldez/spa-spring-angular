/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

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
 * @author AQuispec
 */
@Entity
@Table(name = "TAB_AUDITORIA")
public class Auditoria implements Serializable{      
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_AUDITORIA")
    @SequenceGenerator(name = "SEQ_AUDITORIA", sequenceName = "SEQ_AUDITORIA_PK")
    @Column(name = "N_AUDITORIA_PK")
    private Long id;

    @Column(name = "N_OPCION")
    private int tabla;

    @Column(name = "N_MODULO")
    private int modulo;

    @Column(name = "C_DESCRIPCION_ETAPA")
    private String descripcionEtapa;

    @Column(name = "D_FECHA")
    private Date fecha;

    @Column(name = "C_USUARIO")
    private String usuario;

    @Column(name = "C_DETALLE_CAMBIO")
    private String detalleCambio;

    public Auditoria() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTabla() {
        return tabla;
    }

    public void setTabla(int tabla) {
        this.tabla = tabla;
    }

    public int getModulo() {
        return modulo;
    }

    public void setModulo(int modulo) {
        this.modulo = modulo;
    }

    public String getDescripcionEtapa() {
        return descripcionEtapa;
    }

    public void setDescripcionEtapa(String descripcionEtapa) {
        this.descripcionEtapa = descripcionEtapa;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getDetalleCambio() {
        return detalleCambio;
    }

    public void setDetalleCambio(String detalleCambio) {
        this.detalleCambio = detalleCambio;
    }

}
