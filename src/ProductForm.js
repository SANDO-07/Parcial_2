import React, { useState } from "react";

const ProductForm = ({ refreshProducts }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8081/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    available,
                }),
            });

            if (!response.ok) {
                throw new Error("Error al agregar el producto");
            }

            await response.json(); // Si la API devuelve algo, puedes procesarlo aquí
            refreshProducts(); // Llama a la función para refrescar la lista de productos
            setName("");
            setDescription("");
            setPrice("");
            setAvailable(false);
        } catch (error) {
            console.error("Error:", error);
        }
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
