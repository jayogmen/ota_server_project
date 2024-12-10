package com.ota.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import com.ota.service.DashboardService;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;

@Controller
public class WebController {
    
    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/ogmenrobotics")
    public String dashboard(Model model) {
        // Get all artifacts
        Map<String, List<ArtifactInfo>> artifacts = dashboardService.getArtifacts();
        model.addAttribute("artifacts", artifacts);

        // Get robot statuses for known devices
        List<String> deviceIds = Arrays.asList("vcopter", "vrover", "vturtle", "windows-test");
        Map<String, Map<String, Object>> robotStatuses = new HashMap<>();
        
        for (String deviceId : deviceIds) {
            robotStatuses.put(deviceId, dashboardService.getRobotStatus(deviceId));
        }
        model.addAttribute("robotStatuses", robotStatuses);

        return "index";
    }
}
