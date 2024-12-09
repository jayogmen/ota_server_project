package com.ota.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import com.ota.service.DashboardService;

@Controller
public class WebController {
    
    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/ogmenrobotics")
    public String dashboard(Model model) {
        model.addAttribute("projects", dashboardService.getAllProjects());
        model.addAttribute("artifacts", dashboardService.getArtifacts());
        return "index";
    }
}
