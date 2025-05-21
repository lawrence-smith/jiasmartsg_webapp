const scenarios = {
  welcome: {
    title: "Welcome Home Lighting",
    devices: [
      { name: "Motion Sensor", brand: "Aqara", price: 25 },
      { name: "Smart Bulb", brand: "IKEA", price: 15 }
    ],
    tips: [
      "Install the motion sensor near your front door.",
      "Ensure your smart bulb is connected to a hub or compatible app.",
      "Test detection range to avoid false triggers."
    ]
  },
  night: {
    title: "Good Night Mode",
    devices: [
      { name: "Smart Plug", brand: "Aqara", price: 20 },
      { name: "Smart Lock", brand: "Yale", price: 200 }
    ],
    tips: [
      "Set a bedtime scene that turns off all devices.",
      "Ensure your smart lock is integrated with your home system.",
      "Add a voice command for quick access."
    ]
  },
  away: {
    title: "Away Mode Security",
    devices: [
      { name: "Smart Bulb", brand: "IKEA", price: 15 },
      { name: "Smart Hub", brand: "Aqara", price: 50 }
    ],
    tips: [
      "Schedule lights to turn on/off randomly.",
      "Ensure your hub is online when you're away.",
      "Use camera integration if possible."
    ]
  },
  voice: {
    title: "Voice Control Setup",
    devices: [
      { name: "Smart Speaker", brand: "Google Nest", price: 80 },
      { name: "Smart Plug", brand: "Aqara", price: 20 }
    ],
    tips: [
      "Link your devices to Google Assistant or Alexa.",
      "Use clear naming conventions for devices.",
      "Test voice commands regularly."
    ]
  },
  fan: {
    title: "Smart Fan Automation",
    devices: [
      { name: "Temperature Sensor", brand: "Aqara", price: 25 },
      { name: "Smart Plug", brand: "IKEA", price: 15 }
    ],
    tips: [
      "Place temperature sensor away from direct sunlight.",
      "Set a trigger rule for fan activation.",
      "Check the plug’s wattage rating."
    ]
  }
};

function showScenario(key) {
  const scenario = scenarios[key];
  if (!scenario) return;

  const total = scenario.devices.reduce((sum, d) => sum + d.price, 0);
  const deviceRows = scenario.devices.map(d =>
    `<tr><td>${d.name}</td><td>${d.brand}</td><td>$${d.price}</td></tr>`
  ).join("");

  const tipsList = scenario.tips.map(t => `<li>${t}</li>`).join("");

  document.getElementById("scenarioDisplay").innerHTML = `
    <h2>${scenario.title}</h2>
    <table class="device-table">
      <thead><tr><th>Device</th><th>Brand</th><th>Price (SGD)</th></tr></thead>
      <tbody>${deviceRows}</tbody>
    </table>
    <div class="total">Estimated Total: $${total}</div>
    <div class="setup-tips">
      <h3>Setup Tips</h3>
      <ul>${tipsList}</ul>
    </div>
  `;
}
