package com.advancedapp.stuenqportal.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.advancedapp.stuenqportal.Entity.CourseEnquiry;
import com.advancedapp.stuenqportal.Services.CourseEnquiryService;

import java.util.List;
import java.util.Optional;

@RestController
public class CourseEnquiryController {

    private final CourseEnquiryService courseEnquiryService;

    public CourseEnquiryController(CourseEnquiryService courseEnquiryService) {
        this.courseEnquiryService = courseEnquiryService;
    }

    @PostMapping("/submit")
    public ResponseEntity<CourseEnquiry> submitEnquiry(@RequestBody CourseEnquiry courseEnquiry) {
        CourseEnquiry savedEnquiry = courseEnquiryService.saveCourseEnquiry(courseEnquiry);
        return ResponseEntity.ok(savedEnquiry);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CourseEnquiry>> getAllEnquiries() {
        List<CourseEnquiry> enquiries = courseEnquiryService.getAllCourseEnquiries();
        return ResponseEntity.ok(enquiries);
    }

    // You can add more methods based on your requirements

    @GetMapping("/{id}")
    public ResponseEntity<Optional<CourseEnquiry>> getEnquiryById(@PathVariable Long id) {
        Optional<CourseEnquiry> enquiry = courseEnquiryService.getEnquiryById(id);
        if (enquiry != null) {
            return ResponseEntity.ok(enquiry);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CourseEnquiry> updateEnquiry(@PathVariable Long id, @RequestBody CourseEnquiry updatedEnquiry) {
        CourseEnquiry enquiry = courseEnquiryService.updateEnquiry(id, updatedEnquiry);
        if (enquiry != null) {
            return ResponseEntity.ok(enquiry);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable Long id) {
        courseEnquiryService.deleteEnquiry(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/Sample")
    public String requestMethodName()
    {
        return "hello";
    }


}
