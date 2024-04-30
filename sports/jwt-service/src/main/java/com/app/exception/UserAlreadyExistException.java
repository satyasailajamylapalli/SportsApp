package com.app.exception;

@SuppressWarnings("serial")
public class UserAlreadyExistException extends Exception {

	public UserAlreadyExistException(String message) {
        super(message);
    }

    public UserAlreadyExistException() {
    	//empty constructor
    }


}
