import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';



function BaseMenu(props) {
    const { location } = props
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
            <Navbar.Brand>
            <Nav.Link style={{ margin: '10', color: 'white' }} as={Link} href="/loja" to="/loja">CoffeeShop</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
              
                    <Nav.Item>
                        <Nav.Link as={Link} href="/loja" to="/loja">Loja</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contato" to="/contato">Contato</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

            
        </Navbar>
    )
}


const Menu = withRouter(BaseMenu);

export default Menu


//reativar 
/*
<Nav.Item>
    <Nav.Link as={Link} href="/home" to="/home">Página Inicial</Nav.Link>
</Nav.Item>

<Nav.Item>
    <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
</Nav.Item>
*/