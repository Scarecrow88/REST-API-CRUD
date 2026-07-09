package com.scarecrow88.restapi.crud.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.scarecrow88.restapi.crud.models.People;
public interface Repository extends JpaRepository <People, Long> {
}
