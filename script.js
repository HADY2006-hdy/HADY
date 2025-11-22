function randomPercent() {
    return Math.floor(Math.random() * 100) + "%";
}

function randomStatus() {
    return Math.random() > 0.5 ? "Connected" : "Disconnected";
}

function updateDashboard() {
    document.getElementById("cpu").innerText = randomPercent();
    document.getElementById("memory").innerText = randomPercent();
    document.getElementById("network").innerText = randomStatus();
}

updateDashboard();
setInterval(updateDashboard, 2000); // Update setiap 2 detik
