import { useState } from 'react';
import Icone from '../assets/images/Icone.png';
import BotSettings from './components/BotSettings';
import Dashboard from './components/Dashboard';
import ManageOrders from './components/ManageOrders';
import ManageProducts from './components/ManageProducts';
import ManageUsers from './components/ManageUsers';
import ViewConversations from './components/ViewConversations';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
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
      <nav className="navbar">
        <img src={Icone} alt="Logo" className="navbar-logo" />
        <div className="navbar-links">
          <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
          <button onClick={() => setCurrentPage('products')}>Produtos</button>
          <button onClick={() => setCurrentPage('orders')}>Pedidos</button>
          <button onClick={() => setCurrentPage('conversations')}>Conversas</button>
          <button onClick={() => setCurrentPage('users')}>Usuários</button>
          <button onClick={() => setCurrentPage('settings')}>Configurações</button>
        </div>
      </nav>
      <div className="container">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;