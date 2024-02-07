package com.advancedapp.stuenqportal.Services;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advancedapp.stuenqportal.Entity.CourseEnquiry;
import com.advancedapp.stuenqportal.Repository.CourseEnquiryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CourseEnquiryService {

    private final CourseEnquiryRepository courseEnquiryRepository;

    public CourseEnquiryService(CourseEnquiryRepository courseEnquiryRepository) {
        this.courseEnquiryRepository = courseEnquiryRepository;
    }

    @SuppressWarnings("null")
    public CourseEnquiry saveCourseEnquiry(CourseEnquiry courseEnquiry) {
        return courseEnquiryRepository.save(courseEnquiry);
    }

    public List<CourseEnquiry> getAllCourseEnquiries() {
        return courseEnquiryRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<CourseEnquiry> getEnquiryById(Long id) {
        return courseEnquiryRepository.findById(id);
    }

    public CourseEnquiry updateEnquiry(Long id, CourseEnquiry updatedEnquiry) {
        Optional<CourseEnquiry> existingEnquiryOptional = courseEnquiryRepository.findById(id);

        if (existingEnquiryOptional.isPresent()) {
            CourseEnquiry existingEnquiry = existingEnquiryOptional.get();
            existingEnquiry.setCourseId(updatedEnquiry.getCourseId());
            existingEnquiry.setEmail(updatedEnquiry.getEmail());
            existingEnquiry.setCourseName(updatedEnquiry.getCourseName());
            existingEnquiry.setEnquiryText(updatedEnquiry.getEnquiryText());
            existingEnquiry.setEnquiryDate(updatedEnquiry.getEnquiryDate());

            return courseEnquiryRepository.save(existingEnquiry);
        } else {
            return null; // Handle not found case appropriately
        }
    }

    @SuppressWarnings("null")
    public void deleteEnquiry(Long id) {
        courseEnquiryRepository.deleteById(id);
    }

}
