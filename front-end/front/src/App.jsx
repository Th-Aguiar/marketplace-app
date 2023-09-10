import Form from "./components/Form";
import GlobalStyle from "./globals";
import styled from "styled-components";

const Container = styled.main`
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

        <Container>
          <h1>Cadastro de usuários</h1>
          <Form />
        </Container>
      
    </>
  );
}

export default App
