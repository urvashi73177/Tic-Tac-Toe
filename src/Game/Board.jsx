import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null)); //This represents the state of the game. It has an array of 9 elements each set to null initially.

  const [xTurn, setXtrun] = useState(true); //This sate represents the state of the player. It has a boolean value which is set to true initiality indication it is X's turn and when it turns false then it is O's turn.

  const checkWinner = () => {
    //This is a function which checks who is the winner by iterating over all the possible winnnig combinations and checking if the same palyer has made the move in each of those position.
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    /*{
            for (variable of iterable) {
  // code block to be executed
}

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.



}*/

    for (let logic of winnerLogic) { // This code is a for loop that iterates over each array within the winnerLogic array. Each array within winnerLogic represents a possible winning combination on the Tic Tac Toe board.
      console.log(logic);
      const [a, b, c] = logic; //For each iteration of the loop, the three elements in the array are assigned to the variables a, b, and c using array destructuring. These variables represent the indexes of the squares that need to be checked to see if a winning combination has been achieved.
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // if statement checks if the value of the square at index a is not null and if the same value is present in the squares at indexes b and c. If this condition is true, it means that a player has achieved a winning combination, and the function returns the value of the square at index a (which is either "X" or "O", depending on which player placed their move on that square).
      }
    }

    return false; //If the loop completes without finding any winning combinations, the function returns false, indicating that there is no winner on the board.
  };

  const isWinner = checkWinner(); //his line calls the checkWinner function to see if there is a winner on the board.

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = xTurn ? "X" : "O";
    setState(copyState);
    setXtrun(!xTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} won the game {""}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
