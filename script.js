function fetchData() {
    // Simulating a fetch from an IoT device or API
    const simulatedData = {
        airQuality: Math.floor(Math.random() * 100) + " AQI", // Simulated Air Quality Index
        temperature: (Math.random() * 35 + 15).toFixed(2) + " °C", // Simulated Temperature
        humidity: (Math.random() * 100).toFixed(2) + " %", // Simulated Humidity
        noiseLevel: (Math.random() * 100).toFixed(2) + " dB", // Simulated Noise Level
    };

    document.getElementById("airQuality").innerText = simulatedData.airQuality;
    document.getElementById("temperature").innerText = simulatedData.temperature;
    document.getElementById("humidity").innerText = simulatedData.humidity;
    document.getElementById("noiseLevel").innerText = simulatedData.noiseLevel;
}

// Function to refresh data
function refreshData() {
    fetchData();
}

// Initial data fetch
window.onload = fetchData;
