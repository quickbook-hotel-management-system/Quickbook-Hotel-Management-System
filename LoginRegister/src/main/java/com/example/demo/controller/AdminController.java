package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.OwnerResponse;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // Get Pending Owners
    @GetMapping("/pending-owners")
    public ResponseEntity<List<OwnerResponse>> getPendingOwners() {

        return ResponseEntity.ok(adminService.getPendingOwners());

    }

    // Approve Owner
    @PutMapping("/approve/{userId}")
    public ResponseEntity<String> approveOwner(@PathVariable Integer userId) {
        System.out.println("Approve API Called");
        return ResponseEntity.ok(adminService.approveOwner(userId));

    }

    // Block Owner
    @PutMapping("/block/{userId}")
    public ResponseEntity<String> blockOwner(@PathVariable Integer userId) {

        return ResponseEntity.ok(adminService.blockOwner(userId));

    }

}