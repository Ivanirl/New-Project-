import { useNavigate } from "react-router-dom";
import { useState } from "react";

import poop from "../Resources/AIQT4810.JPG"
import poop2 from "../Resources/EXYS3788.JPG"

export default function Home() {
  
  const bro = useNavigate();
  const [menuha, setMenuha] = useState(false)


  return (
    <div className="Homey">

      <section className="FirstAvenger">
        <div className="con">
          <h1>
            Welcome<br></br> to your nightmare
          </h1>
          <span className="top">Hahahahaha</span>
        </div>
      </section>
    </div>
  );
}
