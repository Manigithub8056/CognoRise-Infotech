document.getElementById('start-timer').addEventListener('click', function () {
    const targetInput = document.getElementById('target-time');
    const targetTime = new Date(targetInput.value).getTime();
  
    if (isNaN(targetTime)) {
      alert('Please select a valid date and time!');
      return;
    }
  
    const display = document.getElementById('time-remaining');
  
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;
  
      if (difference <= 0) {
        clearInterval(countdownInterval);
        display.textContent = 'Countdown Complete!';
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      display.textContent = `${days}:${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  });