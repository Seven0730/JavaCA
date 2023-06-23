package com.example.javaca.pojo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ID;
    @Column(name="studentId")
    private String studentId;
    @Column(name = "name")
    private String Name;
    @Column(name="password")
    private String Password;
    @Column(name="email")
    private String Email;

    @ManyToOne
    private Role role;
    @ManyToOne
    private Collage collage;

    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(
            name="lecturer_course",
            joinColumns = @JoinColumn(name="studentId",referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name="courseId",referencedColumnName = "id")
    )
    private List<Course> courseList;

    @OneToMany(mappedBy = "student")
    private List<Grade> grade;
    @OneToMany(mappedBy = "student")
    private List<Enrollment> enrollmentList;
}
