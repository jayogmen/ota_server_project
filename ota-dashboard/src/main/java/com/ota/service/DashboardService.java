package com.ota.service;

import com.ota.model.ArtifactInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Map;
import java.util.HashMap;

@Slf4j
@Service
public class DashboardService {
    
    @Value("${ota.server.baseUrl}")
    private String otaServerBaseUrl;
    
    @Autowired
    private RestTemplate restTemplate;

    public Map<String, Object> getStatus() {
        log.info("Fetching dashboard status");
        Map<String, Object> status = new HashMap<>();
        try {
            status.put("status", "OK");
            status.put("message", "System is running");
            return status;
        } catch (Exception e) {
            log.error("Error fetching status: {}", e.getMessage());
            status.put("status", "ERROR");
            status.put("message", e.getMessage());
            return status;
        }
    }

    public Map<String, Object> getAllProjects() {
        try {
            return restTemplate.getForObject(
                otaServerBaseUrl + "/api/projects/all",
                Map.class
            );
        } catch (Exception e) {
            log.error("Error fetching projects", e);
            return Map.of();
        }
    }
}