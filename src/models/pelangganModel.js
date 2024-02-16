import { Sequelize } from 'sequelize';

import db from '../config/db.js';

const { DataType } = Sequelize;

const getAllPelanggan = () => {
    const query = 'SELECT * FROM pelanggan';
    
    return db.execute(query);
}

const createPelanggan = (body) => {
    const query = `INSERT INTO pelanggan (nama, notelp, email, alamat, isActive) VALUES ('${body.nama}', ${body.notelp}, '${body.email}', '${body.alamat}', '${body.isActive}')`;

    return db.execute(query);
}

const editPelanggan = (body, id) => {
    const query = `UPDATE pelanggan SET nama='${body.nama}', notelp='${body.notelp}', email='${body.email}', alamat='${body.alamat}', isActive=${body.isActive}' WHERE id=${id}`

    return db.execute(query);
}

const deletePelanggan = (body, id) => {
    const query = `DELETE FROM pelanggan WHERE id=${id}`
    
    return db.execute(query);
}

const getPelanggan = (body, id) => {
    const query = `SELECT nama, nohp, email, alamat, isActive FROM pelanggan WHERE id=${id}`

    return db.execute(query);
}

const pelangganModel = {
    getAllPelanggan,
    createPelanggan,
    editPelanggan,
    deletePelanggan,
    getPelanggan
    }
;

export default pelangganModel