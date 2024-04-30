package com.app.controller;

import com.app.config.JWTTokenGenerator;
import com.app.domain.User;
import com.app.exception.UserAlreadyExistException;
import com.app.exception.UserNotFoundException;
import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private UserService userService;
    private JWTTokenGenerator jwtTokenGenerator;
    ResponseEntity<?> responseEntity;

    /**
     * To get the property values
     */
    @Value("${app.controller.exception.message1}")
    private String message1;

    @Value("${app.controller.exception.message2}")
    private String message2;

    @Value("${app.controller.exception.message3}")
    private String message3;


    /**
     * Autowiring should be implemented for the Service Layer and JWT Token Generator.
     * Please note that we should not create any object using the new keyword
     */

    @Autowired
    public UserController(UserService userService, JWTTokenGenerator jwtTokenGenerator) {
        this.userService = userService;
        this.jwtTokenGenerator = jwtTokenGenerator;
    }

    /**
     * API Version: 1.0
     * Method to register a new user by reading the Serialized
     * User object from request body and save the user in database.
     * <p>
     * This handler method should return any one of the status messages basis on
     * different situations:
     * 1. 201(CREATED - In case of successful creation of the user
     * 2. 409(CONFLICT) - In case of duplicate id
     * <p>
     * This handler method should map to the URL "/api/v1/user" using HTTP POST
     * method".
     */
    @PostMapping("user")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User savedUser = userService.saveUser(user);
            responseEntity = new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (UserAlreadyExistException e) {
            responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

  
    @PostMapping("login/user")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            if (user.getId() == null || user.getPassword() == null) {
                throw new UserNotFoundException(message1);
            }
            User userDetails = userService.findByIdAndPassword(user.getId(), user.getPassword());
            if (userDetails == null) {
                throw new UserNotFoundException(message2);
            }
            if (!(user.getPassword().equals(userDetails.getPassword()))) {
                throw new UserNotFoundException(message3);
            }
            responseEntity= new ResponseEntity<>(jwtTokenGenerator.generateToken(userDetails), HttpStatus.ACCEPTED);
        } catch (UserNotFoundException e) {
            responseEntity = new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
