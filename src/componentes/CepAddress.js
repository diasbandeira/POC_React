import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const CepAddres = () =>{
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const[street, setStreet] = useState();
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');


    function handleCep(e){
        const inputValue = e.target.value;
        //if (inputValue.length === 10){
            setCep(inputValue);
            //console.log(cep);
        //}
        //return; 
        
        

    }
    function buscarCep(){
        console.log(cep);
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            const ceps = res.data;
            setAddress(ceps);
        })
    }
    function handleInput(e){
        if(e.target.id === 'street'){
            setStreet(e.target.value)
        }else if(e.target.id === 'bairro'){
            setNeighborhood(e.target.value)
        }else if(e.target.id === 'cidade'){
            setCity(e.target.value)
        }else if(e.target.id === 'estado'){
            setUf(e.target.value)
        }else{

        }
        //console.log(e.target.id);


    }
    useEffect(()=> {
        setCity(address.localidade);
        setStreet(address.logradouro);
        setNeighborhood(address.bairro);
        setUf(address.uf); 

     },[address])
    return (
        <>
            <div> <Link to='/'>Home</Link></div>
            <div>
            <h5>Pesquisa Por CEP e retorna endereço: {street}</h5>
                <form>
                    <label>Cep: </label> <input type='text' id='cep' onChange={handleCep}/><br/> 
                    <p><button type='button' onClick={buscarCep}> Buscar Endereço</button></p>
                    <label>Endereço: </label> 
                        <input 
                            type='text' 
                            id='street'
                            name='street'
                            value={street}
                            onChange={(e) => {handleInput(e)}} 
                        /><br/>
                     <label>Numero: </label> 
                        <input type='text' id='numero'/><br/>
                    <label>Bairro: </label> 
                        <input 
                        type='text' 
                        id='bairro' 
                        value={neighborhood} 
                        onChange={(e) => {handleInput(e)}}
                        />
                    <br/>
                    <label>Cidade: </label> 
                        <input 
                            type='text' 
                            id='cidade' 
                            value={city} 
                            onChange={(e) => {handleInput(e)}}
                        />
                    <br/>
                    <label>Estado: </label> 
                        <input 
                            type='text' 
                            id='estado' 
                            value={uf} 
                            onChange={(e) => {handleInput(e)}}
                        />
                    <br/> 
                    <label>Pais: </label> <input type='text' id='pais'/><br/>
                </form>
            </div>
        </>
    );
}
export default CepAddres;