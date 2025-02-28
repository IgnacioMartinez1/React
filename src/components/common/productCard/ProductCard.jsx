import { Link } from "react-router";
import { Button } from "@mui/material";
import "./ProductCard.css";

export const ProductCard = ({
  imageUrl,
  title,
  price,
  description,
  id,
  stock,
}) => {
  return (
    <div
      className="Productos"
      style={{ border: "2px solid black", width: "300px" }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="imagen"
        style={{ width: "100px" }}
      />
      <h2 className="pr">{title}</h2>
      <h2 className="pr">${price}</h2>
      <p className="pr">{description}</p>
      <h2 className="pr">{stock}</h2>
      <Link className="pr" to={`/product/${id}`}>
        <Button variant="outlined">Ver detalle</Button>
      </Link>
      <button className="bg-red mt-2 font-2rem"></button>
    </div>
  );
};
