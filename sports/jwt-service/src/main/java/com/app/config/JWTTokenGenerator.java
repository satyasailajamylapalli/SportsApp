package com.app.config;

import java.util.Map;

import com.app.domain.User;

public interface JWTTokenGenerator {

    Map<String, String> generateToken(User user);
}
