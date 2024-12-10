function updateRealTimeData() {
    // Simulate real-time data updates from server
    $.ajax({
        url: '/api/robot-analytics',
        method: 'GET',
        success: function(data) {
            // Update metrics
            updateMetricCard('totalRobots', data.totalRobots);
            updateMetricCard('healthyRobots', data.healthyRobots);
            updateMetricCard('updateSuccessRate', data.updateSuccessRate);
            updateMetricCard('pendingUpdates', data.pendingUpdates);

            // Update charts
            updateCharts(data);
        },
        error: function(err) {
            console.error('Error fetching real-time data:', err);
        }
    });
}

// Update every 30 seconds
setInterval(updateRealTimeData, 30000); 