import { Sequelize } from 'sequelize';

import db from '../config/db.js';


const { DataType } = Sequelize;

const getAllToko = () => {
    const query = 'SELECT * FROM toko';
    
    return db.execute(query);
}

const createToko = (body) => {
    const query = `INSERT INTO toko (nama, alamat, notelp, email, pass, isActive) VALUES ('${body.nama}', '${body.alamat}', ${body.notelp}, '${body.email}', '${body.pass}', '${body.isActive}')`;

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
    const query = `SELECT nama, alamat, notelp, email, pass FROM toko WHERE id=${id}`

    return db.execute(query);
}

const getUserByUsernameAndPassword = (username, password, callback, body) => {
    const query = 'SELECT * FROM toko WHERE nama = ${body.nama} AND pass = ${body.pass}';
    connection.query(query, [username, password], (error, results, fields) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  };
  

const tokoModel = {
    getAllToko,
    createToko,
    editToko,
    deleteToko,
    getToko,
    getUserByUsernameAndPassword
};

export default tokoModel