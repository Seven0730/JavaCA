package com.example.javaca.service.Impl;

import com.example.javaca.pojo.Course;
import com.example.javaca.pojo.Enrollment;
import com.example.javaca.pojo.Student;
import org.springframework.data.repository.query.Param;

import java.util.Dictionary;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public interface enrollmentService {
    List<Course> enrollAllAvailableCourse(String id);
    Enrollment getbyId(Long id);
    Enrollment saveEnrollment(Enrollment enrollment);
    Course getCourseById(Long id);
    Student getCurrentStudent(String id);
    Map<Long,Long> totalNumForOneCourse();
    List<Course> findEnrolledCourse(String studentid);
    LinkedHashMap<String,Integer> conflictCourse(String studentid);
    List<Course> searchByContent(String coursename,String studentid);
    LinkedHashMap<Course,List<Student>> getLecturerByCourse(String string);
    Enrollment updateEnrollment(Enrollment enrollment);
}
