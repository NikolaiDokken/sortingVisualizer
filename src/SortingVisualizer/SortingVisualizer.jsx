import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import Bubblesort from "./SortingAlgorithms/Bubblesort";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(10);

  useEffect(() => {
    resetArray();
    // console.log(testSortingAlgorithm());
  }, []);

  const resetArray = () => {
    var newArray = [];
    var maxValue = window.innerHeight - 50;
    var minValue = 10;

    for (var i = 0; i < arraySize; i++) {
      newArray.push(getRandomInt(minValue, maxValue));
    }
    setArray(newArray);
    var bars = document.getElementsByClassName("bar");
    for (var i = 0; i < bars.length; i++) {
      bars[i].className = "bar";
    }
  };

  const animate = animations => {
    var bars = document.getElementsByClassName("bar");
    for (var i = 0; i < animations.length; i++) {
      const { compare, swap, sorted } = animations[i];
      setTimeout(() => {
        bars[compare[0]].className = "bar comparing";
        bars[compare[1]].className = "bar comparing";
        setTimeout(() => {
          bars[compare[0]].className = "bar";
          bars[compare[1]].className = "bar";
          if (swap !== null) {
            bars[swap[0]].style.height = array[swap[1]] + "px";
            bars[swap[1]].style.height = array[swap[0]] + "px";
            var temp = array[swap[0]];
            array[swap[0]] = array[swap[1]];
            array[swap[1]] = temp;
            setArray(array.slice());
          }
          if (sorted) {
            bars[compare[1]].className = "bar sorted";
          }
        }, 30);
      }, i * 35);
    }
  };

  const testSortingAlgorithm = () => {
    var testSorted = Bubblesort(array.slice());
    var jsSorted = array.slice().sort((a, b) => a - b);

    if (testSorted.length !== jsSorted.length) return false;

    for (var i = 0; i < array.length; i++) {
      if (testSorted[i] !== jsSorted[i]) return false;
    }
    return true;
  };

  return (
    <div>
      <div>
        <button onClick={() => animate(Bubblesort(array.slice()))}>
          Bubblesort
        </button>
        <button onClick={() => resetArray()}>Generate New Array</button>
      </div>
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
