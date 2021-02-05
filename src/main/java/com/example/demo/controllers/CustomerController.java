package com.example.demo.controllers;


import com.example.demo.models.Customer;
import com.example.demo.repositories.AddressRepository;
import com.example.demo.repositories.CustomerRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.persistence.ManyToOne;

@Controller
public class CustomerController {

    @Resource
    CustomerRepository customerRepository;

    @Resource
    AddressRepository addressRepository;

    @RequestMapping("/all-customers")
    public String displayAllCustomers(Model model) {
        model.addAttribute("allCustomers", customerRepository.findAll());
        return "allCustomersPage";
    }

    @PostMapping("/add-customer")
    public void addNewCustomerToDatabase(@RequestBody Customer customer) {
        
    }


}
