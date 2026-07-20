import { useState, useEffect } from "react";

const RotatingText = () => {
  // 1. The list of words you want to cycle through
  const words = ["affordable", "reliable", "global", "resilient"];

  // 2. State to track which word is currently active
  const [index, setIndex] = useState(0);

  // 3. State to handle the smooth fade in/out transition
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Set up a timer that runs every 3 seconds (3000ms)
    const timer = setInterval(() => {
      // Step A: Trigger the fade-out effect
      setIsFading(true);

      // Step B: Wait for the text to disappear, then change the word and fade back in
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length); // Moves to the next word
        setIsFading(false);
      }, 500); // 500ms matches the CSS transition speed below
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      style={{
        opacity: isFading ? 0 : 1, // Drops to 0 to become invisible, 1 to show
        transform: isFading ? "translateY(-10px)" : "translateY(0px)", // Slight upward lift
        transition: "all 0.5s ease-in-out", // The engine of the smooth fade
        display: "inline-block", // Crucial so the transform (movement) works
        color: "#ffffff", // Or any highlight color you want!
      }}
    >
      {words[index]}
    </span>
  );
};

export default RotatingText;
