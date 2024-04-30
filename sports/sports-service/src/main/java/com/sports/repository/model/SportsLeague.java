package com.sports.repository.model;



import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

/**
 * to define an entity
 */
@Entity
@Table(name = "SportsLeague")
@IdClass(SportsId.class)
public class SportsLeague {

    /**
     * @Id annotation to make id variable as Primary key
     */

	@Id
    @Column(name = "sportsId")
    private String sportsId;

	@Id
	@Column(name= "username")
	private String username;
	   
    @Column(name= "sport")
    private String sport;
    
    @Column(name = "league")
    private String league;

    @Column(name= "image")
    private String image;
    
    @Column(name = "description", length = 3000)
    private String description;



    /**
     * default constructor
     */
    public SportsLeague() {
        super();
    }

    /**
     * parameterized constructor
     */


    public SportsLeague(String sportsId, String username, String sport, String league, String image,
    		String description) {
		this.sportsId = sportsId;
		this.username = username;
		this.sport = sport;
		this.league = league;
		this.image = image;
		this.description = description;
	}

	public String getSportsId() {
		return sportsId;
	}

	public void setSportsId(String sportsId) {
		this.sportsId = sportsId;
	}

	public String getSport() {
		return sport;
	}

	public void setSport(String sport) {
		this.sport = sport;
	}

	public String getLeague() {
		return league;
	}

	public void setLeague(String league) {
		this.league = league;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setUsername(String username) {
		this.username = username;
	}
    
    public String getUsername() {
        return username;
    }
	
}
