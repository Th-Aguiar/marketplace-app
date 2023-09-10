import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap:10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
    width: 120px;
    padding: 5px 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    heigth: 40px;
`;

const Form = () => {
    return(
        <FormContainer>
            <InputArea>
                <Label>Nome</Label>
                <Input name="" />
            </InputArea>
        </FormContainer>
    );
};

export default Form;