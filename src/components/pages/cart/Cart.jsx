import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();
  return (
    <div className="cart-container">
      {cart.map((product) => {
        return (
          <div key={product.id} className="cart-item">
            <img src={product.imageUrl} alt={product.title} />
            <div className="cart-item-details">
              <h2>{product.title}</h2>
              <h2 className="price">{product.price}</h2>
              <h2 className="quantity">Cantidad: {product.quantity}</h2>
            </div>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      <div className="cart-total">
        <h2>El total a pagar es: ${total.toFixed(2)}</h2>
      </div>
      <div className="cart-actions">
        <button onClick={removeCart}>Vaciar carrito</button>
        {cart.length > 0 && <Link to="/checkout">Finalizar compra</Link>}
      </div>
    </div>
  );
};

export default Cart;
