package com.example.javaca.pojo;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="role")
public class Role {
    //roles = 0 ,student; roles = 1 ,lecturer; roles = 2 administrator
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "role")
    private List<Student> student;

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

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    public Role(String name, List<Student> student) {
        this.name = name;
        this.student = student;
    }

    public Role() {
    }
}
