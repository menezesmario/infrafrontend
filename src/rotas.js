import { Switch, Route } from 'react-router-dom';

import Loja from './Pages/Loja'
import Contato from './Pages/Contato'


function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Loja} />
            <Route exact path="/loja" component={Loja} />
            <Route exact path="/contato" component={Contato} />
           

        </Switch>
    )
}

export default Rotas;

