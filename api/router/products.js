//Importações
import { Router }  from "express";
import { getProducts, addProducts, deleteProduct, updateProducts } from "../controllers/products.js";

const router = Router();

//Solicitar uma consulta no banco de dados
router.get("/", getProducts);

//Fazer um adicionamento de dados no DB.
router.post("/", addProducts);
//Deletar um dado - :ID_product = variavel dinamica
router.delete("/:ID_product", deleteProduct);
//Atualizar um dado - :ID_product = variavel dinamica
router.put("/:ID_product", updateProducts);

export default router;