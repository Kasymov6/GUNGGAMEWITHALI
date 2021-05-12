import React, { useState } from "react";
import "styles/globalStyles.scss";
import Game from "pages/Game";
import HomeScreen from "pages/HomeScreen";
import Routes from "Routes";
import "./styles.css";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [reward, setReward] = useState("");

  return (
    <main>
      <Routes />
      {gameStarted ? (
        <Game
          setGameFinished={setGameFinished}
          setReward={setReward}
          setGameStarted={setGameStarted}
        />
      ) : (
        <HomeScreen
          gameFinished={gameFinished}
          reward={reward}
          setGameStarted={setGameStarted}
        />
      )}
    </main>
  );
};

export default App;
