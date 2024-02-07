package com.advancedapp.stuenqportal.dto;

import java.net.URL;

public class CourseDTO {
    private Long id;
    private String courseId;
    private String courseName;

    private String hoursOfLearning;
    private String description;
    private String trainer;
    private String courseFee;
    private URL imageSrc;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }


    public String getHoursOfLearning() {
        return hoursOfLearning;
    }

    public void setHoursOfLearning(String hoursOfLearning) {
        this.hoursOfLearning = hoursOfLearning;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public String getCourseFee() {
        return courseFee;
    }

    public void setCourseFee(String courseFee) {
        this.courseFee = courseFee;
    }

    public URL getImageSrc() {
        return imageSrc;
    }

    public void setImageSrc(URL imageSrc) {
        this.imageSrc = imageSrc;
    }
}
