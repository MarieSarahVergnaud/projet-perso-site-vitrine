import dotenv from "dotenv";
import mysql from "mysql2";
import fs from "fs";

dotenv.config()

const database = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
})


// SCOPE LA FONCTION GET CONNECTION

database.getConnection((error, connection) => {
    if (error) {
        console.error("🥺Impossble to REACH the database", error);
        return;
    }  
console.log("☀️Success, the DATABASE has been reached"); 

const sqlFile = fs.readFileSync("./script.sql", "utf-8");


connection.query(sqlFile, (error) => { //  migrer les données ( migrate.js)
    if (error) {
        console.error("😖Impossble to ADD to the database", error);
        return;
    }  
    console.log("😎succes, the data has been added to the database");
    
    connection.release();
});

});
