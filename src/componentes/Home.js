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
            <Link to='/cep'>Converte CEP em endereço</Link>
            {/* </header> */}
      </div>
    );
}
export default Home;