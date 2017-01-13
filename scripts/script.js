window.onload = function() {

    setTimeout(function() {
        document.body.style.overflow = 'visible';
        document.getElementById("loader").style.display = "none";

    }, 1000);

    var ctx = document.getElementById("timeline-chart").getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["July 15", "Aug 15", "Sept 15", "Oct 15", "Nov", "Dec", "Jan 16", "Feb 16", "March 16", "April 16", "May 16",
                "June 16", "July 16", "Aug 16", "Sept 16", "Oct 16", "Nov 16", "Dec 16"
            ],
            datasets: [{
                label: 'Not a 100hr/week guy but a persistant one. Data via WakaTime plugin.',
                data: [31, 68, 152, 85, 123, 134, 146, 110, 171, 129, 145, 155, 127, 148, 166, 178, 166, 90],
                backgroundColor: [
                    'rgba(0,0,0, 0.2)'
                ],
                borderColor: [
                    'rgba(0,0,0,1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Monthwise hours spent Programming'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'Been continuously hitting code editor from July 15'
            }
        }
    });


}
