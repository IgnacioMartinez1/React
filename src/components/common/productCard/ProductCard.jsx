import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./ProductCard.css";

export const ProductCard = ({ imageUrl, title, price, description, id }) => {
  return (
    <div className="Productos">
      <img src={imageUrl} alt={title} className="imagen" />
      <h2 className="pr">{title}</h2>
      <h2 className="pr">{price}</h2>
      <p className="pr"> {description}</p>
      <Link className="pr" to={`/product/${id}`}>
        <Button variant="outlined">Ver detalle</Button>
      </Link>
    </div>
  );
};
