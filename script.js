document.getElementById("timeButton").addEventListener("click", function() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("timeDisplay").textContent = timeString;
});