const mysql = require('mysql2')
// const util = require('util')

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME
});

// db.connect((err) => {
//     if (err){
//         console.error('koneksi error:', err);
//         return;
//     }
//     console.log('koneksi berhasil');
// })

module.exports = db.promise();