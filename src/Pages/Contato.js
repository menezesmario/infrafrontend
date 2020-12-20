import {useState} from 'react';
import { Form } from 'react-bootstrap';

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

        const resposta = await fetch("http://localhost/projeto_infra/backend/send_message.php", opcoes);
        const dados = await resposta.json()
        console.log(dados)
    
    }

    function sendMessage(event) {
        event.preventDefault();
        // console.log(event.target)

        let formData = new FormData(event.target);

        const url = "http://localhost/projeto_infra/backend/send_message.php";

        fetch(url, {
            method: "POST",
            body: formData
        })


    }

    return (
       <div className="container py-5">
        <div className="card w-75 mx-auto border-0">
            <form onSubmit={sendMessage}>
                <input className="form-control mt-2" type="text" name="name" placeholder="Nome" />
                <input className="form-control mt-2" type="text" name="message" placeholder="Message" />
                <input className="form-control mt-2" type="text-area" rows="4" name="email" placeholder="E-mail" />
                <button className="btn btn-info w-100 mt-2">Enviar</button>
            </form>

        </div>
        </div>


        /*<Row>
            <div className="form col-lg-6 col-md-6 mx-auto"> 
                <Form action="http://localhost/projeto_infra/backend/send_message.php"  /*onSubmit={controleEnvio}>
                    <h4 style={{ margin: '20' }}>Fale Conosco</h4>
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
        </Row>*/
    )
}