import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ refreshProducts }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/products", {
            name,
            description,
            price,
            available,
        });
        refreshProducts(); // Llama a la función para refrescar la lista de productos
        setName("");
        setDescription("");
        setPrice("");
        setAvailable(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del Producto"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Precio"
                required
            />
            <label>
                Disponible
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
            </label>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductForm;
