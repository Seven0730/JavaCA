package com.example.javaca.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StudentDTO {
        private Long id;
        private String name;
        private String email;
        private String studentId;
        private String college_name;
        private String password;
        private Long college_id;
}

