import { db } from "../db.js";

//Função para fazer consulta no banco de dados quando o site for carregado
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

//Função para adicionar valores no Banco de dados
export const addProducts = (req,res) => {
    //Query de busca SQL
    const q = "INSERT INTO products(`product_name`,`price`,`stock`,`phone`) VALUES(?)" ;

    //Valores da requisição
    const values = [ 
        req.body.product_name,
        req.body.price,
        req.body.stock,
        req.body.phone    
    ];

    console.log(values)

    db.query(q, [values], (error) => {
        //Verificar se aconteceu algum erro
        if(error) return res.json(error);

        //Retorna um status e uma mensagem
        return res.status(200).json("Adicionado com sucesso")
    })

}

//Função para atualizar os dados
export const updateProducts = (req, res) => {
    //Query de busca SQL
   const q = "UPDATE products SET `product_name` = ?, `price`= ?, `stock`=?, `phone`=? WHERE `ID_product`=?";

   //Valores da requisição
   const values = [
        req.body.product_name,
        req.body.price,
        req.body.stock,
        req.body.phone
   ];

   //req.params.VARIAVEL pega um nome dinamico na url passado pelo rota.
   db.query(q, [...values, req.params.ID_product], (error) => {
        //verificar se aconteceu um erro
        if(error) return res.json(error);

        //Retorna um status e uma mensagem
        return res.status(200).json("Atualizado com sucesso");
   })
}

//Função de Deletar dados
export const deleteProduct = (req,res) => {
    //Query de busca SQL
    const q = "DELETE FROM products WHERE `ID_product` = ?";

    db.query(q, [req.params.ID_product], (error) => {
        //verificar se aconteceu um erro 
        if(error) return res.json(error);

        //Retorna um status e uma mensagem
        return res.status(200).json("Deletado com sucesso")
    })
}