package com.advancedapp.stuenqportal.Services;

import org.springframework.stereotype.Service;

import com.advancedapp.stuenqportal.Entity.Course;
import com.advancedapp.stuenqportal.Repository.CourseRepository;
import com.advancedapp.stuenqportal.dto.CourseDTO;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course createCourse(CourseDTO courseDTO) {
        Course course = new Course();
        course.setCourseId(courseDTO.getCourseId());
        course.setCourseName(courseDTO.getCourseName());
        course.setRating(courseDTO.getRating());
        course.setHoursOfLearning(courseDTO.getHoursOfLearning());
        course.setDescription(courseDTO.getDescription());
        course.setTrainer(courseDTO.getTrainer());
        course.setCourseFee(courseDTO.getCourseFee());
        course.setImageSrc(courseDTO.getImageSrc());
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public Course updateCourse(Long id, CourseDTO courseDTO) {
        @SuppressWarnings("null")
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if (optionalCourse.isPresent()) {
            Course course = optionalCourse.get();
            course.setCourseId(courseDTO.getCourseId());
            course.setCourseName(courseDTO.getCourseName());
            course.setRating(courseDTO.getRating());
            course.setHoursOfLearning(courseDTO.getHoursOfLearning());
            course.setDescription(courseDTO.getDescription());
            course.setTrainer(courseDTO.getTrainer());
            course.setCourseFee(courseDTO.getCourseFee());
            course.setImageSrc(courseDTO.getImageSrc());
            return courseRepository.save(course);
        } else {
            // Handle error when course is not found
            throw new RuntimeException("Course not found with id: " + id);
        }
    }

    @SuppressWarnings("null")
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}


