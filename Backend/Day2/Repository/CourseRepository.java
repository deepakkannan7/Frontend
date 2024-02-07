package com.advancedapp.stuenqportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.advancedapp.stuenqportal.Entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can add custom query methods if needed
}