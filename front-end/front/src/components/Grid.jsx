import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa";
import axios from "axios";
import {toast} from "react-toastify"


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding:20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 10px auto;
    max-width: 800px;
    word-break: break-all;
`;

const Thead = styled.thead`
`;

const Tbody = styled.tbody`
`;
const Tr = styled.tr`
`;

const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

const Td = styled.td`
    padding-top: 15px;
`;

//Grid recebe como parametro um conjunto de array contendo os produtos do Banco de dados
const Grid = ({products, setProducts, setOnEdit}) => {

    //Lidar com exclusão
    const handleDelete = async ( id ) => {
        await axios.delete("http://localhost:3000/" + id).then( ({data}) => {
            console.log(data)

            //Filtra o Elemento a ser deletado
            const newArray = products.filter((product) => product.ID_product !== id )

            //Retorna o novo array filtrado das informações para o APP renderizar
            setProducts(newArray);

            //Exibir uma mensagem de sucesso
            toast.success(data)

        }).catch((data) => toast.error(data));

    }

    //Lidar com a edição
    const handleEdit = (item) =>{
        setOnEdit(item);
    }
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Preço</Th>
                    <Th>Estoque</Th>
                </Tr>
            </Thead>
            <Tbody>
               
               {products.map( (obj) => (
                        <Tr key={obj.ID_product}>
                            <Td width="30%">{obj.product_name}</Td>
                            <Td width="30%">{obj.price}</Td>
                            <Td width="20%">{obj.stock}</Td>
                            <Td>
                                <FaTrash onClick={ () => handleDelete(obj.ID_product)} />
                            </Td>
                            <Td>
                                <FaEdit onClick={ () => handleEdit(obj)} />
                            </Td>
                        </Tr>
                ))}
               
            </Tbody>
        </Table>
    );
}

export default Grid;