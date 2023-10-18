import { ReactElement, createContext, useContext, useState } from "react";

interface IPlayerManagement {
  name: string;
  setName: (name: string) => void;
  playerNames: string[];
  setPlayerNames: (playerName: string[]) => void;
}

export function playerContext() {
  return useContext(AppContext);
}

const AppContext = createContext<IPlayerManagement>({
    name: "",
    setName: () => {},
    playerNames: [""],
    setPlayerNames: () => {},
  });
  
  
const PlayerManageContext = ({
    children,
  }: {
    children: ReactElement;
  }) => {
    const [name, setName] = useState<string>("");
    const [playerNames, setPlayerNames] = useState<string[]>([]);
  
    const playerManagement: IPlayerManagement = {
        name,
        setName,
        playerNames,
        setPlayerNames,
      };

      return (
        <AppContext.Provider value={playerManagement}>{children}</AppContext.Provider>
      )
    
  };

  export default PlayerManageContext
  
  