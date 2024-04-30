package com.sports.repository.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * to define an entity
 */
@Entity
@Table(name = "UserDetails")
public class UserDetails {

    /**
     * @Id annotation to make id variable as Primary key
     */
    @Id
    @Column(name = "username", length = 50)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name= "name")
    private String name;


    /**
     * default constructor
     */
    public UserDetails() {
        super();
    }

    /**
     * parameterized constructor
     */
    public UserDetails(String username, String password,String name) {
        super();
        this.username = username;
        this.password = password;
        this.name = name;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	@Override
	public String toString() {
		return "UserDetails [username=" + username + ", password=" + password + ", name=" + name + "]";
	}
    
}
