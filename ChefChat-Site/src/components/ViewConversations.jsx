import { useState } from 'react';
import Icone from '../../assets/images/icone.png';

const ViewConversations = () => {
  const [conversations, setConversations] = useState([
    { id: 1, user: 'João', date: '2025-09-12', text: 'Quero uma pizza' },
    { id: 2, user: 'Maria', date: '2025-09-12', text: 'Tem hambúrguer?' },
  ]);
  const [filterDate, setFilterDate] = useState('');

  const filteredConversations = filterDate
    ? conversations.filter(conv => conv.date === filterDate)
    : conversations;

  return (
    <div className="page">
      <img src={Icone} alt="Logo" className="page-logo" />
      <h1>Visualizar Conversas</h1>
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        className="input"
      />
      <table className="table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Data</th>
            <th>Conversa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredConversations.map(conv => (
            <tr key={conv.id}>
              <td>{conv.user}</td>
              <td>{conv.date}</td>
              <td>{conv.text}</td>
              <td>
                <button className="btn">Exportar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewConversations;