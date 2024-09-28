import React, { useState } from "react";
import ProductList from "../src/componentes/ProductList";
import ProductForm from "../src/componentes/ProductForm";

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshProducts = () => {
    setRefresh(!refresh); // Cambia el estado para refrescar la lista de productos
  };

  return (
      <div>
        <h1>Sistema de Gestión de Productos</h1>
        <ProductForm refreshProducts={refreshProducts} />
        <ProductList key={refresh} />
      </div>
  );
}

export default App;
