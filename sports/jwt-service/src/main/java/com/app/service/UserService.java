package com.app.service;

import com.app.domain.User;
import com.app.exception.UserAlreadyExistException;
import com.app.exception.UserNotFoundException;

public interface UserService {

    User saveUser(User user) throws UserAlreadyExistException;

    User findByIdAndPassword(String id, String password) throws UserNotFoundException;
}
