document.addEventListener('DOMContentLoaded', function() {
    // Sample data for 10 robots including error states
    const robotData = {
        totalRobots: 10,
        healthyRobots: 6,
        errorRobots: 2,
        warningRobots: 2,
        updateSuccessRate: 80,
        pendingUpdates: 3,
        robotTypes: {
            testVersion: { total: 3, error: 1 },
            betaVersion: { total: 4, error: 1 },
            ogmenVersion: { total: 3, warning: 1 }
        },
        updateTypes: {
            fullImage: { success: 3, failed: 1 },
            component: { success: 3, failed: 1 },
            configuration: { success: 1, failed: 1 }
        },
        healthStatus: {
            healthy: 6,
            warning: 2,
            critical: 2
        },
        errorDistribution: {
            hardware: 3,
            software: 2,
            network: 2,
            battery: 1
        },
        monthlyErrors: {
            hardware: [2, 1, 3, 2, 1, 2, 3, 2, 1, 2, 1, 2],
            software: [1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1],
            network: [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2]
        }
    };

    // Add Error Status Chart
    new Chart(document.getElementById('errorDistributionChart'), {
        type: 'pie',
        data: {
            labels: ['Hardware', 'Software', 'Network', 'Battery'],
            datasets: [{
                data: [
                    robotData.errorDistribution.hardware,
                    robotData.errorDistribution.software,
                    robotData.errorDistribution.network,
                    robotData.errorDistribution.battery
                ],
                backgroundColor: ['#e74a3b', '#f6c23e', '#4e73df', '#1cc88a']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Error Distribution by Type'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Error Trend Chart
    new Chart(document.getElementById('errorTrendChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Hardware Errors',
                data: robotData.monthlyErrors.hardware,
                borderColor: '#e74a3b',
                fill: false
            }, {
                label: 'Software Errors',
                data: robotData.monthlyErrors.software,
                borderColor: '#f6c23e',
                fill: false
            }, {
                label: 'Network Errors',
                data: robotData.monthlyErrors.network,
                borderColor: '#4e73df',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Errors'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Update DOM elements with current statistics
    document.getElementById('totalRobots').textContent = robotData.totalRobots;
    document.getElementById('healthyRobots').textContent = robotData.healthyRobots;
    document.getElementById('updateSuccessRate').textContent = robotData.updateSuccessRate + '%';
    document.getElementById('pendingUpdates').textContent = robotData.pendingUpdates;

    // Robot Distribution Chart
    new Chart(document.getElementById('robotDistributionChart'), {
        type: 'doughnut',
        data: {
            labels: ['Test Version', 'Beta Version', 'Ogmen Version'],
            datasets: [{
                data: [
                    robotData.robotTypes.testVersion.total,
                    robotData.robotTypes.betaVersion.total,
                    robotData.robotTypes.ogmenVersion.total
                ],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc']
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Update Types Chart
    new Chart(document.getElementById('updateTypesChart'), {
        type: 'doughnut',
        data: {
            labels: ['Full Image', 'Component', 'Configuration'],
            datasets: [{
                data: [
                    robotData.updateTypes.fullImage.success,
                    robotData.updateTypes.component.success,
                    robotData.updateTypes.configuration.success
                ],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc']
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Health Status Chart
    new Chart(document.getElementById('healthStatusChart'), {
        type: 'doughnut',
        data: {
            labels: ['Healthy', 'Warning', 'Critical'],
            datasets: [{
                data: [
                    robotData.healthStatus.healthy,
                    robotData.healthStatus.warning,
                    robotData.healthStatus.critical
                ],
                backgroundColor: ['#1cc88a', '#f6c23e', '#e74a3b']
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Data Exchange Trend
    new Chart(document.getElementById('dataExchangeChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Data In (MB)',
                data: robotData.monthlyData.dataIn,
                borderColor: '#4e73df',
                fill: true,
                backgroundColor: 'rgba(78, 115, 223, 0.1)'
            }, {
                label: 'Data Out (MB)',
                data: robotData.monthlyData.dataOut,
                borderColor: '#1cc88a',
                fill: true,
                backgroundColor: 'rgba(28, 200, 138, 0.1)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Data Transfer (MB)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}); 