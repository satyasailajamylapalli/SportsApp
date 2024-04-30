package com.app.service;

import com.app.domain.User;
import com.app.exception.UserAlreadyExistException;
import com.app.exception.UserNotFoundException;
import com.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
  
    @Value("${app.service.message1}")
    private String message1;

    @Value("${app.service.message2}")
    private String message2;


    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        super();
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistException {

        Optional<User> userResult = userRepository.findById(user.getId());

        if (userResult.isPresent()) {
            throw new UserAlreadyExistException(message1);
        }else if (user.getId() == null || user.getId().isEmpty()) {
            throw new UserAlreadyExistException("User Id cannot be empty");
        } else if (user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new UserAlreadyExistException("Password cannot be empty");
        } else if (user.getRole() == null) {
            throw new UserAlreadyExistException("Role cannot be empty");
        }

        return userRepository.save(user);
    }

    @Override
    public User findByIdAndPassword(String id, String password) throws UserNotFoundException {
        User authUser = userRepository.findByIdAndPassword(id, password);
        if (authUser == null) {
            throw new UserNotFoundException(message2);
        }
        return authUser;
    }

}
