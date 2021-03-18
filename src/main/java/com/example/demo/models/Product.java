package com.example.demo.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String image;
    private float price;

    public Product() {
    }

    public Product(String name, String image, float price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public float getPrice() {
        return price;
    }
}
