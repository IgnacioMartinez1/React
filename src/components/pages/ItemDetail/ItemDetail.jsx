import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    setItem(productSelected);
  }, [id]);

  return (
    <div className="Item-detail">
      <img src={item.imageUrl} alt="" className="imagen" />
      <h2>{item.title}</h2>
      <h2>{item.price}</h2>
      <h2>{item.description}</h2>
    </div>
  );
};

export default ItemDetail;
