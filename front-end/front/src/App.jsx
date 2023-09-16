//Components
import Form from "./components/Form";
import Grid from "./components/Grid";
import GlobalStyle from "./globals";

//Bibliotecas
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";


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

  //Requisitar no Back end
  const getProducts = async () => {
    
    try{
      
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
          <Form />
          <Grid products={products} />
        </Main>
    </>
  );
}

export default App
