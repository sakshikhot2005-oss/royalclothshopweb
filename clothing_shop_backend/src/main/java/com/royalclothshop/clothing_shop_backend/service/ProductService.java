package com.royalclothshop.clothing_shop_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.royalclothshop.clothing_shop_backend.entity.Product;
import com.royalclothshop.clothing_shop_backend.exception.ResourceNotFoundException;
import com.royalclothshop.clothing_shop_backend.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findByActiveTrue();
    }

    public Product getProductById(Long id) {

        return productRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Product not found with id: " + id
                        )
                );
    }

    public Product createProduct(Product product) {

        product.setActive(true);

        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product product) {

        Product existingProduct = getProductById(id);

        existingProduct.setName(product.getName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setImageUrl(product.getImageUrl());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setStock(product.getStock());

        return productRepository.save(existingProduct);
    }

    public void deleteProduct(Long id) {

        Product product = getProductById(id);

        product.setActive(false);

        productRepository.save(product);
    }

    public List<Product> getProductsByCategory(String category) {

        return productRepository.findByCategoryIgnoreCase(category);
    }
}