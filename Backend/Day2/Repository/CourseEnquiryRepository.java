package com.advancedapp.stuenqportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.advancedapp.stuenqportal.Entity.CourseEnquiry;

@Repository
public interface CourseEnquiryRepository extends JpaRepository<CourseEnquiry, Long> {

    // You can add custom query methods here if needed

}
