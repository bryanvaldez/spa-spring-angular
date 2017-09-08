/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.onpe.adan.dao.adan.DocumentoDao;
import pe.gob.onpe.adan.model.adan.Documento;
import pe.gob.onpe.adan.service.Adan.DocumentoService;

/**
 *
 * @author bvaldez
 */
@Service("documentoService")
public class DocumentoServiceImpl implements DocumentoService{
    
//    @Autowired
//    private DocumentoRepository documentoRepository;      

    @Autowired
    private DocumentoDao documentoDao;
    
    @Override
    public void saveDocumento(Documento documento) {
        documentoDao.saveDocumento(documento);
        //documentoRepository.save(documento);
    }

    @Override
    public void updateDocumento(Documento documento) {
        documentoDao.updateDocumento(documento);
        //saveDocumento(documento);
    }
    
    @Override
    public void updateDocumento2(Documento doc){
        documentoDao.updateDocumento2(doc);
    }
    
    @Override
    public List findAllDocumento() {
        return documentoDao.findAll();
    }
    
    @Override
    public Documento findById(int id) {
        return documentoDao.findById(id);
        //return documentoRepository.findOne(id);                
    }
    
}
