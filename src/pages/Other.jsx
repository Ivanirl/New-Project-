import Card from "../components_oriflame/Card";
import Pdata from "./Data.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pseudo from "./NBA_Cards.playercards.json";

export default function Ori() {
  const [stat, getStat] = useState("");
  const [updated, setUpdated] = useState(stat);

  const poop = Pdata.LeBron;

  const send = (event) => {
    getStat(event.target.value);
    console.log(stat);
  };

  const sendHelper = () => {
    setUpdated(stat);
    soap;
  };

  const soap = Pseudo.find((obj) => {
    return obj.firstName === stat;
  });

  return (
    <div className="containerr">
      <form className="dataEntry">
        <input
          type="text"
          className="pData"
          onChange={send}
          value={stat}
        ></input>
        <button onClick={send}>Search</button>
      </form>

      <Card
        key={poop.id}
        firstname={poop.firstname}
        lastname={poop.lastname}
        attack={poop.attack}
        defense={poop.defense}
        stamina={poop.stamina}
        accuracy={poop.accuracy}
        passing={poop.passing}
        handles={poop.handles}
        overall={poop.overall}
      />
      <div>{stat}</div>
      <button onClick={sendHelper}></button>
    </div>
  );
}
