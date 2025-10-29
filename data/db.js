const mysql = require('mysql2'); /**Import il package di mysql2*/

const connection = mysql.createConnection({ /**Configurazione della connessione (usiamo il metodo di creazione oggetto di connessione)*/
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
});

connection.connect((err) => { /**Prova di connessione tramite metodo connect*/
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = connection; /**Export del modulo CJS*/