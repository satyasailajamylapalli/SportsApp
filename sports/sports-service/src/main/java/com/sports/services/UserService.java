package com.sports.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sports.repository.UserRepository;
import com.sports.repository.model.UserDetails;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public UserDetails addUser(UserDetails userDetails) {
		return repository.save(userDetails);
	}
	
	public UserDetails checkUser(String username, String password) {
		Optional<UserDetails> optionaluser=repository.findById(username);
		System.out.println(optionaluser.toString());
		UserDetails user = optionaluser.isPresent()? optionaluser.get() : null;
		
		return user;
	}
}
