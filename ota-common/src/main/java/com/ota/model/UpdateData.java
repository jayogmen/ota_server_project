package com.ota.model;

import lombok.Data;
import java.util.Map;

@Data
public class UpdateData {
    private String latestSHA;
    private String artifactUrl;
    private String updateType;
    private Map<String, Object> metadata;
    private String version;

    // Adding explicit setters in addition to @Data annotation to ensure compatibility
    public void setMetadata(Map<String, Object> metadata) {
        this.metadata = metadata;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
