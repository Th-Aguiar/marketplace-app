import styled from "styled-components";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

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

const Form = ({ onEdit, getProducts, setOnEdit }) => {

    const ref = useRef();

    //atribui os valores no input após a mudança no OnEdit para ser editado
    useEffect(() =>{
        if(onEdit){
            const product = ref.current;
            console.log(product)

            product.product_name.value = onEdit.product_name;
            product.price.value = onEdit.price;
            product.stock.value = onEdit.stock;
            product.phone.value = onEdit.phone;
        }
    },[onEdit]);

    //lidar com envio de dados para a api
    const handleSubmit = async (ev) =>{
        //previnir o carregamento padrao apos o envio
        ev.preventDefault();

        //Trabalhar com o elemento DOM atual
        const product = ref.current;

        //Verificação de dados para prevenir valores nulos.
        if(!product.product_name.value || !product.price.value || !product.stock.value || !product.phone.value) {
            return toast.warn("Preencha todos os campos por favor! Não poder haver espaço em branco");
        }

        //enviar a edição
        if(onEdit){
            //Usamos o axios para integração com a api
            await axios.put("http://localhost:3000/" + onEdit.ID_product, {
                product_name: product.product_name.value,
                price: product.price.value,
                stock: product.stock.value,
                phone: product.phone.value
            }).then( ({data}) => toast.success(data) ).catch( ({data}) => toast.error(data) );
        }else{
            //Enviar uma requisição de post com o axios para a api
            await axios.post("http://localhost:3000", {
                product_name: product.product_name.value,
                price: product.price.value,
                stock: product.stock.value,
                phone: product.phone.value
            }).then( ({data}) => toast.success(data) ).catch( ({data}) => toast.error(data));
        }

        //Limpar os inputs das edições
        product.product_name.value = ""; 
        product.price.value = "";
        product.stock.value = "";
        product.phone.value = "";

        //Colocar a edição null novamente
        setOnEdit(null);

        //Carregar novamente os dados em tela
        getProducts();
        
    }

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="product_name" type="text"/>
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