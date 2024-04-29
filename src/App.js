import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Formulario() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [email, setEmail] = useState('');
  const [dataN, setDatan] = useState('');

  const handleLogin = () => {
    alert(`Nome: ${username}\nEmail: ${email}\nData de Nascimento: ${dataN}\nSenha: ${password}`);
  };

  const limparDados = () => {
    setUsername('');
    setPassword('');
    setPassword1('');
    setEmail('');
    setDatan('');
  };

  return (
    <div className='Cad'>
      <form onSubmit={handleLogin}>
      
        <h1>Cadastrar</h1>
        <label>
          <p>Digite nome de usuário:</p>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu nome de usuário"/>
        </label>
        <label>
          <p>Digite email do usuário:</p>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email de usuário"/>
        </label>
        <label>
          <p>Digite a data de nascimento de usuário:</p>
          <input type="date" value={dataN} onChange={e => setDatan(e.target.value)} placeholder="Digite sua data de nascimento"/>
        </label>
        <label>
          <p>Digite a senha de usuário:</p>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha"/>
        </label>
        <label>
          <p>Confirme a senha de usuário:</p>
          <input type="password" value={password1} onChange={e => setPassword1(e.target.value)} placeholder="Confirme sua senha"/>
        </label>
        <input type="submit" value="Entrar" />
        <input type="button" value="Apagar" onClick={limparDados} />
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formulario />
      </header>
    </div>
  );
}

export default App;
