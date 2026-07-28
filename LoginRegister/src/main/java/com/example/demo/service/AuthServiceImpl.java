package com.example.demo.service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.JwtUtil;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           JwtUtil jwtUtil) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists";
        }

        if (userRepository.existsByPhone(request.getPhone())) {
            return "Phone already exists";
        }

        if (userRepository.existsByIdproof(request.getIdproof())) {
            return "ID Proof already exists";
        }

        Optional<Role> roleOptional = roleRepository.findById(request.getRoleId());

        if (roleOptional.isEmpty()) {
            return "Invalid Role";
        }

        Role role = roleOptional.get();

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setIdproof(request.getIdproof());

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(role);

        // Hotel Owner needs Admin approval
        if (role.getRoleName().equalsIgnoreCase("Hotel Owner")) {

            user.setStatus("Inactive");

        } else {

            user.setStatus("Active");

        }

        userRepository.save(user);

        if (role.getRoleName().equalsIgnoreCase("Hotel Owner")) {

            return "Owner Registered Successfully. Waiting for Admin Approval.";

        }

        return "Customer Registered Successfully";
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid Email"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        if (user.getStatus().equalsIgnoreCase("Inactive")) {
            throw new RuntimeException("Waiting for Admin Approval");
        }

        if (user.getStatus().equalsIgnoreCase("Blocked")) {
            throw new RuntimeException("Account Blocked");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                user.getUserId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole().getRoleName(),
                token);
    }

}