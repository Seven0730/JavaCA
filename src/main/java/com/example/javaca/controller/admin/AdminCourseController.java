package com.example.javaca.controller.admin;

import com.example.javaca.dto.CourseDTO;
import com.example.javaca.dto.LecturerCourseDTO;
import com.example.javaca.dto.LecturerDTO;
import com.example.javaca.pojo.Course;
import com.example.javaca.service.Impl.adminService;
import com.example.javaca.service.Impl.courseService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/course")
public class AdminCourseController {
    @Resource
    private courseService courseService;
    @Resource
    private adminService adminService;

    @PostMapping("")
    public Course addModule(@RequestBody Course course){
        return courseService.insertCourse(course);
    }

    @DeleteMapping("/{id}")
    public void deleteModule(@PathVariable("id") Long id){
        courseService.deleteCourse(id);
    }

    @PutMapping("")
    public Course updateModule(@RequestBody Course course){
        return courseService.updateCourse(course);
    }

    @GetMapping("")
    public List<CourseDTO> findAll(){
        return courseService.findAllCourse();
    }


}
