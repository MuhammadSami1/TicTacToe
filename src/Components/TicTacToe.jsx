import { useState } from "react";
import React from "react";
import circle_icon from "../Components/Assets/circle.png";
import cross_icon from "../Components/Assets/cross.png";
import Title from "./Title";

const Button = () => {
  return (
    <button className="text-lg text-white my-5 bg-slate-800 rounded-3xl  px-6 py-3">
      Reset
    </button>
  );
};

const Tile = ({ num, Toogle }) => {
  return (
    <div
      className="border-2 cursor-pointer p-10  flex justify-center items-center"
      onClick={() => Toogle(num)}
    ></div>
  );
};

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const Toogle = (num) => {
    if (lock) {
      return 0;
    } else {
      const newData = [...data];
      if (count % 2 === 0) {
        newData[num] = "X";
      } else {
        newData[num] = "O";
      }
      data = newData;
      setCount(count + 1);

      const tileElement = document.getElementsByClassName("border-2")[num];
      tileElement.innerHTML = `<img src='${
        count % 2 === 0 ? cross_icon : circle_icon
      }'>`;
    }
  };

  return (
    <div className="text-center">
      <Title />
      <div className="py-10 bg-slate-600">
        <div className="flex justify-center items-center">
          <Tile num={0} Toogle={Toogle} />
          <Tile num={1} Toogle={Toogle} />
          <Tile num={2} Toogle={Toogle} />
        </div>
        <div className="flex justify-center items-center">
          <Tile num={3} Toogle={Toogle} />
          <Tile num={4} Toogle={Toogle} />
          <Tile num={5} Toogle={Toogle} />
        </div>
        <div className="flex justify-center items-center">
          <Tile num={6} Toogle={Toogle} />
          <Tile num={7} Toogle={Toogle} />
          <Tile num={8} Toogle={Toogle} />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default TicTacToe;
