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

export function openWebsite(webURl) {
  window.open(webURl, "_blank");
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
function setDate(clockElement, timezoneOffset) {
  const hourHand = clockElement.querySelector('.hourHand');
  const minuteHand = clockElement.querySelector('.minuteHand');
  const secondHand = clockElement.querySelector('.secondHand');
  const time = clockElement.querySelector('.time');

  const today = new Date();
  const utc = today.getTime() + (today.getTimezoneOffset() * 60000);
  const localTime = new Date(utc + (3600000 * timezoneOffset));

  const second = localTime.getSeconds();
  const secondDeg = ((second / 60) * 360) + 360;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const minute = localTime.getMinutes();
  const minuteDeg = ((minute / 60) * 360);
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  const hour = localTime.getHours();
  const hourDeg = ((hour / 12 ) * 360);
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';
}

var googleButton = document.getElementById("Google")
googleButton.addEventListener("click", function() {
  openWebsite('https://www.google.com');
});

var gmailButton = document.getElementById("Gmail");
gmailButton.addEventListener("click", function() {
    openWebsite('https://www.gmail.com');
});

var youtubeButton = document.getElementById("Youtube");
youtubeButton.addEventListener("click", function() {
    openWebsite('https://www.youtube.com');
});

var canvaButton = document.getElementById("Canva");
canvaButton.addEventListener("click", function() {
    openWebsite('https://www.canva.com');
});

var googleDocsButton = document.getElementById("google-docs");
googleDocsButton.addEventListener("click", function() {
    openWebsite('https://docs.google.com/');
});

var googleScholarButton = document.getElementById("google-scholar");
googleScholarButton.addEventListener("click", function() {
    openWebsite('https://scholar.google.com/');
});

window.onload = function() {
    
  const jakartaClock = document.getElementById('jakarta-clock');
  const klClock = document.getElementById('KL-clock');

  setInterval(() => {
      setDate(jakartaClock, 7); // Jakarta is UTC+7
      setDate(klClock, 8); // Kuala Lumpur is UTC+8
  }, 1000);
      displayRandomAffirmation()
      updateGreeting()
  }
