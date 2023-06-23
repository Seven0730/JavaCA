package com.example.javaca.dto;

import com.example.javaca.pojo.Student;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class LecturerCourseDTO {
    private List<String> lecturer;
    private Long courseId;
}
