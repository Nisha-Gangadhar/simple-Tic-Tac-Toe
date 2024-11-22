import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleClick() {
    console.log("clicked");
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleOnChange(e) {
    setPlayerName(e.target.value);
  }

  let editPlayerName = <span className="player-name"> {playerName}</span>;

  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handleOnChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"} </button>
    </li>
  );
}
