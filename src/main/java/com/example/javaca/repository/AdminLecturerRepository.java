package com.example.javaca.repository;

import com.example.javaca.pojo.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdminLecturerRepository extends JpaRepository<Student, Long> {


}
