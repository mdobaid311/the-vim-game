import { StarIcon, TimerIcon } from "lucide-react";

const GameScore = () => {
  return (
    <div className="flex items-center justify-between gap-8 text-white w-full">
      <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-md font-medium">
        <StarIcon /> 100
      </div>
      <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-md font-medium">
        <TimerIcon /> 100
      </div>
    </div>
  );
};

export default GameScore;
