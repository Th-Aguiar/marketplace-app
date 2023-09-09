import mysql from "mysql";

export const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Root@1234",
    database: "db_marketplace"
});

