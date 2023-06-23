package com.example.javaca.service.Impl;

import com.example.javaca.dto.BlockDTO;
import com.example.javaca.pojo.Course;
import com.example.javaca.pojo.Student;
import com.example.javaca.repository.adminRepository;
import com.example.javaca.repository.enrollmentRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Service
@Transactional
public class adminServiceImpl implements adminService{
    private adminRepository adminRepository;

    public adminServiceImpl(com.example.javaca.repository.adminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public LinkedHashMap<Course, Student> listStudentIsReject() {
        List<Object[]> courseStudentRejectList = adminRepository.listStudentIsReject();
        LinkedHashMap<Course,Student> courseStudentLinkedHashMap = new LinkedHashMap<>();
        for(Object[] data:courseStudentRejectList){
            Student student=(Student) data[0];
            Course course=(Course) data[1];
            courseStudentLinkedHashMap.put(course,student);
        }
        return courseStudentLinkedHashMap;
    }

    @Override
    public List<BlockDTO> getRejectedStudents() {
        List<Object[]> results = adminRepository.listBlockedStudent();
        List<BlockDTO> blockedStudents = new ArrayList<>();

        for (Object[] result : results) {
            Long enrollmentId = (Long) result[0];
            boolean isReject = (boolean) result[1];
            String studentName = (String) result[2];
            String courseName = (String) result[3];

            blockedStudents.add(new BlockDTO(enrollmentId, isReject, studentName, courseName));
        }

        return blockedStudents;
    }

    @Override
    public void updateIsRejectToTrue(Long enrollmentId) {
        adminRepository.updateIsRejectToTrue(enrollmentId);
    }

    @Override
    public int calculateTotalNumber(Long rolenunmber) {
        return adminRepository.calculateTotalNumber(rolenunmber);
    }

    @Override
    public Student getCoursebyStudent(String studentname) {
        return adminRepository.getStudentbyName(studentname);
    }

    @Override
    public Course getCoursebyCourse(String studentname) {
        return null;
    }

}
