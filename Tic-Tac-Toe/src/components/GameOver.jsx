export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {/* Display winner if available, otherwise show "DRAW" */}
      {winner ? <p> {winner} won!</p> : <p>DRAW</p>}

      <p>
        Ready for an Rematch
        <button onClick={onReset}> Rematch</button>
      </p>
    </div>
  );
}
