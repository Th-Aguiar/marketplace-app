import styled from "styled-components";

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

const Grid = () => {

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
                <Tr>
                    <td>Chaves</td>
                    <td>$2.50</td>
                    <td>50</td>
                </Tr>
            </Tbody>
        </Table>
    );
}

export default Grid;