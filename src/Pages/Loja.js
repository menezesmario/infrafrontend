import { useState, useEffect } from 'react';

import Produto from '../Components/Produto'
import { Container, Row} from 'react-bootstrap'




export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/coffeeshop/src/api/loja.php")
        const dados = await resposta.json()
        setProdutos(dados)
        console.log(dados);
;    }, []);

    return (
        <Container>
            <Row>
            {Produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} peso={item.peso} preco={item.preco} regiao={item.regiao} /> )}
                
             </Row>
        </Container>
    )
}

/*{Produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} peso={item.peso} preco={item.preco}  /> )}*/
