package com.example.javaca.pojo;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="enrollment")
@Data
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="isReject")
    private Boolean isReject;
    @Column(name="isEnroll")
    private Boolean isEnroll;
    @Column(name="isFailed")
    private Boolean isFailed;
    @Column(name="isComplete")
    private Boolean isComplete;
    @ManyToOne
    private Student student;
    @ManyToOne(fetch = FetchType.EAGER)
    private Course course;

    public Enrollment(Boolean isReject, Boolean isEnroll, Boolean isFailed, Student student, Boolean isComplete,Course course) {
        this.isReject = isReject;
        this.isEnroll = isEnroll;
        this.isFailed = isFailed;
        this.student = student;
        this.course = course;
        this.isComplete= isComplete;
    }

    public Enrollment() {
    }

    @Override
    public String toString() {
        return "Enrollment{" +
                "id=" + id +
                ", isReject=" + isReject +
                ", isEnroll=" + isEnroll +
                ", isFailed=" + isFailed +
                ", student=" + student +
                ", course=" + course +
                '}';
    }
}
