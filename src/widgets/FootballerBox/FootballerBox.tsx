import React, { useState } from "react";
import FootballerItem from "./FootballerCard/FootballerCard";
import Button from "../../components/Button/button";
import "./_FootballerBox.scss";

export default function FootballerBox() {
  //The existing footballers

  const [footballers, setFootballer] = useState<string[]>([
    "Ronaldo",
    "Messi",
    "Mbappe",
    "Neymar",
    "Haaland",
    "Vini",
    "Bellingham",
  ]);

  //footballers input to get user value
  const [inputFootballer, setInput] = useState("");

  //deleting footballer
  const deleteFootballer = (index: number) => {
    setFootballer(footballers.filter((_, i) => i !== index));
  };

  // add footballer
  const addFootballer = () => {
    if (inputFootballer === "") {
      alert("You didnt enter a name!");
    } else {
      setFootballer([...footballers, inputFootballer]);
    }
  };

  //edit footballer
  const editFootballer = (footballer: string) => {
    if (inputFootballer === "") {
      alert("You didnt enter a name!");
    } else {
      setFootballer(
        footballers.map((f) => (f === footballer ? inputFootballer : f))
      );
    }
  };

  return (
    <div className="FootballerBox">
      <div className="setup-app">
        <h1>Footballers!</h1>
        <input
          type="text"
          id="footballerInput"
          value={inputFootballer}
          placeholder="Write your footballers name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        />
        <Button title="Add" handleClick={addFootballer}></Button>{" "}
        <Button
          title="Reset"
          handleClick={() =>
            setFootballer([
              "Ronaldo",
              "Messi",
              "Mbappe",
              "Neymar",
              "Haaland",
              "Vini",
              "Bellingham",
            ])
          }
        />
      </div>

      <div className="footballercards">
        {footballers.map((footballer, index) => (
          <FootballerItem
            key={`${index}-${footballer}`}
            index={index}
            footballerName={footballer}
            deleteFootballer={deleteFootballer}
            editFootballer={editFootballer}
          />
        ))}
      </div>
    </div>
  );
}
