package com.advancedapp.stuenqportal.dto;

import java.time.LocalDate;

public class CourseEnquiryDTO {
    private Long id;
    private String courseId;
    private String email;
    private String courseName;
    private String enquiryText;
    private LocalDate enquiryDate;
    private byte[] fileData; // Field for file upload

    // Constructors
    public CourseEnquiryDTO() {
    }

    public CourseEnquiryDTO(Long id, String courseId, String email, String courseName, String enquiryText, LocalDate enquiryDate, byte[] fileData) {
        this.id = id;
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
