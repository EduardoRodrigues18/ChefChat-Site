import { useState } from 'react';
import Icone from '../../assets/images/icone.png';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'João', status: 'Ativo' },
    { id: 2, name: 'Maria', status: 'Ativo' },
  ]);

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: user.status === 'Ativo' ? 'Bloqueado' : 'Ativo' } : user));
  };

  return (
    <div className="page">
      <img src={Icone} alt="Logo" className="page-logo" />
      <h1>Gerenciar Usuários</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => toggleUserStatus(user.id)} className="btn btn-red">
                  {user.status === 'Ativo' ? 'Bloquear' : 'Ativar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;