let theaterSeats = [
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
  ];
  
  function displayMessage(message) {
    document.getElementById('message').textContent = message;
  }
  
  function bookSeat(row, col) {
    if (theaterSeats[row][col] === 'O') {
      theaterSeats[row][col] = 'X';
      updateSeatStatus(row, col, 'booked');
      displayMessage(`Seat ${String.fromCharCode(65 + row)}${col + 1} has been booked.`);
    } else {
      displayMessage(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken.`);
    }
  }
  
  function updateSeatStatus(row, col, status) {
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
  
    if (status === 'booked') {
      seats[index].onclick = null;
    }
  }
  
  function selectRandomSeat() {
    const availableSeats = [];
  
    for (let row = 0; row < theaterSeats.length; row++) {
      for (let col = 0; col < theaterSeats[row].length; col++) {
        if (theaterSeats[row][col] === 'O') {
          availableSeats.push({ row, col });
        }
      }
    }
  
    if (availableSeats.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSeats.length);
      const { row, col } = availableSeats[randomIndex];
      bookSeat(row, col);
    } else {
      displayMessage('All seats are already booked!');
    }
  }
  
  function resetSeats() {
    theaterSeats = [
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ];
  
    const seats = document.getElementsByClassName('seat');
    for (let i = 0; i < seats.length; i++) {
      seats[i].classList.remove('booked');
      seats[i].classList.add('available');
      seats[i].onclick = function () {
        const row = Math.floor(i / 3);
        const col = i % 3;
        bookSeat(row, col);
      };
    }
  
    displayMessage('Seating chart has been reset.');
  }
  