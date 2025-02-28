import { useContext, useState } from "react";
import "./counter.css";
import { CartContext } from "../../../context/CartContext";

export const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...item, quantity: contador };
    addToCart(objetoParaElCarrito);
  };

  return (
    <div className="counter">
      <h2>Contador: {contador}</h2>
      <div className="counter-buttons">
        <button onClick={restar}>Restar</button>
        <button onClick={sumar}>Sumar</button>
      </div>
      <button className="add-to-cart" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
