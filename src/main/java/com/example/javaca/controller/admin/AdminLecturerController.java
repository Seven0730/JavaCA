package com.example.javaca.controller.admin;

import com.example.javaca.dto.LecturerDTO;
import com.example.javaca.pojo.Student;
import com.example.javaca.service.Impl.adminService;
import com.example.javaca.service.Impl.lecturerService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/lecturer")
public class AdminLecturerController {
    @Resource
    private lecturerService lecturerService;
    @Resource
    private adminService adminService;

    @PostMapping("")
    public Student addStudent(@RequestBody Student student){
        int rolenumber = adminService.calculateTotalNumber(student.getRole().getId());
        rolenumber = rolenumber +1;
        Long collegenumber = student.getCollage().getId();
        String prefix = "";
        if(student.getRole().getId() == 1L) prefix="S";
        if(student.getRole().getId() == 2L) prefix="L";
        if(student.getRole().getId() == 3L) prefix="A";
        String studentID = prefix+collegenumber.toString()+String.format("%0" + 6 + "d", rolenumber)+"K";
        student.setStudentId(studentID);
        return lecturerService.insertLecturer(student);
    }

    @DeleteMapping("/{id}")
    public void deleteLecturer(@PathVariable("id") Long id){
        lecturerService.deleteLecturer(id);
    }

    @PutMapping("")
    public Student updateLecturer(@RequestBody Student lecturer){
        return lecturerService.updateLecturer(lecturer);
    }

    @GetMapping("")
    public List<LecturerDTO> findAll(){
        return lecturerService.getAllLecturers();
    }


}
