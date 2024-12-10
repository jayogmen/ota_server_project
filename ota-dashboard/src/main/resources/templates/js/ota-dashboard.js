// WebSocket connection for real-time updates
let ws;
const serverUrl = 'ws://localhost:8080/ota/websocket';

function connectWebSocket() {
    ws = new WebSocket(serverUrl);
    
    ws.onopen = () => {
        console.log('Connected to OTA server');
        document.querySelector('.real-time-indicator').classList.add('connected');
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        updateDashboard(data);
    };

    ws.onclose = () => {
        document.querySelector('.real-time-indicator').classList.remove('connected');
        setTimeout(connectWebSocket, 5000); // Reconnect after 5 seconds
    };
}

// Initialize Charts
function initializeCharts() {
    // Update Status Chart
    const updateStatusCtx = document.getElementById('updateStatusChart').getContext('2d');
    window.updateStatusChart = new Chart(updateStatusCtx, {
        type: 'doughnut',
        data: {
            labels: ['Successful', 'In Progress', 'Failed'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#1cc88a', '#f6c23e', '#e74a3b']
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Robot Types Chart
    const robotTypesCtx = document.getElementById('robotTypesChart').getContext('2d');
    window.robotTypesChart = new Chart(robotTypesCtx, {
        type: 'pie',
        data: {
            labels: ['Type A', 'Type B', 'Type C'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#4e73df', '#36b9cc', '#1cc88a']
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Update History Chart
    const updateHistoryCtx = document.getElementById('updateHistoryChart').getContext('2d');
    window.updateHistoryChart = new Chart(updateHistoryCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Updates',
                data: [],
                borderColor: '#4e73df',
                tension: 0.1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Update dashboard with new data
function updateDashboard(data) {
    // Update summary cards
    document.getElementById('connectedRobots').textContent = data.connectedRobots;
    
    // Update charts
    updateStatusChart.data.datasets[0].data = [
        data.updateStatus.successful,
        data.updateStatus.inProgress,
        data.updateStatus.failed
    ];
    updateStatusChart.update();

    robotTypesChart.data.datasets[0].data = [
        data.robotTypes.typeA,
        data.robotTypes.typeB,
        data.robotTypes.typeC
    ];
    robotTypesChart.update();

    // Update active updates table
    updateActiveUpdatesTable(data.activeUpdates);
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    connectWebSocket();
}); 