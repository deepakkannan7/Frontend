package com.advancedapp.stuenqportal.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.advancedapp.stuenqportal.Entity.CourseEnquiry;

@Repository
public interface CourseEnquiryRepository extends JpaRepository<CourseEnquiry, Long> {

    List<CourseEnquiry> findByEnquiryDateBefore(Date enquiryDate);

    // You can add custom query methods here if needed

}
