import { ReactElement } from "react";
import PlayerName from "../components/PlayerName";

const Welcome  = (): ReactElement => {
    return (
        <div className="flex flex-col py-5">
            <h1 className="text-center text-yellow-500 text-2xl">Welcome to <br/> guess number game</h1>
            <PlayerName/>
        </div>
    )
}

export default Welcome