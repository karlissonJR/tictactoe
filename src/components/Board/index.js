import React, { useState } from 'react';

import Square from '../Square';

import './styles.css';

function Board() {

	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const winner = calculateWinner();

	function renderSquare(index) {
		return <Square
				value={squares[index]}
				onClick={() => handleClick(index)}
			/>
	}

	function handleClick(index) {
		const squaresAux = squares.slice();

		if(calculateWinner() || squaresAux[index])
			return;

		squaresAux[index] = xIsNext ? 'X' : 'O';

		setSquares(squaresAux);
		setXIsNext(!xIsNext);
	}

	function calculateWinner() {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for(let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];

			if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
				return squares[a];
		}

		return null;
	}

	return(
		<div>
			{winner ? (
				<div className="status">Winner: {winner}</div>
			) : (
				<div className="status">Next player: {xIsNext ? 'X' : 'O'}</div>
			)}
			
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>

			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>

			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>

		</div>
	);
}

export default Board;
