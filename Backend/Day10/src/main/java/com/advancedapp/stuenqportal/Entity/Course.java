package com.advancedapp.stuenqportal.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.net.URL;

@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "course_id")
    private String courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "rating")
    private String rating;

    @Column(name = "hours_of_learning")
    private String hoursOfLearning;

    @Column(name = "description")
    private String description;

    @Column(name = "trainer")
    private String trainer;

    @Column(name = "course_fee")
    private String courseFee;

    @Column(name = "image_src", columnDefinition = "VARCHAR(255)")
    private URL imageSrc;

    // Constructors, getters, and setters
    public Course() {
    }

    public Course(String courseId, String courseName, String rating, String hoursOfLearning,
                  String description, String trainer, String courseFee, URL imageSrc) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.rating = rating;
        this.hoursOfLearning = hoursOfLearning;
        this.description = description;
        this.trainer = trainer;
        this.courseFee = courseFee;
        this.imageSrc = imageSrc;
    }

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

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
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

