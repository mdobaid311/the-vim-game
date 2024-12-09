import {
  Grid3X3Icon,
  MoonIcon,
  SunDimIcon,
  SwordIcon,
  TimerIcon,
} from "lucide-react";
import { useState } from "react";

const GameOptions = () => {
  const timePresets = [30, 60, 90, 120];
  const difficultyPresets = ["Easy", "Medium", "Hard"];
  const matrixSizePresets = [10, 20, 30, 40];

  const [selectedTime, setSelectedTime] = useState(60);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");
  const [selectedMatrixSize, setSelectedMatrixSize] = useState(20);

  const [theme, setTheme] = useState("light");
  const handleThemeSwitcher = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex items-center gap-8 bg-gray-900 px-4 py-2 rounded-md text-primaryLight">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <TimerIcon size={18} />
          <span>Time</span>
          <div className="flex items-center">
            {timePresets.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-2 py-1 rounded-md ${
                  selectedTime === time ? "text-red" : "text-primaryLight"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <span>|</span>
        <div className="flex items-center gap-2">
          <SwordIcon size={18} />
          <span>Difficulty</span>
          <div className="flex items-center">
            {difficultyPresets.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-2 py-1 rounded-md ${
                  selectedDifficulty === difficulty
                    ? "text-red"
                    : "text-primaryLight"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
        <span>|</span>
        <div className="flex items-center gap-2">
          <Grid3X3Icon />
          <span>Matrix Size</span>
          <div className="flex items-center">
            {matrixSizePresets.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedMatrixSize(size)}
                className={`px-2 py-1 rounded-md ${
                  selectedMatrixSize === size
                    ? "text-red"
                    : "text-primaryLight"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <span>|</span>
        <div className="flex items-center gap-2">
          <button onClick={handleThemeSwitcher}>
            {theme === "dark" ? (
              <SunDimIcon size={18} />
            ) : (
              <MoonIcon size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOptions;
