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
import pe.gob.onpe.adan.dao.adan.ItemDao;
import pe.gob.onpe.adan.service.Adan.ItemService;

/**
 *
 * @author marrisueno
 */
@Service("itemService")
public class ItemServiceImpl implements ItemService{
    
    @Autowired
    private ItemDao dao;   

    @Override
    public List getItems(String tipo, String value) {
        return dao.getItems(tipo, value);
    }
    
    @Override
    public List getDistritos(String ubigeo, String value) {
        return dao.getDistritos(ubigeo, value);
    }
    
    @Override
    public List getUbigeo(String ubigeo) {
        return dao.getUbigeo(ubigeo);
    }
    
}
