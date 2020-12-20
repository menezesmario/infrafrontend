import Menu from './Components/Menu'
import Rotas from './rotas';
import Footer from './Components/Footer'
//import './App.scss';

import './App.css'

import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
        <Container fluid>
          <Rotas />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>


    </BrowserRouter>
  );
}



export default App;
