package com.example.javaca.service.Impl;

import com.example.javaca.dto.CourseDTO;
import com.example.javaca.pojo.Course;
import com.example.javaca.pojo.Enrollment;
import com.example.javaca.pojo.Student;
import org.springframework.data.repository.query.Param;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface courseService {
    LinkedHashMap<Course,String> findSpecificAllCourse(String id);
    LinkedHashMap<String,LinkedHashMap<String,String>> isFreeCourse(String id);

    List<CourseDTO> findAllCourse();;

    Course insertCourse(Course course);

    void deleteCourse(Long id);

    Course updateCourse(Course course);

    Optional<Course> findCourseById(Long id);
}
