let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
  let currentPlayer = 'X';
  
  function displayMessage(message) {
    document.getElementById('message').textContent = message;
  }
  
  function makeMove(row, col) {
    if (board[row][col] === ' ') {
      board[row][col] = currentPlayer;
      const cellIndex = row * 3 + col;
      const cells = document.getElementsByClassName('cell');
      cells[cellIndex].textContent = currentPlayer; 
      updateBoard();
      if (checkWinner()) {
        displayMessage(`Player ${currentPlayer} wins!`);
        disableBoard();
      } else if (isBoardFull()) {
        displayMessage("It's a draw!");
        disableBoard();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        displayMessage(`Player ${currentPlayer}'s turn`);
      }
    } else {
      displayMessage('Cell already taken.');
    }
  }
  
  
  function updateBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      const row = Math.floor(i / 3);
      const col = i % 3;
      cells[i].className = `cell ${board[row][col]}`;
      cells[i].onclick = board[row][col] === ' ' ? function () { makeMove(row, col); } : null;
    }
  }
  
  function checkWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
  
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[Math.floor(a / 3)][a % 3] !== ' ' && board[Math.floor(a / 3)][a % 3] === board[Math.floor(b / 3)][b % 3] && board[Math.floor(b / 3)][b % 3] === board[Math.floor(c / 3)][c % 3]) {
        return true;
      }
    }
    return false;
  }
  
  function isBoardFull() {
    return board.flat().every(cell => cell !== ' ');
  }
  
  function disableBoard() {
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
      cell.onclick = null;
    }
  }
  
  function resetGame() {
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  
    // Randomly select the starting player
    currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
    displayMessage(`Player ${currentPlayer}'s turn`);
  
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
      cell.textContent = ''; // Clear the text content of the cell
      cell.className = 'cell'; // Reset the cell's class
      cell.onclick = function () { // Re-enable the onclick handler
        const row = Math.floor(Array.from(cells).indexOf(cell) / 3);
        const col = Array.from(cells).indexOf(cell) % 3;
        makeMove(row, col);
      };
    }
  }
  