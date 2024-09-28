package com.example.inventorysystem.service;

import com.example.inventorysystem.model.Product; // Importar la clase Product
import com.example.inventorysystem.repository.ProductRepository; // Importar el repositorio
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Método para obtener todos los productos
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Método para obtener un producto por ID
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // Método para agregar un nuevo producto
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Método para actualizar un producto existente
    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setName(productDetails.getName()); // Suponiendo que Product tiene un método setName
        product.setPrice(productDetails.getPrice()); // Suponiendo que Product tiene un método setPrice
        return productRepository.save(product);
    }

    // Método para eliminar un producto
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
