import { useState } from 'react';
import Icone from '../../assets/images/icone.png';

const BotSettings = () => {
  const [greeting, setGreeting] = useState('Olá, o que deseja?');

  const saveSettings = () => {
    alert(`Configuração salva: ${greeting}`);
    // Integre com a API do Grok: https://x.ai/api
  };

  return (
    <div className="page">
      <img src={Icone} alt="Logo" className="page-logo" />
      <h1>Configurações do Bot</h1>
      <div className="form">
        <label>Mensagem de Saudação</label>
        <input
          type="text"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          className="input"
        />
        <button onClick={saveSettings} className="btn">Salvar</button>
      </div>
    </div>
  );
};

export default BotSettings;