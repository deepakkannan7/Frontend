package com.advancedapp.stuenqportal.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "course_enquiries")
public class CourseEnquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "course_id")
    private String courseId;

    @Column(name = "email")
    private String email;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "enquiry_text")
    private String enquiryText;

    @Column(name = "enquiry_date")
    private Date enquiryDate;

    // Constructors

    public CourseEnquiry() {
    }

    public CourseEnquiry(String courseId, String email, String courseName, String enquiryText, Date enquiryDate) {
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

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
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

    public Date getEnquiryDate() {
        return enquiryDate;
    }

    public void setEnquiryDate(Date enquiryDate) {
        this.enquiryDate = enquiryDate;
    }

    // You can use Lombok for generating getters, setters, and constructors if you prefer.
}
