package com.scarecrow88.restapi.crud.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table (name = "PEOPLE")
public class People {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "PEOID")
    private long id;
    @Column (name = "PEONAME")
    private String name;
    @Column (name = "PEOCITY")
    private String city;
    @Column (name = "PEOPHONE")
    private String celNumber;
    public long getId () {
        return id;
    }
    public String getName () {
        return name;
    }
    public String getCity () {
        return city;
    }
    public String getCelNumber () {
        return celNumber;
    }
    public void setId (long id) {
        this.id = id;
    }
    public void setName (String name) {
        this.name = name;
    }
    public void setCity (String city) {
        this.city = city;
    }
    public void setCelNumber (String celNumber) {
        this.celNumber = celNumber;
    }
}