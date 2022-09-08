var ctx = $("#myChart")[0].getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Train Loss',
            borderColor: 'rgb(255, 99, 132)',
            data: []
        },
        {
            label: 'Train Metric',
            borderColor: 'rgb(127, 255, 212)',
            data: []
        }]
    },

    // Configuration options go here
    options: {
        animation: {
            duration: 0, // general animation time
        },
        hover: {
            intersect: false // VEDERE SULLE DOCUMENTAZIONI CHE COSA COMBINA
        },
        scales: {
            yAxes: [
                {
                    display: true,
                    ticks: {
                        max: 1,
                        beginAtZero: true   // minimum value will be 0.
                    }
                }
            ],
            xAxes: [
                {
                    display: false
                }
            ]
        }
    }
});

function addData(label, loss, metric) {
    chart.data.labels.push(label)
    chart.data.datasets[0].data.push(loss)
    chart.data.datasets[1].data.push(metric)

    chart.update();
}

function writeLog(log) {
    $("#log").html($("#log").html() + "<br />" + log)
}
