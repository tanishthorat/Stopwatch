    const display = document.getElementById('display');
    const startBtn = document.getElementById('btnstart');
    const stopBtn = document.getElementById('btnstop');
    const resetBtn = document.getElementById('btnreset');

    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    function formatTime(time) {
      let hours = Math.floor(time / (60 * 60 * 1000));
      let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
      let seconds = Math.floor((time % (60 * 1000)) / 1000);
      let milliseconds = Math.floor(time % 1000);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }

    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
      }, 10);
      startBtn.classList.add("active");
      stopBtn.classList.remove("stopActive");
      startBtn.disabled = true;
      stopBtn.disabled = false;
    }

    function stopTimer() {
      clearInterval(timerInterval);
      startBtn.classList.remove("active");
      stopBtn.classList.add("stopActive");
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }

    function resetTimer() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      display.textContent = formatTime(elapsedTime);
      startBtn.classList.remove("active");
      stopBtn.classList.remove("stopActive");
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    //animation// 

    // Get the button element
const myButton1 = document.getElementById('btnstart');
const myButton2 = document.getElementById('btnstop');
const myButton3 = document.getElementById('btnreset');

// Add a click event listener to the button

//for button ONE
myButton1.addEventListener('click', function() {
  // Add the "clicked" class to the button
  myButton1.classList.add('clicked');
  
  // Remove the "clicked" class after the animation is complete
  setTimeout(function() {
    myButton1.classList.remove('clicked');
  }, 1000); // Set the timeout to be the same duration as the animation
});

//for button TWO
myButton2.addEventListener('click', function() {
  // Add the "clicked" class to the button
  myButton2.classList.add('clicked');
  
  // Remove the "clicked" class after the animation is complete
  setTimeout(function() {
    myButton2.classList.remove('clicked');
  }, 1000); // Set the timeout to be the same duration as the animation
});


//for button THREE
myButton3.addEventListener('click', function() {
  // Add the "clicked" class to the button
  myButton3.classList.add('clicked');
  
  // Remove the "clicked" class after the animation is complete
  setTimeout(function() {
    myButton3.classList.remove('clicked');
  }, 1000); // Set the timeout to be the same duration as the animation
});


    // 