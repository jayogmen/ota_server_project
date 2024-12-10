// Initialize charts and data visualization
document.addEventListener('DOMContentLoaded', function() {
    // Robot Status Charts
    const robotCards = document.querySelectorAll('.robot-card');
    robotCards.forEach(card => {
        const statusElements = card.querySelectorAll('.status');
        statusElements.forEach(element => {
            const status = element.textContent;
            if (status === 'Good' || status === 'Normal') {
                element.style.color = '#28a745';
            } else if (status === 'Low' || status === 'Warning') {
                element.style.color = '#ffc107';
            } else {
                element.style.color = '#dc3545';
            }
        });
    });

    // Update Types Chart
    const updateTypesCtx = document.getElementById('updateTypesChart');
    if (updateTypesCtx) {
        new Chart(updateTypesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Full Image', 'Component', 'Configuration'],
                datasets: [{
                    data: [12, 19, 8],
                    backgroundColor: [
                        '#4e73df',
                        '#1cc88a',
                        '#36b9cc'
                    ]
                }]
            }
        });
    }

    // Build Status Chart
    const buildStatusCtx = document.getElementById('buildStatusChart');
    if (buildStatusCtx) {
        new Chart(buildStatusCtx, {
            type: 'bar',
            data: {
                labels: ['Success', 'Failed', 'Pending'],
                datasets: [{
                    label: 'Build Status',
                    data: [15, 5, 3],
                    backgroundColor: [
                        '#1cc88a',
                        '#e74a3b',
                        '#f6c23e'
                    ]
                }]
            }
        });
    }
}); 