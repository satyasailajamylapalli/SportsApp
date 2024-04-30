package com.sports.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sports.repository.model.SportsLeague;
import com.sports.repository.model.UserDetails;
import com.sports.services.SportsService;
import com.sports.services.UserService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SportsServiceController {

	
	@Autowired
	private UserService userService;
	
	@Autowired
	private SportsService sportsService;


    @GetMapping("/getSportsData/{username}")
    public ResponseEntity<List<SportsLeague>> getFavoriteSportsLegaue(@PathVariable(name="username") String username) {
    	List<SportsLeague> sportsList = sportsService.getFavoriteSportsLegaue(username);
    	if(sportsList == null || sportsList.isEmpty()) {
    		return new ResponseEntity<List<SportsLeague>>(sportsList, HttpStatus.NOT_FOUND);
    	}
    	return new ResponseEntity<List<SportsLeague>>(sportsList, HttpStatus.OK);
    }

    @PostMapping("/addFavoriteLeague")
    public ResponseEntity<?> addFavoriteLeague(@RequestBody SportsLeague league) {
        return ResponseEntity.ok(sportsService.addFavoriteLeague(league));
    }

    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<?>  checkLogin(@PathVariable(name="username") String username,
    		@PathVariable(name="password") String password) {
    	UserDetails user=userService.checkUser(username, password);
    	if(user == null) {
    		return new  ResponseEntity<String>("not found", HttpStatus.NOT_FOUND);
    	}else if(!user.getPassword().equals(password)) {
    		System.out.println(user.toString());
    		return new  ResponseEntity<String>("Username and Password is Incorrect", HttpStatus.BAD_REQUEST);
    	}
    	System.out.println(user.toString());
    	return ResponseEntity.ok(userService.checkUser(username, password));
    }
    
    @PostMapping("/adduser")
    public ResponseEntity<?> addUser(@RequestBody UserDetails user) {
    	UserDetails savedUser = userService.addUser(user);
        return ResponseEntity.ok(savedUser);
    }
}
