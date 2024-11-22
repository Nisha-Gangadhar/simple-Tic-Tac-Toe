export default function Log({ turns }) {
  return (
    <>
      <ol id="log">
        {turns.map((turn, index) => (
          <li className="highlighted" key={index}>
            {turn.player} selected row {turn.square.row}, column
            {turn.square.col}
          </li>
        ))}
      </ol>
    </>
  );
}
