import { useState } from 'react';
import Icone from '../../assets/images/icone.png';

const ManageOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, user: 'João', status: 'Pendente', items: ['Pizza'] },
    { id: 2, user: 'Maria', status: 'Entregue', items: ['Hambúrguer'] },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  return (
    <div className="page">
      <img src={Icone} alt="Logo" className="page-logo" />
      <h1>Gerenciar Pedidos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Itens</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.user}</td>
              <td>{order.items.join(', ')}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => updateStatus(order.id, 'Entregue')} className="btn">Confirmar Entrega</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;