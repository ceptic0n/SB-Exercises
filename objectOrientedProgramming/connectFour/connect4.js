/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
//my code goes here

class Player{
  constructor(color){
    this.color = color;
  }
  getColor(){
    return this.color;
  }
}







class Game{
  constructor(height = 6, width = 7, board = [], player1 = new Player("red"), player2 = new Player("blue")){
    this.height = height;
    this.width = width;
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.currPlayer = this.player1;
    this.gameOver = false;
    this.handleClick = this.handleClick.bind(this);

    this.makeBoard();
    this.makeHtmlBoard();
  }


  makeBoard(){
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width}));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');
  
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick);
  
    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
  
      board.append(row);
    }

    console.log(this.currPlayer.color);

  }

  removeCurrentBoard(){
    console.log("removeCurrentBoard()");
    const board = document.getElementById("board")
    for(let i = 0; i < this.height + 1; i ++){
      console.log(`removing ${i}`);
      board.removeChild(board.firstChild);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  /** placeInTable: update DOM to place piece into HTML table of board */

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.getColor();
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }
  
  //when the game ends, pause the event listener so there can be no more input
  endGame(msg) {
    alert(msg);
    
    //grab the coloumn top element
    const columnTop = document.getElementById("column-top");
    //remove its eventListener so the game can't continue
    columnTop.removeEventListener("click", this.handleClick);

    // this.removeCurrentBoard();
  }

  handleClick(evt) {

    if(this.gameOver) return;

    // get x from ID of clicked cell
    const x = +evt.target.id;
  
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
  
    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    
    // check for win
    if (this.checkForWin()) {
      this.gameOver = true;
      return this.endGame(`${this.currPlayer.color} Wins!!`);
    }
    
    // check for tie
    if (this.board.every(row => row.every(cell => cell))) {
      this.gameOver = true;
      return this.endGame('Tie!');
    }
      
    // switch players
    this.currPlayer = (this.currPlayer === this.player1) ? this.player2 : this.player1;
  
  }
  
  checkForWin() {
    const _win = (cells) => {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer
  
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      );
    }
  
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }


}


const startButton = document.getElementById("startButton");

startButton.addEventListener("click",function(e){
  e.preventDefault();
  
  const p1 = document.getElementById("player1");
  const p2 = document.getElementById("player2");

  const person1 = new Player(p1.value);
  const person2 = new Player(p2.value);


  const board = document.getElementById("board");
  board.innerHTML = "";

  new Game(6,7, [], person1, person2);
});