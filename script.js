document.addEventListener('DOMContentLoaded', function() {
    const message1Button = document.getElementById('button1');
    const message2Button = document.getElementById('button2');
    const message3Button = document.getElementById('button3');
  
    // Add event listeners to buttons
    message1Button.addEventListener('click', function() {
      showMessage('Message 1 content goes here');
    });
  
    message2Button.addEventListener('click', function() {
      showMessage('Message 2 content goes here');
    });
  
    message3Button.addEventListener('click', function() {
      showMessage('Message 3 content goes here');
    });
  
    // Function to display message
    function showMessage(message) {
      // Hide all messages
      document.querySelectorAll('.message').forEach(msg => {
        msg.classList.remove('active');
      });
  
      // Display the selected message
      messageDisplay.textContent = message;
      messageDisplay.classList.add('active');
    }
  });