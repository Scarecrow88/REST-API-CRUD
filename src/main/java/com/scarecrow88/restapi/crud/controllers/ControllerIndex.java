package com.scarecrow88.restapi.crud.controllers;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class ControllerIndex {
	@GetMapping ()
    public Map <String, String> index () {
        Map <String, String> response = new HashMap <> ();
        response.put ("title", "Hola mundo");
        return response;
    }
}