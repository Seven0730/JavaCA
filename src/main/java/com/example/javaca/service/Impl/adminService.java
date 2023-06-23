package com.example.javaca.service.Impl;

import com.example.javaca.dto.BlockDTO;
import com.example.javaca.dto.StudentDTO;
import com.example.javaca.pojo.Course;
import com.example.javaca.pojo.Student;

import java.util.LinkedHashMap;
import java.util.List;

public interface adminService {
    LinkedHashMap<Course, Student> listStudentIsReject();

    List<BlockDTO> getRejectedStudents();

    void updateIsRejectToTrue(Long enrollmentId);

    int calculateTotalNumber(Long rolenunmber);

    Student getCoursebyStudent(String studentname);
    Course getCoursebyCourse(String studentname);
}
