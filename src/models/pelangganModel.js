import { Sequelize } from 'sequelize';

const db = require('../config/db.js')

const { DataType } = Sequelize;

const getAllToko = () => {
    const query = 'SELECT * FROM toko';
    
    return db.execute(query);
}

const createToko = (body) => {
    const query = `INSERT INTO toko (nama, alamat, nohp, email, pass, qris, gambar, slogan) VALUES ('${body.nama}', '${body.alamat}', ${body.nohp}, '${body.email}', '${body.pass}', '${body.qris}', '${body.gambar}', '${body.slogan}')`;

    return db.execute(query);
}

const editToko = (body, id) => {
    const query = `UPDATE toko SET nama='${body.nama}', alamat='${body.alamat}', nohp='${body.nohp}', email='${body.email}', pass='${body.pass}', qris='${body.qris}', gambar='$body.gambar', slogan='${body.slogan}' WHERE id=${id}`

    return db.execute(query);
}

const deleteToko = (body, id) => {
    const query = `DELETE FROM toko WHERE id=${id}`
    
    return db.execute(query);
}

const getToko = (body, id) => {
    const query = `SELECT nama, alamat, nohp, email, pass, qris, gambar, slogan FROM toko WHERE id=${id}`

    return db.execute(query);
}

module.exports = {
    getAllToko,
    createToko,
    editToko,
    deleteToko,
    getToko
};