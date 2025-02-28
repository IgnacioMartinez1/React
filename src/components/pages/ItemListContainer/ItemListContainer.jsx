import { useState } from "react";

import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../../FireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      let porcionDeLaColeccion = query(
        productsCollection,
        where("category", "==", name)
      );
      consulta = porcionDeLaColeccion;
    }

    const getProducts = getDocs(consulta);
    getProducts
      .then((res) => {
        const array = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <>
      <h1>Catalogo General</h1>
      {items.length === 0 ? (
        <h1>cargando..</h1>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
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
      )}
    </>
  );
};

export default ItemListContainer;
