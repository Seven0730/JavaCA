package com.example.javaca.service.Impl;

import com.example.javaca.pojo.Course;
import com.example.javaca.pojo.Enrollment;
import com.example.javaca.pojo.Student;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import com.example.javaca.repository.*;

import java.util.*;

@Service
public class enrollmentServiceImpl implements enrollmentService{
    private enrollmentRepository enrollmentRepository;

    public enrollmentServiceImpl(com.example.javaca.repository.enrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

    @Override
    public List<Course> enrollAllAvailableCourse(String id) {
        return enrollmentRepository.enrollAllAvailableCourse(id);
    }

    @Override
    public Enrollment getbyId(Long id) {
        return enrollmentRepository.findById(id).get();
    }

    @Override
    public Enrollment saveEnrollment(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    @Override
    public Course getCourseById(Long id) {
        return enrollmentRepository.getCourseById(id);
    }

    @Override
    public Student getCurrentStudent(String id) {
        return enrollmentRepository.getCurrentStudent(id);
    }

    @Override
    public Map<Long, Long> totalNumForOneCourse() {
        List<Object[]> newList = enrollmentRepository.totalNumForOneCourse();
        Map<Long,Long> newMap = new HashMap<>();

        for(Long i=0L ; i<500L ;i++){
            newMap.put(i,0L);
        }

        for(Object[] data : newList){
            Long id = (Long)data[0];
            Long id2 = (Long)data[1];
            newMap.put(id,id2);
        }

        return newMap;
    }

    @Override
    public List<Course> findEnrolledCourse(String studentid) {
        return enrollmentRepository.findEnrolledCourse(studentid);
    }

    @Override
    public LinkedHashMap<String,Integer> conflictCourse(String studentid) {
        List<Course> courseOrigin = enrollmentRepository.findEnrolledCourse(studentid);
        List<Course> courseList = enrollmentRepository.enrollAllAvailableCourse(studentid);
        LinkedHashMap<String,Integer> courseConflictMap = new LinkedHashMap<>();
        int count = 0;
        int result;

        for(Course dataL:courseList){
            for(Course dataO: courseOrigin){
                if (dataO.getDate().charAt(0) == '1' && dataL.getDate().charAt(0) == '1' && ((dataO.getEndingtime().isAfter(dataL.getStartingtime()) && dataO.getEndingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().isAfter(dataL.getStartingtime()) && dataO.getStartingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().equals(dataL.getStartingtime()) && dataO.getEndingtime().equals(dataL.getEndingtime()))) ){
                    count ++;
                }
                if (dataO.getDate().charAt(1) == '1' && dataL.getDate().charAt(1) == '1' && ((dataO.getEndingtime().isAfter(dataL.getStartingtime()) && dataO.getEndingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().isAfter(dataL.getStartingtime()) && dataO.getStartingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().equals(dataL.getStartingtime()) && dataO.getEndingtime().equals(dataL.getEndingtime()))) ){
                    count ++;
                }
                if (dataO.getDate().charAt(2) == '1' && dataL.getDate().charAt(2) == '1' && ((dataO.getEndingtime().isAfter(dataL.getStartingtime()) && dataO.getEndingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().isAfter(dataL.getStartingtime()) && dataO.getStartingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().equals(dataL.getStartingtime()) && dataO.getEndingtime().equals(dataL.getEndingtime()))) ){
                    count ++;
                }
                if (dataO.getDate().charAt(3) == '1' && dataL.getDate().charAt(3) == '1' && ((dataO.getEndingtime().isAfter(dataL.getStartingtime()) && dataO.getEndingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().isAfter(dataL.getStartingtime()) && dataO.getStartingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().equals(dataL.getStartingtime()) && dataO.getEndingtime().equals(dataL.getEndingtime()))) ){
                    count ++;
                }
                if (dataO.getDate().charAt(4) == '1' && dataL.getDate().charAt(4) == '1' && ((dataO.getEndingtime().isAfter(dataL.getStartingtime()) && dataO.getEndingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().isAfter(dataL.getStartingtime()) && dataO.getStartingtime().isBefore(dataL.getEndingtime())) || (dataO.getStartingtime().equals(dataL.getStartingtime()) && dataO.getEndingtime().equals(dataL.getEndingtime()))) ){
                    count ++;
                }
            }
            if (count !=0) {
                result = 0;
            }
            else{
                result = 1;
            }
            courseConflictMap.put(dataL.getCousename(),result);
            count =0;
        }

        return courseConflictMap;
    }

    @Override
    public List<Course> searchByContent(String coursename,String studentid) {
        return enrollmentRepository.searchByContent(coursename,studentid);
    }

    @Override
    public LinkedHashMap<Course, List<Student>> getLecturerByCourse(String studengid) {
        List<Object[]> studentCoursePair = enrollmentRepository.getLecturerByCourse(studengid);
        LinkedHashMap<Course, List<Student>> studentCourseMap = new LinkedHashMap<>();

        for(Object[] data:studentCoursePair){
            Course course = (Course) data[0];
            Student student = (Student) data[1];
            if(!studentCourseMap.containsKey(course)){
                studentCourseMap.put(course,new ArrayList<>(Arrays.asList(student)));
            }
            else{
                studentCourseMap.get(course).add(student);
                studentCourseMap.put(course,studentCourseMap.get(course));
            }
        }
        return studentCourseMap;
    }

    @Override
    public Enrollment updateEnrollment(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

}
