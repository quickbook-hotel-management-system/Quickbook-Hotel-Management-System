package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByPhone(String phone);

    boolean existsByIdproof(String idproof);
    
    // Pending Hotel Owners
    List<User> findByRoleRoleNameAndStatus(String roleName, String status);

    // Find User
    Optional<User> findByUserId(Integer userId);

}