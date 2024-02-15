// CourseEnquiryService.java
package com.advancedapp.stuenqportal.Services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.advancedapp.stuenqportal.dto.CourseEnquiryDTO;
import com.advancedapp.stuenqportal.Entity.CourseEnquiry;
import com.advancedapp.stuenqportal.Repository.CourseEnquiryRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseEnquiryService {

    @Autowired
    private CourseEnquiryRepository courseEnquiryRepository;

    public CourseEnquiryDTO saveCourseEnquiry(CourseEnquiryDTO courseEnquiryDTO) {
        CourseEnquiry courseEnquiry = new CourseEnquiry();
        BeanUtils.copyProperties(courseEnquiryDTO, courseEnquiry);
        CourseEnquiry savedEnquiry = courseEnquiryRepository.save(courseEnquiry);
        CourseEnquiryDTO savedEnquiryDTO = new CourseEnquiryDTO();
        BeanUtils.copyProperties(savedEnquiry, savedEnquiryDTO);
        return savedEnquiryDTO;
    }

    public List<CourseEnquiryDTO> getAllCourseEnquiries() {
        List<CourseEnquiry> enquiries = courseEnquiryRepository.findAll();
        return mapEnquiriesToDTOs(enquiries);
    }

    public CourseEnquiryDTO getEnquiryById(Long id) {
        Optional<CourseEnquiry> enquiryOptional = courseEnquiryRepository.findById(id);
        return enquiryOptional.map(this::mapEnquiryToDTO).orElse(null);
    }

    public CourseEnquiryDTO updateEnquiry(Long id, CourseEnquiryDTO updatedEnquiryDTO) {
        Optional<CourseEnquiry> existingEnquiryOptional = courseEnquiryRepository.findById(id);
        if (existingEnquiryOptional.isPresent()) {
            CourseEnquiry existingEnquiry = existingEnquiryOptional.get();
            BeanUtils.copyProperties(updatedEnquiryDTO, existingEnquiry);
            CourseEnquiry updatedEnquiry = courseEnquiryRepository.save(existingEnquiry);
            return mapEnquiryToDTO(updatedEnquiry);
        } else {
            return null;
        }
    }

    public void deleteEnquiry(Long id) {
        courseEnquiryRepository.deleteById(id);
    }

    private List<CourseEnquiryDTO> mapEnquiriesToDTOs(List<CourseEnquiry> enquiries) {
        return enquiries.stream()
                .map(this::mapEnquiryToDTO)
                .collect(Collectors.toList());
    }

    private CourseEnquiryDTO mapEnquiryToDTO(CourseEnquiry enquiry) {
        CourseEnquiryDTO enquiryDTO = new CourseEnquiryDTO();
        BeanUtils.copyProperties(enquiry, enquiryDTO);
        return enquiryDTO;
    }
}
