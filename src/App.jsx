import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Footer } from "./components/layout/footer/Footer.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
