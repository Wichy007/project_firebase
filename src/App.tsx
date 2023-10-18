import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import Welcome from "./pages/WelcomePage";
import PlayerManageContext from "./appContext";

export default function App() {
  return (
    <div className="h-screen">
      <div className="h-full flex justify-center bg-gray-700">
        <PlayerManageContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/gamePage" element={<GamePage />} />
            </Routes>
          </BrowserRouter>
        </PlayerManageContext>
      </div>
    </div>
  );
}

