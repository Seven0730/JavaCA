package com.example.javaca.pojo;

import jakarta.persistence.*;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="courseId")
    private String courseId;
    @Column(name = "coursename")
    private String cousename;
    @Column(name = "credit")
    private Integer credit;
    @Column(name = "size")
    private Integer size;
    @Column(name="room")
    private String room;
    @Column(name="compulsory")
    private Boolean compulsory;
    @ManyToOne(fetch = FetchType.EAGER)
    private Collage collage;
    @Column(name="startingtime")
    private LocalTime startingtime;
    @Column(name="endingtime")
    private LocalTime endingtime;
    @Column(name="date")
    private String date;
    @ManyToMany(mappedBy = "courseList")
    private List<Student> studentList;
    @OneToMany(mappedBy = "course")
    private List<Grade> gradeList;
    @OneToMany(mappedBy = "course")
    private List<Enrollment> enrollmentList;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCousename() {
        return cousename;
    }

    public void setCousename(String cousename) {
        this.cousename = cousename;
    }

    public Integer getCredit() {
        return credit;
    }

    public void setCredit(Integer credit) {
        this.credit = credit;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public Boolean getCompulsory() {
        return compulsory;
    }

    public void setCompulsory(Boolean compulsory) {
        this.compulsory = compulsory;
    }

    public Collage getCollage() {
        return collage;
    }

    public void setCollage(Collage collage) {
        this.collage = collage;
    }

    public LocalTime getStartingtime() {
        return startingtime;
    }

    public void setStartingtime(LocalTime startingtime) {
        this.startingtime = startingtime;
    }

    public LocalTime getEndingtime() {
        return endingtime;
    }

    public void setEndingtime(LocalTime endingtime) {
        this.endingtime = endingtime;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }

    public List<Grade> getGradeList() {
        return gradeList;
    }

    public void setGradeList(List<Grade> gradeList) {
        this.gradeList = gradeList;
    }

    public List<Enrollment> getEnrollmentList() {
        return enrollmentList;
    }

    public void setEnrollmentList(List<Enrollment> enrollmentList) {
        this.enrollmentList = enrollmentList;
    }

    public Course() {
    }

    public Course(String courseId, String cousename, Integer credit, Integer size, String room, Boolean compulsory, Collage collage, LocalTime startingtime, LocalTime endingtime, String date, List<Student> studentList, List<Grade> gradeList, List<Enrollment> enrollmentList) {
        this.courseId = courseId;
        this.cousename = cousename;
        this.credit = credit;
        this.size = size;
        this.room = room;
        this.compulsory = compulsory;
        this.collage = collage;
        this.startingtime = startingtime;
        this.endingtime = endingtime;
        this.date = date;
        this.studentList = studentList;
        this.gradeList = gradeList;
        this.enrollmentList = enrollmentList;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
