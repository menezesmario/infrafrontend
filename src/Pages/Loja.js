import { useState, useEffect } from 'react';
import Produto from '../Components/Produto'
import { Container, Row} from 'react-bootstrap'

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("https://infrabackend.herokuapp.com/")
        const dados = await resposta.json()
        setProdutos(dados)
        console.log(dados);
;    }, []);
    return (
        <Container>
            <div>
            <Row>
            {Produtos && produtos.map(item => <Produto imagem={item.image} nome={item.name} peso={item.weight} preco={item.price} regiao={item.region} /> )}
            </Row>
            </div>
        </Container>
    )
}

/*{Produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} peso={item.peso} preco={item.preco}  /> )}*/
