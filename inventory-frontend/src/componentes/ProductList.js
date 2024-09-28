import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("http://localhost:8080/api/products");
            setProducts(response.data);
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
