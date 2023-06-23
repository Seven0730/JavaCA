package com.example.javaca.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BlockDTO {
    private Long Id;
    private boolean isReject;
    private String studentName;
    private String courseName;
}
