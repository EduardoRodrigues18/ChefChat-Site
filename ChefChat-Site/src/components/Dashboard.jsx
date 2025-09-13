import Icone from '../../assets/images/icone.png';

const Dashboard = () => {
  const metrics = {
    conversations: 42,
    ordersToday: 15,
    topProducts: ['Pizza', 'Hambúrguer'],
  };

  return (
    <div className="page">
      <img src={Icone} alt="Logo" className="page-logo" />
      <h1>Dashboard Principal</h1>
      <div className="metrics-grid">
        <div className="metric-card">
          <h2>Conversas Ativas</h2>
          <p className="metric-value">{metrics.conversations}</p>
        </div>
        <div className="metric-card">
          <h2>Pedidos do Dia</h2>
          <p className="metric-value">{metrics.ordersToday}</p>
        </div>
        <div className="metric-card">
          <h2>Produtos Mais Consultados</h2>
          <p>{metrics.topProducts.join(', ')}</p>
        </div>
      </div>
      <div className="chart-card">
        <h2>Gráfico de Pedidos (Semana)</h2>
        <div className="chart">
          <div className="bar" style={{ height: '20%' }}></div>
          <div className="bar" style={{ height: '50%' }}></div>
          <div className="bar" style={{ height: '80%' }}></div>
          <div className="bar" style={{ height: '60%' }}></div>
          <div className="bar" style={{ height: '30%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;