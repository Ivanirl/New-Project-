import { useNavigate } from "react-router-dom";
import { useState } from "react";

import One from "../Applications/One";
import Two from "../Applications/Two";

export default function Home() {
  
  const bro = useNavigate();
  const [menuha, setMenuha] = useState(false)
  const [start, started] = useState(false);


  const taps = ()=>{
    started(!start) 
  }

  return (
    <div className="Homey">

      <section className="FirstAvenger">
        <div className="con">
          <h1 className={start? "" : "reggie"}>
            The main<br></br> Attraction <br></br> is here!
          </h1>
        </div>
        <One start = {start}/>
        <Two/>
      </section>
      <button className="boot" onClick={taps}>Click Me</button>
    </div>
  );
}
