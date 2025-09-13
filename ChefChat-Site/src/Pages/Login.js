import { useState } from 'react';
import { Image } from 'react-native';
import BotSettings from '../components/BotSettings';
import Dashboard from '../components/Dashboard';
import ManageOrders from '../components/ManageOrders';
import ManageProducts from '../components/ManageProducts';
import ManageUsers from '../components/ManageUsers';
import ViewConversations from '../components/ViewConversations';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Bem-vindo, ${email}!`);
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <div className="login-container">
            <Image source={require('../../assets/images/icone.png')} style={{ width: 300, height: 300 }} />
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
              <button type="submit" className="btn">Entrar</button>
            </form>
            <div className="nav-buttons">
              <p>Teste as telas:</p>
              <button onClick={() => setCurrentPage('dashboard')} className="btn">Dashboard</button>
              <button onClick={() => setCurrentPage('products')} className="btn">Produtos</button>
              <button onClick={() => setCurrentPage('orders')} className="btn">Pedidos</button>
              <button onClick={() => setCurrentPage('conversations')} className="btn">Conversas</button>
              <button onClick={() => setCurrentPage('users')} className="btn">Usuários</button>
              <button onClick={() => setCurrentPage('settings')} className="btn">Configurações</button>
            </div>
          </div>
        );
      case 'dashboard': return <Dashboard />;
      case 'products': return <ManageProducts />;
      case 'orders': return <ManageOrders />;
      case 'conversations': return <ViewConversations />;
      case 'users': return <ManageUsers />;
      case 'settings': return <BotSettings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
};

export default Login;