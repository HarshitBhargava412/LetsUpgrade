const canvas = document.getElementById("board");
const dimension = canvas.getContext("2d");

// Normal Shapes

// dimension.fillStyle = "blue";
// dimension.fillRect(20, 20, 150, 150);
//
// dimension.fillStyle = "purple";
// dimension.fillRect(200, 20, 150, 150);


// Empty Shape

// dimension.lineWidth = 5;
// dimension.strokeStyle = "blue";
// dimension.strokeRect(20, 20, 150, 150);


// Coloring a big shape and a clearing a part

// dimension.fillRect(0, 0, 500, 500);
// dimension.clearRect(20, 20, 100, 100);


// Putting a text on the Canvas

// dimension.fillText("Hello World", 50, 50);


// Text with another Font

// dimension.font = '50px Arial';
// dimension.strokeText("Hello World", 50, 50);


// Drawing a Line
// Starting
// dimension.beginPath();
// dimension.moveTo(250, 250); // End Point
// dimension.lineTo(0, 0);// Start Point
// dimension.stroke();
//Ending

// Drawing a Circle
// dimension.arc(150, 150, 50, 0, Math.PI * 2);
// dimension.fillStyle = "purple";
// dimension.fill();

// Animation
const circle = {
    x: 50,
    y: 50,
    size: 50,
    dX: 5,
    dY: 4
};

function drawCircle() {
    dimension.beginPath();
    dimension.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    dimension.fillStyle = "purple";
    dimension.fill();
}

function updateCircle() {
    dimension.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();

    // Draw Position
    circle.x += circle.dX;
    circle.y += circle.dY;

    // Detect Left and Right Collision
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dX *= -1;
    }

    // Detect Top and Bottom Collision
    if(circle.y + circle.size > canvas.width || circle.y - circle.size < 0) {
        circle.dY *= -1;
    }

    requestAnimationFrame(updateCircle); // To Add Animation in Canvas
}
updateCircle();