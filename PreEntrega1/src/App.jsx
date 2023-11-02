import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  const handleBuyClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a AluminioAAA'}/>
      <p>Carrito de compra: {count}</p>
      <div className="card-container"></div>
      <div className="card">
        <img src="../img/ventana1.jpg" alt="Serie 20" />
        <h2>Ventana Serie 20</h2>
        <p>Precio: $8.000</p>
        <button onClick={handleBuyClick}>Comprar</button>
      </div>
      <div className="card">
        <img src="../img/ventana2.jpg" alt="Serie 21" />
        <h2>Ventana Serie 21</h2>
        <p>Precio: $15.000</p>
        <button onClick={handleBuyClick}>Comprar</button>
      </div>
      <div className="card">
        <img src="../img/ventana3.jpg" alt="Serie Proa" />
        <h2>Ventana Serie Proa</h2>
        <p>Precio: $20.000</p>
        <button onClick={handleBuyClick}>Comprar</button>
      </div>
    </div>
  );
}

export default App;