import { ReactElement, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { playerContext } from "../appContext";

const PlayerName = (): ReactElement => {
    const { name, setName, setPlayerNames, playerNames } = playerContext();
  const inputFeild = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  const addNewPlayer = (name: string): void => {
    playerNames.push(name);
    setName("");
    inputFeild.current?.focus();
  };

  const handleRemove = (player: string): void => {
    setPlayerNames([...playerNames.filter((ele) => player !== ele)]);
  };

  const handleStart = (): void => {
    navigate("/gamePage");
  };

  return (
    <div className="bg-gray-200 bg-opacity-50 rounded-xl mt-20">
      <div className="p-10 flex flex-col">
        <ul>
          {playerNames.map((player) => {
            return (
              <li
                className="py-1 flex justify-between"
                key={player}
                id={player}
              >
                - {player}
                <button
                  className="bg-white bg-opacity-50 rounded-2xl w-20 hover:bg-gray-100"
                  onClick={() => handleRemove(player)}
                >
                  remove
                </button>
              </li>
            );
          })}
        </ul>
        <input
          className="mt-6"
          type="text"
          placeholder="Add player name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          ref={inputFeild}
        />
        <button
          className="bg-white border-1 bg-opacity-50 rounded-2xl mt-5 hover:bg-gray-100"
          onClick={() => addNewPlayer(name)}
          disabled={name === "" ? true : false}
        >
          Add player name
        </button>
        {playerNames.length > 0 ? (
          <button
            onClick={handleStart}
            className="bg-white border-1 bg-opacity-50 rounded-2xl mt-5 hover:bg-gray-100"
          >
            start
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PlayerName;
