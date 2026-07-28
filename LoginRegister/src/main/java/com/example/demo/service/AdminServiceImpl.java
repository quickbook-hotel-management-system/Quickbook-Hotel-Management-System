package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.OwnerResponse;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;

    public AdminServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<OwnerResponse> getPendingOwners() {

        List<User> owners = userRepository.findByRoleRoleNameAndStatus(
                "Hotel Owner",
                "Inactive");

        return owners.stream()
                .map(user -> new OwnerResponse(
                        user.getUserId(),
                        user.getFullName(),
                        user.getEmail(),
                        user.getPhone(),
                        user.getStatus()))
                .collect(Collectors.toList());
    }

    @Override
    public String approveOwner(Integer userId) {

        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Owner Not Found"));

        user.setStatus("Active");

        userRepository.save(user);

        return "Owner Approved Successfully";
    }

    @Override
    public String blockOwner(Integer userId) {

        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Owner Not Found"));

        user.setStatus("Blocked");

        userRepository.save(user);

        return "Owner Blocked Successfully";
    }

}