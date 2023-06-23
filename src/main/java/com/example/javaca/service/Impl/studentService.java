package com.example.javaca.service.Impl;

import com.example.javaca.dto.StudentDTO;
import com.example.javaca.pojo.Student;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface studentService {
    Student getStudentbyEmailAndPwd(String email, String pwd);

    List<StudentDTO> getAllStudents();

    Student insertStudent(Student student);


    void deleteStudent(Long id);

    Student updateStudent(Student student);
}
