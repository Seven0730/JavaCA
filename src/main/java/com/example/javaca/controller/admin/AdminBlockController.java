package com.example.javaca.controller.admin;

import com.example.javaca.dto.BlockDTO;
import com.example.javaca.pojo.Course;
import com.example.javaca.service.Impl.adminService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/block")
public class AdminBlockController {

    @Resource
    private adminService adminService;


    @GetMapping("")
    public List<BlockDTO> getRejectedStudents() {
        return adminService.getRejectedStudents();
    }

    @PutMapping("/{id}")
    public void rejectBlock(@PathVariable("id") Long id){
        adminService.updateIsRejectToTrue(id);
    }
}
