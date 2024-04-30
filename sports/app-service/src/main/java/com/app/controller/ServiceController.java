package com.app.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/")
public class ServiceController {

    /**
     * To get the property values
     */
    @Value("${app.validationConfirmationMessage1}")
    private String validationConfirmationMessage1;


    @Value("${app.validationConfirmationMessage2}")
    private String validationConfirmationMessage2;


    @GetMapping("/Admin")
    public String getSensitiveAdminData() {

        return validationConfirmationMessage1;
    }

    @GetMapping("/User")
    public String getSensitiveUserData() {

        return validationConfirmationMessage2;
    }

}
