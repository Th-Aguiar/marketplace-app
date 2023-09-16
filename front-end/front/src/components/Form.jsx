import styled from "styled-components";
import { useRef } from "react";

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
    height: 25px;
`;

const Button = styled.button`
    width: 120px;
    height: 37px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #2c73d2;
    border: none;
    color: #fff;
    font-weight: bold;
`;

const Form = ({ onEdit }) => {

    const ref = useRef();

    return(
        <FormContainer method="POST">
            <InputArea>
                <Label>Nome</Label>
                <Input name="name" type="text"/>
            </InputArea>
            <InputArea>
                <Label>Preço</Label>
                <Input name="price" type="text"/>
            </InputArea>
            <InputArea>
                <Label>Estoque</Label>
                <Input name="stock" type="text"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="phone" type="text"/>
            </InputArea>
            <Button type="submit" className="btn btn-primary">Salvar</Button>
        </FormContainer>
    );
};

export default Form;