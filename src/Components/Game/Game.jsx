import React, { useState } from 'react';
import Board from '../Board/Board.jsx';
import './game.css'
import calculateWinner from '../../helper.js'

const Game = () => {

   const [board, setBoard] = useState(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(true);
   const winner = calculateWinner(board)

   const handleClick = index => {
      const copyBoard = [...board]

      if (winner || copyBoard[index]) { return null }

      copyBoard[index] = xIsNext ? 'X' : 'O'

      setBoard(copyBoard)
      setXIsNext(!xIsNext)
   }

   const startNewGame = () => {
      return (
         <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Нова гра</button>
      )
   }

   return (
      <div className='game'>
         {startNewGame()}
         <Board squares={board} click={handleClick} />
         <p className='game__info'>
            {winner ? 'Переможець ' + winner : 'Хід гравця ' + (xIsNext ? 'X' : 'O')}
         </p>
      </div>
   );
}

export default Game;
