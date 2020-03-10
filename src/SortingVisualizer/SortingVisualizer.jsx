import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(20);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    var newArray = [];
    var maxValue = window.innerHeight - 50;
    var minValue = 10;

    for (var i = 0; i < arraySize; i++) {
      newArray.push(getRandomInt(minValue, maxValue));
    }
    setArray(newArray);
  };

  return (
    <div>
      <div>Navbar</div>
      <div id="bar-container" className="bar-container">
        {array.map((bar, index) => (
          <div
            className="bar"
            style={{
              height: bar + "px",
              width:
                (document.getElementById("bar-container").clientWidth -
                  2 * arraySize) /
                  arraySize +
                "px"
            }}
            key={index}
          >
            {(document.getElementById("bar-container").clientWidth -
              2 * arraySize) /
              arraySize >
            30
              ? bar
              : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
