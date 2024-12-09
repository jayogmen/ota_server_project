$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://your-server-endpoint.com/api/robot_data", // Replace with your server endpoint
        dataType: "json",
    }).done(function(data) {
        console.log(data); // Log the data to check its structure
        data.forEach(robot => {
            const robotName = robot.name; // Adjust according to your JSON structure
            const operational = robot.operational;
            const offline = robot.offline;
            const unknown = robot.unknown;

            const cardHtml = `
                <div class="col-md-4">
                    <div class="robot-card">
                        <h3>${robotName}</h3>
                        <p>Operational: <span class="status">${operational}</span></p>
                        <p>Offline: <span class="status">${offline}</span></p>
                        <p>Unknown: <span class="status">${unknown}</span></p>
                    </div>
                </div>
            `;
            $("#robot-cards").append(cardHtml);
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data: ", textStatus, errorThrown);
    });
});