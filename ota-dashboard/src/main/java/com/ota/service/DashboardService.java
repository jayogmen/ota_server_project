package com.ota.service;

import com.ota.model.ArtifactInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

@Slf4j
@Service
public class DashboardService {
    
    @Value("${ota.server.baseUrl}")
    private String otaServerBaseUrl;
    
    @Autowired
    private RestTemplate restTemplate;

    public Map<String, List<ArtifactInfo>> getArtifacts() {
        try {
            return restTemplate.getForObject(
                otaServerBaseUrl + "/api/artifacts",
                Map.class
            );
        } catch (Exception e) {
            log.error("Error fetching artifacts", e);
            return new HashMap<>();
        }
    }

    public Map<String, Object> getRobotStatus(String deviceId) {
        try {
            return restTemplate.getForObject(
                otaServerBaseUrl + "/api/diagnostic-status/" + deviceId,
                Map.class
            );
        } catch (Exception e) {
            log.error("Error fetching robot status for device: " + deviceId, e);
            return Map.of();
        }
    }

    public Map<String, Object> getBuildStatus(String deviceId, String projectName, String version) {
        try {
            return restTemplate.getForObject(
                otaServerBaseUrl + "/api/build-status/" + deviceId + "/" + projectName + "/" + version,
                Map.class
            );
        } catch (Exception e) {
            log.error("Error fetching build status", e);
            return Map.of();
        }
    }
}