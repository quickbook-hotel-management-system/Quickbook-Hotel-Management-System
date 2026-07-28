package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.OwnerResponse;

public interface AdminService {

    List<OwnerResponse> getPendingOwners();

    String approveOwner(Integer userId);

    String blockOwner(Integer userId);

}