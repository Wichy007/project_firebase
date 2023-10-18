import { ReactElement, useEffect, useRef, useState } from "react";
import { playerContext } from "../appContext";

const PlayerTurn = (): ReactElement => {
  const { playerNames } = playerContext();
  const inputFeild = useRef<HTMLInputElement>(null);

  const [playerTurn, setPlayerTurn] = useState<string>();
  const [result, setResult] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [lessOrMore, setLessOrMore] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isMoreThanFive, setIsMoreThanFive] = useState<boolean>(false);
  const [answers, setAnswers] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    randomStartPlayerAndAnswer();
  }, []);

  useEffect(() => {
    if (result.length === 5) {
      setIsMoreThanFive(true);
    }
  }, [result]);

  useEffect(() => {
    nextPlayer();
  }, [randomNumber]);

  const randomStartPlayerAndAnswer = () => {
    setRandomNumber(Math.floor(Math.random() * playerNames.length));
    setPlayerTurn(playerNames[randomNumber]);
    setAnswers(Math.floor(Math.random() * 101));
  };

  const nextPlayer = () => {
    if (randomNumber > playerNames.length - 1) {
      setPlayerTurn(playerNames[0]);
      setRandomNumber(0);
      return;
    }
    setPlayerTurn(playerNames[randomNumber]);
  };

  const handleOk = (answer: string): void => {
    if (+answer > +answers) {
      setLessOrMore([...lessOrMore, "มากไปหน่อยนะ"]);
    } else if (+answer < +answers) {
      setLessOrMore([...lessOrMore, "น้อยไปสู"]);
    } else {
      setLessOrMore([...lessOrMore, "ถูกต้อง เก่งมาก"]);
      setIsCorrect(true);
    }
    setResult([...result, answer]);
    setInput("");
    setRandomNumber((old) => ++old);
    inputFeild.current?.focus();
  };

  const handleRestart = () => {
    randomStartPlayerAndAnswer();
    setIsCorrect(false);
    setLessOrMore([]);
    setInput("");
    setResult([]);
    setIsMoreThanFive(false);
  };

  return (
    <div>
      <div className="bg-gray-200">
        <h3>player's turn : {playerTurn}</h3>
        <ul>
          <li>
            {result[0] === undefined ? "-" : `${result[0]}   ${lessOrMore[0]}`}
          </li>
          <li>
            {result[1] === undefined ? "-" : `${result[1]}   ${lessOrMore[1]}`}
          </li>
          <li>
            {result[2] === undefined ? "-" : `${result[2]}   ${lessOrMore[2]}`}
          </li>
          <li>
            {result[3] === undefined ? "-" : `${result[3]}   ${lessOrMore[3]}`}
          </li>
          <li>
            {result[4] === undefined ? "-" : `${result[4]}   ${lessOrMore[4]}`}
          </li>
        </ul>
      </div>
      <input
        ref={inputFeild}
        placeholder="your answer"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        className="my-10"
      />
      {isMoreThanFive ? null : (
        <button
          onClick={() => handleOk(input)}
          className="bg-white bg-opacity-50 rounded-2xl w-20 hover:bg-gray-100"
        >
          OK
        </button>
      )}
      {isCorrect ? <h1 className="bg-gray-200">ยินดีด้วยถูกแล้วววว</h1> : null}
      {isCorrect || isMoreThanFive ? (
        <>
          <button
            onClick={handleRestart}
            className="bg-white bg-opacity-50 rounded-2xl w-20 hover:bg-gray-100"
          >
            เล่นใหม่
          </button>
          <h1 className="bg-gray-200">เฉลยยยยยย {answers}</h1>
        </>
      ) : null}
    </div>
  );
};

export default PlayerTurn;
