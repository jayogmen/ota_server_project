package com.ota.service;

import com.ota.model.ArtifactInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Map;

@Slf4j
@Service
public class DashboardService {
    
    @Value("${ota.server.baseUrl}")
    private String otaServerBaseUrl;
    
    @Autowired
    private RestTemplate restTemplate;

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