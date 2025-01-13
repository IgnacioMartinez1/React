export const ProductCard = (props) => {
  return (
    <div className="Productos">
      <h2>{props.nombre}</h2>
      <h2>{props.precio}</h2>
      <h2>{props.descripcion}</h2>
    </div>
  );
};
