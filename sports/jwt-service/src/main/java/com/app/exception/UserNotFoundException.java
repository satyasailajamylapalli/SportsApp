package com.app.exception;

@SuppressWarnings("serial")
public class UserNotFoundException extends Exception {

    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException() {
    	//empty constructor
    }

}
