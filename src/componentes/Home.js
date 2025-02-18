import React from 'react';

import { Link, } from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <h3>Repositorio de POCS criado utilizando React</h3>
            {/* <header className="App-header"> */}
            {/* <Steps activeStep={activeStep} setActiveStep={setActiveStep} skipped={skipped} setSkipped={setSkipped} />
            <Form/>
            <Buttons  activeStep={activeStep} setActiveStep={setActiveStep} skipped={skipped} setSkipped={setSkipped}/>
            <ToolbarFixo /> */}
            <ol>
                <li><Link to='/cep'>Converte CEP em endereço</Link></li>
                <li><Link to='/automaticallycomplete'>Input com autocomplete</Link></li>
                <li><Link to='/modal'>Exibir Modal</Link></li>
                <li><Link to='/tableCustomerUser'>Show Table</Link></li>
                <li><Link to='/colorIcon'>ColorIcon</Link></li>
                <li><Link to='/modalSteps'>ModalSteps</Link></li>
                <li><Link to='/table'>Table</Link></li>
                <li><Link to='/serviceTime'>ServiceTime</Link></li>
                <li><Link to='/itemCreate'>ItemCreate</Link></li>
                <li><Link to='/blockMix'>Bloqueio de mix</Link></li>
                <li><Link to='/timeline'>Timeline</Link></li>
                <li><Link to='/collapsibleTable'>Tabela Minimizavel</Link></li>
            </ol>
             <br/>
            <br/>
            <br/>
            
            {/* </header> */}
      </div>
    );
}
export default Home;