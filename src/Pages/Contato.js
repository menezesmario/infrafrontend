import {useState} from 'react';
import { Form, Button, Row} from 'react-bootstrap';

export default function Contato() {
    const [ form, setForm ] = useState({
        nome: "",
        email: "",
        mensagem: "",
        })

    const controleMudanca = (evento) => {
            console.log(evento.target.value)
            setForm ({
                ...form,
                [evento.target.id]: evento.target.value
            })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault()
        const mensagem = parseFloat(Form.mensagem);
        document.getElementById(mensagem).value = `${mensagem}`;
        
        const json = JSON.stringify(form);

        const opcoes = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', "Access-Control-Allow-Origin": "*" }, 
            body:json
        }

        const resposta = await fetch("http://localhost/recode_pro/php/cadastro_mensagem.php", opcoes);
        const dados = await resposta.json()
        console.log(dados)
    
    }

    return (
        <Row margin-top="200px">
            <div className="col-lg-6 col-md-6 mx-auto" > 
                <Form /*onSubmit={controleEnvio}*/>
                    <h4>Fale Conosco</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1" id="mensagem">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </Row>
    )
}