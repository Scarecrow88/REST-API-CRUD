package com.scarecrow88.restapi.crud.controllers;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
@RestController
public class ControllerUser {
	@GetMapping ("/api/user")
	public List <Map <String, Object>> getUser () {
        RestTemplate restTemplate = new RestTemplate ();
        String url = "https://jsonplaceholder.typicode.com/users"; // devuelve un array JSON
        List <Map <String, Object>> response = restTemplate.getForObject (url, List.class);
        return response;
    }
}