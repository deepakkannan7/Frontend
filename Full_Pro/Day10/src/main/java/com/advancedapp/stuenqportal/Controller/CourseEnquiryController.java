// CourseEnquiryController.java
package com.advancedapp.stuenqportal.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.advancedapp.stuenqportal.dto.CourseEnquiryDTO;
import com.advancedapp.stuenqportal.Entity.CourseEnquiry;
import com.advancedapp.stuenqportal.Services.CourseEnquiryService;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin // Adjust the URL according to your frontend origin
@RestController
@RequestMapping("/enquiries")
public class CourseEnquiryController {

    @Autowired
    private CourseEnquiryService courseEnquiryService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitEnquiry(@RequestBody CourseEnquiry courseEnquiry) {

        try {
            // Create a CourseEnquiryDTO object with form data
            CourseEnquiryDTO courseEnquiryDTO = new CourseEnquiryDTO();
            courseEnquiryDTO.setCourseId(courseEnquiry.getCourseId());
            courseEnquiryDTO.setCourseName(courseEnquiry.getCourseName());
            courseEnquiryDTO.setEmail(courseEnquiry.getEmail());
            courseEnquiryDTO.setEnquiryText(courseEnquiry.getEnquiryText());
            courseEnquiryDTO.setEnquiryDate(courseEnquiry.getEnquiryDate());

            // Call the service method to save the enquiry
            CourseEnquiryDTO savedEnquiry = courseEnquiryService.saveCourseEnquiry(courseEnquiryDTO);
            return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);

        } catch (Exception err) {
            System.out.println(err.getMessage());
        }

        return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CourseEnquiryDTO>> getAllEnquiries() {
        List<CourseEnquiryDTO> enquiries = courseEnquiryService.getAllCourseEnquiries();
        return ResponseEntity.ok(enquiries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseEnquiryDTO> getEnquiryById(@PathVariable Long id) {
        CourseEnquiryDTO enquiry = courseEnquiryService.getEnquiryById(id);
        if (enquiry != null) {
            return ResponseEntity.ok(enquiry);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CourseEnquiryDTO> updateEnquiry(@PathVariable Long id,
            @RequestBody CourseEnquiryDTO updatedEnquiry) {
        CourseEnquiryDTO enquiry = courseEnquiryService.updateEnquiry(id, updatedEnquiry);
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
}
