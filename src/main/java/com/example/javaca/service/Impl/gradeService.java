package com.example.javaca.service.Impl;

import com.example.javaca.pojo.Course;

import java.util.LinkedHashMap;
import java.util.Map;

public interface gradeService {
    LinkedHashMap<Course, Double> getGradeByStudentId(String id);
    Double calaulateAvgGPA(Map<Course, Double> courseDoubleMap);
}
