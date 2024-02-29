import affirmations from './affirmations.js';
// Define a function to display a random affirmation
export function displayRandomAffirmation() {
    // Import the affirmations list from affirmations.js

    // Access a random affirmation from the list
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

    // Update the UI element with the affirmation text
    const affirmationElement = document.getElementById("affirmation");
    affirmationElement.textContent = randomAffirmation.affirmation;

    // Optionally, display the author and source if available
    if (randomAffirmation.author && randomAffirmation.source) {
        affirmationElement.textContent += ` - ${randomAffirmation.author} (${randomAffirmation.source})`;
    }
}
function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  
  const digitalClockContainer = document.getElementById('digitalClockContainer');
  digitalClockContainer.textContent = 'Digital time: ' + timeString;
}

function updateAnalogClock() {
  const canvas = document.getElementById('analogClockCanvas');
  const ctx = canvas.getContext('2d');
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw clock face
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Draw hour hand
  ctx.beginPath();
  const hourAngle = (hours % 12 + minutes / 60) * 30 * Math.PI / 180;
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + Math.cos(hourAngle) * radius * 0.5, centerY + Math.sin(hourAngle) * radius * 0.5);
  ctx.stroke();

  // Draw minute hand
  ctx.beginPath();
  const minuteAngle = minutes * 6 * Math.PI / 180;
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + Math.cos(minuteAngle) * radius * 0.7, centerY + Math.sin(minuteAngle) * radius * 0.7);
  ctx.stroke();

  // Draw second hand
  ctx.beginPath();
  const secondAngle = seconds * 6 * Math.PI / 180;
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + Math.cos(secondAngle) * radius * 0.9, centerY + Math.sin(secondAngle) * radius * 0.9);
  ctx.stroke();
}

function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = "";
  if (hours < 12) {
      greeting = "Good morning";
  } else if (hours < 18) {
      greeting = "Good afternoon";
  } else {
      greeting = "Good evening";
  }
  const name = "Chibs"; // Replace "Chibs" with the person's name
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = `${greeting}, ${name}`;
}

// Update both clocks initially
updateDigitalClock();
updateAnalogClock();

// Update both clocks every second
setInterval(() => {
  updateDigitalClock();
  updateAnalogClock();
}, 1000);

displayRandomAffirmation()

updateGreeting()