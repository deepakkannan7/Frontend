package com.advancedapp.stuenqportal.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "course_enquiries")
public class CourseEnquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "course_id", nullable = false)
    private String courseId;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "course_name", nullable = false)
    private String courseName;

    @Column(name = "enquiry_text", nullable = false)
    private String enquiryText;

    @Column(name = "enquiry_date", nullable = false)
    private LocalDate enquiryDate;

    @Lob
    @Column(name = "file_data")
    private byte[] fileData;

    // Constructors

    public CourseEnquiry() {
    }

    public CourseEnquiry(String courseId, String email, String courseName, String enquiryText, LocalDate enquiryDate, byte[] fileData) {
        this.courseId = courseId;
        this.email = email;
        this.courseName = courseName;
        this.enquiryText = enquiryText;
        this.enquiryDate = enquiryDate;
        this.fileData = fileData;
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

    public LocalDate getEnquiryDate() {
        return enquiryDate;
    }

    public void setEnquiryDate(LocalDate enquiryDate) {
        this.enquiryDate = enquiryDate;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }
}
