import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../FireBaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const comprar = (evento) => {
    evento.preventDefault();

    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    const newOrder = addDoc(ordersCollection, order);
    newOrder.then((res) => {
      setTicketNumber(res.id);
      removeCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const capturarDatos = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="checkout-container">
      {ticketNumber ? (
        <div className="checkout-header">
          <h1>Tu comprobante es: {ticketNumber}</h1>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={comprar}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            name="nombre"
            onChange={capturarDatos}
            required
          />
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            placeholder="Teléfono"
            name="telefono"
            onChange={capturarDatos}
            required
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            name="email"
            onChange={capturarDatos}
            required
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
