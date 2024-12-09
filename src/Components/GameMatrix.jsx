import React, { useEffect, useState } from "react";

const GameMatrix = () => {
  const rows = 10;
  const cols = 10;

  const matrix = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );

  const [activeMatrixIndex, setActiveMatrixIndex] = useState([1, 1]);
  const [activeCursorIndex, setActiveCursorIndex] = useState([0, 0]);

  const timeoutRef = React.useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      setActiveCursorIndex(([rowIndex, colIndex]) => {
        switch (e.key) {
          case "h":
            return [rowIndex, Math.max(0, colIndex - 1)];
          case "l":
            return [rowIndex, Math.min(cols - 1, colIndex + 1)];
          case "j":
            return [Math.min(rows - 1, rowIndex + 1), colIndex];
          case "k":
            return [Math.max(0, rowIndex - 1), colIndex];
          default:
            return [rowIndex, colIndex];
        }
      });
    };
    const changeActiveMatrixIndex = () => {
      const newRowIndex = generateRandomNumber(0, rows - 1);
      const newColIndex = generateRandomNumber(0, cols - 1);

      setActiveMatrixIndex([newRowIndex, newColIndex]);
      clearTimeout(timeoutRef.current);
    };

    if (
      activeCursorIndex[0] === activeMatrixIndex[0] &&
      activeCursorIndex[1] === activeMatrixIndex[1]
    ) {
      changeActiveMatrixIndex();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCursorIndex, activeMatrixIndex]);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      const newRowIndex = generateRandomNumber(0, rows - 1);
      const newColIndex = generateRandomNumber(0, cols - 1);

      setActiveMatrixIndex([newRowIndex, newColIndex]);
    }, 5000);
  }, []);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="p-4 w-full flex flex-col items-center justify-center flex-1">
      <div className="grid grid-cols-100 gap-2">
        {matrix.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center justify-center gap-2"
          >
            {row.map((_, colIndex) => {
              const isActiveMatrixIndex =
                rowIndex === activeMatrixIndex[0] &&
                colIndex === activeMatrixIndex[1];

              const isActiveCursorIndex =
                rowIndex === activeCursorIndex[0] &&
                colIndex === activeCursorIndex[1];

              const isOverlapping =
                activeCursorIndex[0] === rowIndex &&
                activeCursorIndex[1] === colIndex &&
                activeMatrixIndex[0] === rowIndex &&
                activeMatrixIndex[1] === colIndex;

              return (
                <span
                  key={colIndex}
                  className={`text-primaryLight w-8 h-8 flex items-center justify-center border rounded-md border-blue ${
                    isActiveMatrixIndex ? "bg-red" : ""
                  } ${isActiveCursorIndex ? "bg-blue" : ""}  ${
                    isOverlapping ? "bg-green" : ""
                  }
                    `}
                >
                  {isActiveMatrixIndex ? "X" : isActiveCursorIndex ? "C" : ""}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameMatrix;
