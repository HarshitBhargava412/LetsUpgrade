const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const canvasCars = document.getElementById("myCanvasCars");
const ctxCars = canvasCars.getContext("2d");

var chart = new Chart(ctx, {
    // type: "bar",
    // type: "pie",
    // type: "doughnut",
    type: "polarArea",
    // type: "line",
    data: {
        labels: ["Python", "JavaScript", "Java", "Go", "React"],
        datasets: [
            {
                label: "Programming Language",
                data: [50, 45, 70, 65, 55],
                backgroundColor: ["red", "blue", "purple", "orange", "hotpink"],
                borderColor: ["hotpink", "orange", "red", "blue", "purple"],
                borderWidth: 5
            },
        ]
    },
    options: {
        responsive: false,
        layout: {
            padding: {
                top: 50,
                left: 50,
                bottom: 0,
                right: 50
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Programming Language Chart",
            },
            legend: {
                display: true,
                position: "bottom"
            }
        }
    }
});

var chartCars = new Chart(ctxCars, {
    // type: "bar",
    // type: "pie",
    // type: "doughnut",
    // type: "polarArea",
    type: "line",
    data: {
        labels: ["Audi", "Maruti Suzuki", "Rolls Royce", "Aston Martin", "BMW"],
        datasets: [
            {
                label: "Car Companies",
                data: [50, 45, 70, 65, 55],
                backgroundColor: ["red", "blue", "purple", "orange", "hotpink"],
                // borderColor: ["hotpink", "orange", "red", "blue", "purple"],
                borderWidth: 5
            },
        ]
    },
    options: {
        responsive: false,
        layout: {
            padding: {
                top: 50,
                left: 50,
                bottom: 0,
                right: 50
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Car Sales in Millions",
            },
            legend: {
                display: true,
                position: "bottom"
            }
        }
    }
});