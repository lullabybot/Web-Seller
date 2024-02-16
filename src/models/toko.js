import { Sequelize } from 'sequelize';

import db from '../config/db.js';


const { DataType } = Sequelize;

const getAllToko = () => {
    const query = 'SELECT * FROM toko';
    
    return db.execute(query);
}

const createToko = (body) => {
    const query = `INSERT INTO toko (INSERT INTO toko (nama, alamat, notelp, email, pass, isActive) VALUES ('${body.nama}', '${body.alamat}', ${body.notelp}, '${body.email}', '${body.pass}', '${body.isActive}')`;

    return db.execute(query);
}

const editToko = (body, id) => {
    const query = `UPDATE toko SET nama='${body.nama}', alamat='${body.alamat}', notelp='${body.notelp}', email='${body.email}', pass='${body.pass}' WHERE id=${id}`

    return db.execute(query);
}

const deleteToko = (body, id) => {
    const query = `DELETE FROM toko WHERE id=${id}`
    
    return db.execute(query);
}

const getToko = (body, id) => {
    const query = `SELECT nama, alamat, nohp, email, pass FROM toko WHERE id=${id}`

    return db.execute(query);
}

const tokoModel = {
    getAllToko,
    createToko,
    editToko,
    deleteToko,
    getToko
};

export default tokoModel