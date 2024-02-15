// CourseEnquiry.java
package com.advancedapp.stuenqportal.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "course_enquiries")
public class CourseEnquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "course_id", nullable = false)
    private int courseId; // Changed courseId to int

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "course_name", nullable = false)
    private String courseName;

    @Column(name = "enquiry_text", nullable = false)
    private String enquiryText;

    @Column(name = "enquiry_date", nullable = false)
    private LocalDate enquiryDate;

    // Constructors

    public CourseEnquiry() {
    }

    public CourseEnquiry(int courseId, String email, String courseName, String enquiryText, LocalDate enquiryDate) {
        this.courseId = courseId;
        this.email = email;
        this.courseName = courseName;
        this.enquiryText = enquiryText;
        this.enquiryDate = enquiryDate;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getEnquiryText() {
        return enquiryText;
    }

    public void setEnquiryText(String enquiryText) {
        this.enquiryText = enquiryText;
    }

    public LocalDate getEnquiryDate() {
        return enquiryDate;
    }

    public void setEnquiryDate(LocalDate enquiryDate) {
        this.enquiryDate = enquiryDate;
    }
}
