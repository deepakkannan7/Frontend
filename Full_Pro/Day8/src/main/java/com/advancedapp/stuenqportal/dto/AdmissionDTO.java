package com.advancedapp.stuenqportal.dto;

import java.sql.Date;

public class AdmissionDTO {
    private Long id;
    private String studentId;
    private String courseName;
    private double totalAmount;
    private String modeOfPayment;
    private Date paymentDate;

    public AdmissionDTO() {
    }

    public AdmissionDTO(Long id, String studentId, String courseName, double totalAmount, String modeOfPayment, Date paymentDate) {
        this.id = id;
        this.studentId = studentId;
        this.courseName = courseName;
        this.totalAmount = totalAmount;
        this.modeOfPayment = modeOfPayment;
        this.paymentDate = paymentDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getModeOfPayment() {
        return modeOfPayment;
    }

    public void setModeOfPayment(String modeOfPayment) {
        this.modeOfPayment = modeOfPayment;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }
}
