package com.advancedapp.stuenqportal.Services;

import com.advancedapp.stuenqportal.dto.AdmissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.advancedapp.stuenqportal.Entity.Admission;
import com.advancedapp.stuenqportal.Repository.AdmissionRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;

    @SuppressWarnings("null")
    public AdmissionDTO saveAdmission(AdmissionDTO admissionDTO) {
        // Convert DTO to entity and save
        return convertToDTO(admissionRepository.save(convertToEntity(admissionDTO)));
    }

    public List<AdmissionDTO> getAllAdmissions() {
        return admissionRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public AdmissionDTO getAdmissionById(Long id) {
        Optional<AdmissionDTO> optionalAdmission = admissionRepository.findById(id)
                .map(this::convertToDTO);
        return optionalAdmission.orElse(null);
    }

    @SuppressWarnings("null")
    public AdmissionDTO updateAdmission(Long id, AdmissionDTO admissionDTO) {
        if (admissionRepository.existsById(id)) {
            admissionDTO.setId(id); // Make sure the DTO has the correct ID
            return convertToDTO(admissionRepository.save(convertToEntity(admissionDTO)));
        }
        return null;
    }

    @SuppressWarnings("null")
    public void deleteAdmission(Long id) {
        admissionRepository.deleteById(id);
    }

    // Helper method to convert entity to DTO
    private AdmissionDTO convertToDTO(Admission admission) {
        return new AdmissionDTO(
                admission.getId(),
                admission.getStudentId(),
                admission.getCourseName(),
                admission.getTotalAmount(),
                admission.getModeOfPayment(),
                admission.getPaymentDate()
        );
    }

    // Helper method to convert DTO to entity
    private Admission convertToEntity(AdmissionDTO admissionDTO) {
        return new Admission(
                admissionDTO.getStudentId(),
                admissionDTO.getCourseName(),
                admissionDTO.getTotalAmount(),
                admissionDTO.getModeOfPayment(),
                admissionDTO.getPaymentDate()
        );
    }
}
