import { db } from "../db.js";

export const getProducts = (_,res) => {
    //Esse q é de Query.
    const q = "SELECT * FROM db_marketplace.products";

    //consulta no MYSQL
    db.query(q, (err, data) => {

        if(err){
            return res.json(err);
        }

        //Envio uma resposta com o Status 200 - bem-sucediddo.
        //Converto os dados da resposta em formato JSON
        return res.status(200).json(data);
    });
};