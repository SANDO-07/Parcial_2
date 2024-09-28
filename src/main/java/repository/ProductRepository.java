package com.example.inventorysystem.repository;

import com.example.inventorysystem.model.Product; // Asegúrate de que este modelo exista
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Aquí puedes definir métodos adicionales de consulta si es necesario
}
