package com.scarecrow88.restapi.crud.controllers;
import com.scarecrow88.restapi.crud.models.People;
import com.scarecrow88.restapi.crud.repository.Repository;
import com.scarecrow88.restapi.crud.web.ApiResponse;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class ControllerPeople {
    @Autowired
    private Repository repo;
    // READ - GET
    @GetMapping ("/api/people")
    public ResponseEntity <ApiResponse> getPeople () {
    return ResponseEntity.ok (
        ApiResponse
            .builder ()
            .success (true)
            .msg ("Get all data")
            .data (repo.findAll ())
            .build ()
        );
    }
    // READ ONE - GET by ID
    @GetMapping ("/api/people/{id}")
    public ResponseEntity <ApiResponse> getOne (@PathVariable Long id) {
        Optional <People> people = repo.findById (id);
        if (people.isPresent ()) {
            ApiResponse response = ApiResponse
                .builder ()
                .success (true)
                .msg ("Get one data")
                .data (people.get ())
                .build ();
            return ResponseEntity.ok (response);
        } 
        else {
            ApiResponse response = ApiResponse
                .builder ()
                .success (false)
                .msg ("Data not found")
                .data (null)
                .build ();
            return ResponseEntity
                .status (HttpStatus.NOT_FOUND)
                .body (response);
        }
    }
    // CREATE - POST
    @PostMapping ("/api/people")
    public ResponseEntity <ApiResponse> post (@RequestBody People peo) {
        People savedPeople = repo.save (peo);
        return ResponseEntity
            .status (HttpStatus.CREATED)
            .body (ApiResponse
                .builder ()
                .success (true)
                .msg ("Save data")
                .data (savedPeople.getId ())
                .build ()
            );
    }
    // UPDATE - PUT
    @PutMapping ("/api/people/{id}")
    public ResponseEntity <ApiResponse> put (@PathVariable Long id, @RequestBody People peo) {
        Optional <People> people = repo.findById (id);
        if (people.isPresent ()) {
            People updatePeople = people.get ();
            updatePeople.setName (peo.getName ());
            updatePeople.setCity (peo.getCity ());
            updatePeople.setCelNumber (peo.getCelNumber ());
            repo.save (updatePeople);
            return ResponseEntity
                .ok (ApiResponse
                    .builder ()
                    .success (true)
                    .msg ("Updated data")
                    .data (updatePeople.getId ())
                    .build ()
            );
        }
        return ResponseEntity
            .status (HttpStatus.NOT_FOUND)
            .body (ApiResponse
                .builder ()
                .success (false)
                .msg ("Data not found")
                .data (null)
                .build ()
            );
    }
    // DELETE - DELETE
    @DeleteMapping ("/api/people/{id}")
    public ResponseEntity <ApiResponse> delete (@PathVariable Long id) {
        Optional <People> people = repo.findById (id);
        if (people.isPresent ()) {
            repo.delete (people.get ());
            return ResponseEntity
                .ok (ApiResponse.builder ()
                    .success (true)
                    .msg ("Data deleted")
                    .data (id)
                    .build ()
            );
        }
        return ResponseEntity
            .status (HttpStatus.NOT_FOUND)
            .body (ApiResponse
                .builder ()
                .success (false)
                .msg ("Data not found")
                .data (null)
                .build ()
            );
    }
}