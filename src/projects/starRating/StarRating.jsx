import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (num) => {
    setRating(num);
  };

  const handleMouseOver = (num) => {
    setHover(num);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <main>
      <div className="flex">
        {Array.from([1, 2, 3, 4, 5], (num) => (
          <FaStar
            size={25}
            key={num}
            onMouseOver={() => handleMouseOver(num)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(num)}
            className={`${(hover || rating) >= num ? "text-yellow-400" : ""}`}
          />
        ))}
      </div>
    </main>
  );
}
