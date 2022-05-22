let button = document.querySelector(".displayButton");
let display = document.querySelector(".displayText");

button.addEventListener("click", () => {
    // Accepting Input
    let text = document.getElementById("myInput").value;

    // Displaying the Input
    display.innerHTML = text;

    // Styling the Display
    display.style.color = "blue";
    display.style.backgroundColor = "green";
    display.style.padding = "10px";
    display.style.width = "400px";
});