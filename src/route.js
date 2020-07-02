import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CepAddress from './componentes/CepAddress'
import Home from './componentes/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cep' exact component={CepAddress}/>
                
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;