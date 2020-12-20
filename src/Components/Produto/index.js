import './Produto.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default function Produto(props) {
    function show_info(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";
    }

    function hide_info(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "hidden";
    }

    return (

        <Card className="dFlex" style={{ width: '18rem', margin: '30px' }}>
        <Card.Img variant="top" src={require(`./img/${props.imagem}`).default} />
        <Card.Body>
        <Card.Title><p className="nome-prod">
                    {props.nome}
                </p></Card.Title>
        <Card.Text>
                <p>
                    Região: {props.regiao}
                </p>
        </Card.Text>
        <Card.Text>
        <p className="precofinal-prod">
                    R$ {props.preco}
                </p>
        </Card.Text>
        <Card.Text>
        <p className="precofinal-prod">
                    {props.peso}
                </p>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        </Card.Body>
        </Card>


    )
}




/*
<div class="shop-column" id="<?php echo $rows["categoria"];?>" >
<center>
<h5><?php echo $rows["nome_produto"]; ?></h5>
<img src="./<?php echo $rows["imagem"]; ?>" alt="" /></a>
<div class="prod-resume"></div>
250g: R$ <?php echo $rows["preco"]; ?>
<br>     
<a href="#"><button class="btn btn-warning" style= cursor:pointer;>Comprar</button></a> 
</center>
</div>
*/