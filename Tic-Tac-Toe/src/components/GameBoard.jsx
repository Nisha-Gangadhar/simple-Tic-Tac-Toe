// export default function GameBoard({ onSelectSq, activePlayerSymbol }) {
export default function GameBoard({ onSelectSq, board }) {
  // let gameBoard = initialGameBoard;

  // const [gameboard, setGameBoard] = useState(initialGameBoard);
  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevState) => {
  //     const updatedState = [...prevState].map((innerArray) => [...innerArray]);
  //     updatedState[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedState;
  //   });
  //   onSelectSq();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  // onClick={() => handleClick(rowIndex, colIndex)}
                  onClick={() => onSelectSq(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
