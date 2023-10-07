import express from "express";
import cors from "cors";
import productsRouter from "./router/products.js";

const port = 3000;
const app = express();

//Configurações do app
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


//Req
app.use("/", productsRouter);

app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
})