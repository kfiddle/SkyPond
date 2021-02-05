package com.example.demo.controllers;

import com.example.demo.repositories.AddressRepository;
import com.example.demo.repositories.CustomerRepository;
import org.springframework.stereotype.Controller;

import javax.annotation.Resource;

@Controller
public class AddressController {

    @Resource
    AddressRepository addressRepository;

    @Resource
    CustomerRepository customerRepository;
}
