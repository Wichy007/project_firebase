import { ReactElement } from "react";
import PlayerTurn from "../components/PlayerTurn";

const GamePage = (): ReactElement => {
    return (
        <div>
            <h1 className="text-orange-500 text-2xl text-center">Let guess</h1>
            <PlayerTurn/>
        </div>
    )
}

export default GamePage