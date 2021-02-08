package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Address {

    @Id
    @GeneratedValue
    private Long id;

    private String number;
    private String streetName;
    private String city;
    private String state;
    private String zipcode;
    private String buildingNumber;

    public Address(){


    }

    public Long getId() {
        return id;
    }

    public String getNumber() {
        return number;
    }

    public String getStreetName() {
        return streetName;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public String getBuildingNumber() {
        return buildingNumber;
    }
}
