import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import Cart from "./components/pages/cart/Cart.jsx";
import { Footer } from "./components/layout/footer/Footer.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/pages/ItemDetail/ItemDetail.jsx";
import Checkout from "./components/pages/checkout/Checkout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacto" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
