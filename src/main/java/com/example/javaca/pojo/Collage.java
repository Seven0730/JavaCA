package com.example.javaca.pojo;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="collage")
public class Collage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "collage")
    private List<Student> studentList;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "collage")
    private List<Course> courseList;

    public Collage() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }

    public List<Course> getCourseList() {
        return courseList;
    }

    public void setCourseList(List<Course> courseList) {
        this.courseList = courseList;
    }

    public Collage(String name, List<Student> studentList, List<Course> courseList) {
        this.name = name;
        this.studentList = studentList;
        this.courseList = courseList;
    }
}
