import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa";

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
const Grid = ({products}) => {

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
                                <FaTrash />
                            </Td>
                            <Td>
                                <FaEdit />
                            </Td>
                        </Tr>
                ))}
               
            </Tbody>
        </Table>
    );
}

export default Grid;