import { Sequelize } from 'sequelize';

import db from '../config/db.js';
// import bodyparser from 'body-parser';

const { DataType } = Sequelize;

const getAllProduk = (id) => {
    const query = `SELECT * FROM produk WHERE id_toko = 1`;
    
    return db.execute(query);
}

const createProduk = (body, id) => {   
    const query = `INSERT INTO produk (id_toko, nama_barang, deskripsi, satuan, harga_beli, harga_jual) VALUES 
    (${id}, '${body.nama_barang}', '${body.deskripsi}', '${body.satuan}', '${body.harga_beli}', '${body.harga_jual}')`;

    return db.execute(query);
}

const editProduk = (body, idProd) => {
    const query = `UPDATE produk SET nama_barang='${body.nama_barang}', deskripsi='${body.deskripsi}', 
    satuan='${body.satuan}', harga_beli='${body.harga_beli}', harga_jual='${body.harga_jual}' WHERE id=${idProd}`

    return db.execute(query);
}

const deleteProduk = (body, idProd) => {
    const query = `DELETE FROM produk WHERE id=${idProd}`
    
    return db.execute(query);
}

const getProduk = (body, id) => {
    const query = `SELECT nama_barang, deskripsi, satuan, harga_beli, harga_jual FROM produk WHERE id=${id}`

    return db.execute(query);
}

const produkModel = {
    getAllProduk,
    createProduk,
    editProduk,
    deleteProduk,
    getProduk
}
    
    
;

export default produkModel