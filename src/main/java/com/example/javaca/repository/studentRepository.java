package com.example.javaca.repository;

import com.example.javaca.pojo.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface studentRepository extends JpaRepository<Student,Long> {
    @Query("select s from Student s where s.Email=:email and s.Password=:password")
    Student getStudentbyEmailAndPwd(@Param("email") String email,@Param("password") String pwd);

    @Query("SELECT s.ID,s.Password,s.Name,s.Email,s.studentId ,s.collage.name,s.collage.id FROM Student s where s.role.id=1")
    List<Object[]> findAllStudentDetails();
}
