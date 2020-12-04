import { Switch, Route } from 'react-router-dom';

import Loja from './Pages/Loja'
import Contato from './Pages/Contato'
import Pedidos from './Pages/Pedidos'


function Rotas() {
    return (
        <Switch>
            <Route exact path="/loja" component={Loja} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/pedidos" component={Pedidos} />

        </Switch>
    )
}

export default Rotas;

