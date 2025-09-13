import { useState } from 'react';
import Icone from '../../assets/images/icone.png';

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Pizza', price: 30, category: 'Comida' },
    { id: 2, name: 'Hambúrguer', price: 20, category: 'Comida' },
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: '', price: '', category: '' });
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="page">
      <img src={Icone} alt="Logo" className="page-logo" />
      <h1>Gerenciar Produtos</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Nome"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="input"
        />
        <input
          type="number"
          placeholder="Preço"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="input"
        />
        <input
          type="text"
          placeholder="Categoria"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          className="input"
        />
        <input
  type="file"
  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
  className="input"
/>
        <button onClick={addProduct} className="btn">Adicionar</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>R${product.price}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-red">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;