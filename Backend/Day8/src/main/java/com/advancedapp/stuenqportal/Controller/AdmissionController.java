package com.advancedapp.stuenqportal.Controller;

import com.advancedapp.stuenqportal.dto.AdmissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.advancedapp.stuenqportal.Services.AdmissionService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // Adjust the URL according to your frontend origin
@RestController
@RequestMapping("/admissions")
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    @PostMapping("/create")
    public ResponseEntity<AdmissionDTO> createAdmission(@RequestBody AdmissionDTO admissionDTO) {
        AdmissionDTO createdAdmission = admissionService.saveAdmission(admissionDTO);
        return new ResponseEntity<>(createdAdmission, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<AdmissionDTO>> getAllAdmissions() {
        List<AdmissionDTO> admissions = admissionService.getAllAdmissions();
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdmissionDTO> getAdmissionById(@PathVariable Long id) {
        AdmissionDTO admission = admissionService.getAdmissionById(id);
        if (admission != null) {
            return new ResponseEntity<>(admission, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AdmissionDTO> updateAdmission(@PathVariable Long id, @RequestBody AdmissionDTO admissionDTO) {
        AdmissionDTO updatedAdmission = admissionService.updateAdmission(id, admissionDTO);
        if (updatedAdmission != null) {
            return new ResponseEntity<>(updatedAdmission, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAdmission(@PathVariable Long id) {
        admissionService.deleteAdmission(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
