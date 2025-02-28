import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Counter } from "../../common/Counter/Counter";
import { db } from "../../../FireBaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);
    getProduct
      .then((res) => setItem({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="item-detail">
      <img src={item.imageUrl} alt={item.title} className="imagen" />
      <h2>{item.title}</h2>
      <h2 className="price">{item.price}</h2>
      <p>{item.description}</p>
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;
