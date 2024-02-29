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
window.onload = function() {

  const hourHand = document.querySelector('.hourHand');
      const minuteHand = document.querySelector('.minuteHand');
      const secondHand = document.querySelector('.secondHand');
      const time = document.querySelector('.time');
      const clock = document.querySelector('.clock');
      const audio = document.querySelector('.audio');
  
      function setDate(){
          const today = new Date();
          
          const second = today.getSeconds();
          const secondDeg = ((second / 60) * 360) + 360; 
          secondHand.style.transform = `rotate(${secondDeg}deg)`;
        
          audio.play();
          
          const minute = today.getMinutes();
          const minuteDeg = ((minute / 60) * 360); 
          minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  
          const hour = today.getHours();
          const hourDeg = ((hour / 12 ) * 360 ); 
          hourHand.style.transform = `rotate(${hourDeg}deg)`;
          
          time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';
  
          }
    
      setInterval(setDate, 1000);
   
  }

// // Update both clocks every second
// setInterval(() => {
//   updateDigitalClock();
//   clock()
// }, 1000);

displayRandomAffirmation()

updateGreeting()