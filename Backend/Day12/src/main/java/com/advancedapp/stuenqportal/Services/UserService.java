package com.advancedapp.stuenqportal.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.advancedapp.stuenqportal.Entity.User;
import com.advancedapp.stuenqportal.Repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @SuppressWarnings("null")
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User findById(String id) {
        try {
            Long userId = Long.parseLong(id);
            return userRepository.findById(userId).orElse(null);
        } catch (NumberFormatException e) {
            // Handle the case where id is not a valid Long
            return null;
        }
    }
    

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long id, User updatedUser) {
        @SuppressWarnings("null")
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            // Update properties of existingUser with updatedUser
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            // Set other properties as needed
            return userRepository.save(existingUser);
        } else {
            return null; // or throw an exception or handle as appropriate
        }
    }

    @SuppressWarnings("null")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @SuppressWarnings("null")
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
