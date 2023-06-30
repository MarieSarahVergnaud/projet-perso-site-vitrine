import mysql from "mysql2/promise";

const database = mysql.createPool({ //    tenter de se connecter à la base (datasource.js)
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
      multipleStatements: true,
})

database.getConnection((error) => {
    if (error) {
        console.error("😖Impossble to REACH the database", error);
        return;
    }   
    console.log("👍Success, the DATABASE has been reached");
})


export default database;