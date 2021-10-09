
const gameStatus = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = 'X';
let firstTurn = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];

let p1;
let draw;
let p2;
resetGame();

let pesanMenang = (color) => `<span style="color: ${color}">Player ${currentPlayer} Menang</span>`;
let pesanDraw = () => `Game Draw!`;
let pesanGiliran = () => `Giliran ${currentPlayer == 'X' ? '<span style="color: red">X</span>' : '<span style="color: green">O</span>'} Jalan`;

gameStatus.innerHTML = pesanGiliran();

const winConditions = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

// Restart game di klik
document.querySelector('.game--restart')
	.addEventListener('click', handleRestartGame);

// Cell di klik
document.querySelectorAll('.cell')
	.forEach(cell => addEventListener('click', handleClickCell));

function handleClickCell(e){
	let cell = e.target;
	let cellIndex = cell.getAttribute('data-cell-index');
	if(gameState[cellIndex] !== '' || !gameActive){
		return;
	}
	handleCellPlayed(cell, cellIndex);
	handleResultValidation();
}

function handleCellPlayed(cell, cellIndex){
	gameState[cellIndex] = currentPlayer;
	cell.innerHTML = `<span style="color: ${currentPlayer == 'X' ? 'red' : 'green'}">${currentPlayer}</span>`;
}

function handleResultValidation(){
	let roundWon = false;
	for(let i = 0; i <= 7; i++){
		let winCondition = winConditions[i];
		let a = gameState[winCondition[0]];
		let b = gameState[winCondition[1]];
		let c = gameState[winCondition[2]];
		if(a === '' || b === '' || c === ''){
			continue;
		}
		if(a === b && b === c){
			roundWon = true;
			break;
		}
	}

	// Jika Menang
	if(roundWon){
		let color = currentPlayer == 'X' ? 'red' : 'green';
		gameActive = false;
		gameStatus.innerHTML = pesanMenang(color);

		// Penambahan Skor
		if(currentPlayer == 'X'){
			document.querySelector('.p1--board').innerHTML = ++p1;
		}else{
			document.querySelector('.p2--board').innerHTML = ++p2;
		}

		// Jika menang 5 pertandingan Dialah pemenangnya
		if(p1 == 5){
			setTimeout(() => {
				alert('Player 1 (X) Winner');
				return resetGame();
			}, 500)
		}
		if(p2 == 5){
			setTimeout(() => {
				alert('Player 2 (O) Winner');
				return resetGame();
			}, 500)
		}

		return;
	}

	// Jika Seimbang
	let roundDraw = !gameState.includes('');
	if(roundDraw){
		gameActive = false;
		gameStatus.innerHTML = pesanDraw();
		document.querySelector('.draw--board').innerHTML = ++draw;
		return;
	}

	handlePlayerChange();
}

function handlePlayerChange(){
	currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
	gameStatus.innerHTML = pesanGiliran();
}

function handleRestartGame(){
	gameActive = true;
	firstTurn = firstTurn === 'X' ? 'O' : 'X';
	currentPlayer = firstTurn;
	gameState = ["", "", "", "", "", "", "", "", ""];
	gameStatus.innerHTML = pesanGiliran();
	document.querySelectorAll('.cell')
		.forEach(cell => cell.innerHTML = '');
}

function resetGame(){
	p1 = 0;
	draw = 0;
	p2 = 0;
	document.querySelector('.p1--board').innerHTML = p1;
	document.querySelector('.draw--board').innerHTML = draw;
	document.querySelector('.p2--board').innerHTML = p2;
}