
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let current = Math.random() < 0.5 ? 'X' : 'O';
let gameOver = false;

function drawBoard() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    ctx.lineWidth = 5;
    for (let i = 1; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 166, 0);
        ctx.lineTo(i * 166, 500);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * 166);
        ctx.lineTo(500, i * 166);
        ctx.stroke();
    }
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[r][c]) {
                ctx.font = '100px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(board[r][c], c * 166 + 83, r * 166 + 83);
            }
        }
    }
}

function setHeader(text) {
    document.getElementById('shithead').innerText = text;
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return board[i][0];
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return board[0][i];
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
    if (board.flat().every(x => x)) return 'T';
    return null;
}

function handleClick(e) {
    if (gameOver) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const row = Math.floor(y / 166.66);
    const col = Math.floor(x / 166.66);
    if (board[row][col]) return;
    board[row][col] = current;
    drawBoard();
    let winner = checkWin();
    if (winner) {
        gameOver = true;
        if (winner === 'T') setHeader('Tie');
        else setHeader(winner + ' wins');
    } else {
        current = current === 'X' ? 'O' : 'X';
        setHeader(current + "'s turn");
    }
}

document.getElementById('canvas').addEventListener('click', handleClick);
drawBoard();
setHeader(current + "'s turn");