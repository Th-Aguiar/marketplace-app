//Components
import Form from "./components/Form";
import Grid from "./components/Grid";
import GlobalStyle from "./globals";

//Bibliotecas
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
//Notificação personalizada
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

//Styled Components
const Main = styled.main`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10;
  font-family: 'Playfair Display', serif;
`
function App() {
  
  const [products, setProducts] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  //Requisitar dados no Back end
  const getProducts = async () => {
    
    try{
      //Axios faz uma requisição para o Backend
      const res = await axios.get("http://localhost:3000/"); 
      setProducts(res.data);

    }catch(error){
      console.log(error);
    }

  };

  //Executar quando o front for chamado.
  useEffect(() => {
    getProducts();
    console.log(products)
  }, [setProducts]);

  return (
    <>
      <GlobalStyle />

        <Main>
          <h1>Cadastro de usuários</h1>
          <Form onEdit={onEdit} setOnEdit={setOnEdit} getProducts={getProducts}/>
          <Grid products={products} setOnEdit={setOnEdit}/>
        </Main>
        
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App
