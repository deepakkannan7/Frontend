package com.advancedapp.stuenqportal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.advancedapp.stuenqportal.Entity.Admission;

public interface AdmissionRepository extends JpaRepository<Admission, Long> {
}

