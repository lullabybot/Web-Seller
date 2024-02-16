import mysql from 'mysql2';

// const util = require('util')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'next_db_ukmbot'
});

// db.connect((err) => {
//     if (err){
//         console.error('koneksi error:', err);
//         return;
//     }
//     console.log('koneksi berhasil');
// })

const db = conn.promise();

export default db;