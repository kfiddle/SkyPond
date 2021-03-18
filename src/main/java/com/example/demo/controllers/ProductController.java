package com.example.demo.controllers;


import com.example.demo.repositories.ProductRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
public class ProductController {

    @Resource
    ProductRepository productRepository;


    @RequestMapping("/products")
    public String displayAllProductsPage(Model model) {
        model.addAttribute("allProducts", productRepository.findAll());
        return "allProductsPage";
    }

    @RequestMapping("/products/{singleProduct}")
    public String displaySingleProductPage(Model model, @PathVariable String singleProduct) {
        model.addAttribute("singleProduct", productRepository.findByName(singleProduct));
        return "singleProductPage";
    }

}
