import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CepAddress from './componentes/CepAddress'
import Downshift from './componentes/AutomaticallyComplete'
import Home from './componentes/Home';
import Modal from './componentes/Modal';
import TableCustomerUser from './componentes/TableCustomerUser';
import ColorIcon from './componentes/ColorIcon';
import ModalSteps from './componentes/ModalSteps';
import Table from './componentes/Table';
import ServiceTime from './componentes/ServiceTime';
import NewItem from './componentes/ItemCreate';
import BlockMix from './componentes/BlockMix';
import TimelineC from './componentes/Timeline';
import CollapsibleTable from './componentes/CollapsibleTable';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cep' exact component={CepAddress}/>
                <Route path='/automaticallycomplete' exact component={Downshift}/>
                <Route path='/modal' exact component={Modal}/>
                <Route path='/tableCustomerUser' exact component={TableCustomerUser}/>
                <Route path='/colorIcon' exact component={ColorIcon}/>
                <Route path='/modalSteps' exact component={ModalSteps}/> 
                <Route path='/table' exact component={Table}/>   
                <Route path='/serviceTime' exact component={ServiceTime} />   
                <Route path='/itemCreate' exact component={NewItem} />    
                <Route path='/blockMix' exact component={BlockMix} />
                <Route path='/timeline' exact component={TimelineC} />
                <Route path='/collapsibleTable' exact component={CollapsibleTable}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;