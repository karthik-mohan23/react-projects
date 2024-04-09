import { useEffect, useState } from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function ColorGuesser() {
  const [colorArray, setColorArray] = useState([]);
  const [guessedColor, setGuessedColor] = useState(null);
  const [resultText, setResultText] = useState("");

  useEffect(() => {
    generateColorsArray();
  }, []);

  const generateColorsArray = () => {
    const correctColor = getRandomColor();
    setGuessedColor(correctColor);
    const shuffledColors = [
      getRandomColor(),
      correctColor,
      getRandomColor(),
    ].sort(() => Math.random() - 0.5);
    setColorArray(shuffledColors);
  };

  const handleClick = (color) => {
    if (color === guessedColor) {
      generateColorsArray();
      setResultText("It is correct");
      return;
    }
    setResultText("It is Incorrect");
  };

  if (colorArray.length === 0) {
    return "Loading...";
  }

  return (
    <main>
      <div
        className="border border-black w-52 h-52"
        style={{ backgroundColor: guessedColor }}></div>
      <div className="flex gap-5">
        {colorArray.map((arr) => {
          return (
            <button
              key={arr}
              onClick={() => handleClick(arr)}
              className="border border-black px-2 py-1">
              {arr}
            </button>
          );
        })}
      </div>
      {resultText && <p>{resultText}</p>}
    </main>
  );
}
