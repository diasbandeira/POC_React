import React from 'react';

function Form() {
  return (
    <div className="App">
         <form>
            <label>Nome</label><input type="text"/><br/><br/>
            <label>Senha</label><input type="text"/><br/><br/>
            <label>Email</label><input type="text"/><br/><br/>
        </form>
    </div>
  );
}

export default Form;