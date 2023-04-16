import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Icon from "./Components/Icon";
const tikArray = new Array(9).fill("");
const App = () => {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  //play Again

  function playAgain() {
    tikArray.fill("");
    setIsCross(true);
    setWinMessage("");
  }

  function findWinner() {
    if (
      tikArray[0] == tikArray[1] &&
      tikArray[0] == tikArray[2] &&
      tikArray[0] != ""
    ) {
      setWinMessage(`Winner is ${tikArray[0]}`);
    } else if (
      tikArray[3] == tikArray[4] &&
      tikArray[3] == tikArray[5] &&
      tikArray[3] != ""
    ) {
      setWinMessage(`Winner is ${tikArray[3]}`);
    } else if (
      tikArray[6] == tikArray[7] &&
      tikArray[6] == tikArray[8] &&
      tikArray[6 != ""]
    ) {
      setWinMessage(`Winner is${tikArray[6]}`);
    } else if (
      tikArray[0] == tikArray[3] &&
      tikArray[0] == tikArray[6] &&
      tikArray[0] != ""
    ) {
      setWinMessage(`Winner is${tikArray[0]}`);
    } else if (
      tikArray[1] == tikArray[4] &&
      tikArray[1] == tikArray[7] &&
      tikArray[1] != ""
    ) {
      setWinMessage(`Winner is${tikArray[1]}`);
    } else if (
      tikArray[2] == tikArray[5] &&
      tikArray[2] == tikArray[8] &&
      tikArray[2] != ""
    ) {
      setWinMessage(`Winner is ${tikArray[2]}`);
    } else if (
      tikArray[1] == tikArray[4] &&
      tikArray[1] == tikArray[8] &&
      tikArray[1] != ""
    ) {
      setWinMessage(`Winner is ${tikArray[0]}`);
    } else if (
      tikArray[2] == tikArray[4] &&
      tikArray[2] == tikArray[6] &&
      tikArray[2] != ""
    ) {
      setWinMessage(`Winner is ${tikArray[2]}`);
    } else if (tikArray.indexOf("") == -1) {
      setWinMessage(`It's A Draw!!!!`);
    }
  }
  function noImposters(index) {
    if (winMessage) {
      return toast("Invalid Move!!!!");
    }
    if (tikArray[index] != "") {
      return toast("Invalid Move");
    } else if (tikArray[index] == "") {
      tikArray[index] = isCross == true ? "cross" : "circle";
      setIsCross(!isCross);
      findWinner();
      console.log(tikArray);
    }
  }

  return (
    <div>
      <ToastContainer />
      {winMessage ? (
        <div>
          <h1>{winMessage}</h1>
          <button onClick={playAgain}>Play Again</button>
        </div>
      ) : (
        <div>
          <h1>{isCross == true ? "Cross Chance" : "Circle Chance"}</h1>
        </div>
      )}
      <div className="grid">
        {tikArray.map((value, index) => (
          <div onClick={() => noImposters(index)}>
            <Icon user_choice={value} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
