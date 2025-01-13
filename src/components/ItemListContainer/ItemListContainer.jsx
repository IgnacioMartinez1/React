import { ProductCard } from "../common/productCard/ProductCard";
import "./ItemListContainer.css";
export const ItemListContainer = () => {
  return (
    <div className="menulist">
      <h2>Menu - Listado de Precios</h2>
      <ProductCard
        nombre="sanguchito de miga"
        precio="3000"
        descripcion="Gustos: Jamon y Queso, Aceituna, Huevo."
      />
      <ProductCard
        nombre="Cupcakes"
        precio="1600"
        descripcion="Gustos: Chocolate, Vainilla y Combinado. Todos pueden tener Dulce de Leche o no."
      />
    </div>
  );
};
