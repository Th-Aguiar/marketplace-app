import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aguiar@123",
    database: "db_marketplace"
});

