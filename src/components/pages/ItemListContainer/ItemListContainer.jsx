import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams(); // Asegúrate de que el parámetro se llame 'category'

  useEffect(() => {
    let productsFiltered = products.filter(
      (elemento) => elemento.category === category
    );

    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;
      if (isLogged) {
        resolve(!category ? products : productsFiltered);
      } else {
        reject({ statusCode: 400, message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  return (
    <div className="menulist">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            imageUrl={elemento.imageUrl}
            title={elemento.title}
            price={elemento.price}
            description={elemento.description}
            stock={elemento.stock}
            category={elemento.category}
            id={elemento.id}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
