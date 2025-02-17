import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const comprar = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
  };
  const capturarDatos = (evento) => {
    const { value, name } = evento.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={comprar}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={capturarDatos}
        />
        <button>comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
