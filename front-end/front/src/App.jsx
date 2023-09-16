import Form from "./components/Form";
import Grid from "./components/Grid";
import GlobalStyle from "./globals";
import styled from "styled-components";

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
  
  return (
    <>
      <GlobalStyle />

        <Main>
          <h1>Cadastro de usuários</h1>
          <Form />
          <Grid/>
        </Main>
    </>
  );
}

export default App
