import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/products");
                if (!response.ok) {
                    throw new Error("Error en la red");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price} - {product.available ? "Disponible" : "No disponible"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
