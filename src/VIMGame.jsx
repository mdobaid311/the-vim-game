import GameControls from "./Components/GameControls";
import GameMatrix from "./Components/GameMatrix";
import GameOptions from "./Components/GameOptions";
import GameScore from "./Components/GameScore";

const VIMGame = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen p-8">
      <GameOptions />
      <GameScore />
      <GameMatrix />
      <GameControls />
    </div>
  );
};

export default VIMGame;
