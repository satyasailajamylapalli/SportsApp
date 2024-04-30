package com.sports.repository.model;

import java.io.Serializable;
import java.util.Objects;

import org.springframework.stereotype.Component;

@Component
public class SportsId implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String sportsId;
	private String username;
	
	SportsId(){
		//default constructor
	}

	public SportsId(String sportsId, String username) {
		this.sportsId = sportsId;
		this.username = username;
	}

	@Override
	public int hashCode() {
		return Objects.hash(sportsId, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SportsId other = (SportsId) obj;
		return Objects.equals(sportsId, other.sportsId) && Objects.equals(username, other.username);
	}

}
