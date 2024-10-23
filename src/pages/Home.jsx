import { useNavigate } from "react-router-dom";
import { useState } from "react";

import One from "../Applications/One";

export default function Home() {
  const bro = useNavigate();
  const [ment, setMent] = useState("Homey B");
  const [start, started] = useState(false);

  const taps = () => {
    started(!start);
  };

  const bingo = () => {
    setMent("");
  };

  return (
    <div className={ment ? "Homey A" : "Homey B"}>
      <section className="FirstAvenger">
        <div className="con">
          <h1 className={start ? "" : "reggie"}>
            The main<br></br> Attraction <br></br> is here!
          </h1>
        </div>
        <One start={start} />
      </section>
      <div className="wrapper">
        <button className="boot" onClick={taps}>
          Spacer
        </button>
        <button className="boot" onClick={bingo}>Toggler</button>
      </div>
    </div>
  );
}

//no clue where i copied these from but we'll figure it out lol.
//Nomad	3:46	Clairo	Charm	Alternative	0
// Sexy to Someone	3:28	Clairo	Charm	Alternative	0
// Second Nature	3:47	Clairo	Charm	Alternative	0
// Slow Dance	3:55	Clairo	Charm	Alternative	0
// Thank You	3:25	Clairo	Charm	Alternative	0
// Terrapin	3:00	Clairo	Charm	Alternative	0
// Juna	3:15	Clairo	Charm	Alternative	0
// Add Up My Love	3:25	Clairo	Charm	Alternative	0
// Echo	3:50	Clairo	Charm	Alternative	0
// Glory of the Snow	2:51	Clairo	Charm	Alternative	0
// Pier 4	3:25	Clairo	Charm	Alternative	0
// Intro	0:19	Kanye West	The College Dropout	Hip-Hop/Rap	0
// We Don't Care	4:00	Kanye West	The College Dropout	Hip-Hop/Rap	0
// Graduation Day	1:22	Kanye West	The College Dropout	Hip-Hop/Rap	0
// I'll Fly Away	1:10	Kanye West	The College Dropout	Hip-Hop/Rap	0
// Jesus Walks	3:14	Kanye West	The College Dropout	Hip-Hop/Rap	0
// Workout Plan	0:46	Kanye West	The College Dropout	Hip-Hop/Rap	0
// The New Workout Plan	5:23	Kanye West	The College Dropout	Hip-Hop/Rap	0
// School Spirit (Skit 1)	1:19	Kanye West	The College Dropout	Hip-Hop/Rap	0	1
// School Spirit	3:02	Kanye West	The College Dropout	Hip-Hop/Rap	0
// School Spirit (Skit 2)	0:44	Kanye West	The College Dropout	Hip-Hop/Rap	0	2
// Lil Jimmy (Skit)	0:54	Kanye West	The College Dropout	Hip-Hop/Rap	0	1
// Through the Wire	3:41	Kanye West	The College Dropout	Hip-Hop/Rap	0	1
// Family Business	4:39	Kanye West	The College Dropout	Hip-Hop/Rap	0	1
// Last Call	12:41	Kanye West	The College Dropout	Hip-Hop/Rap	0
// Breathe in Breathe Out	4:07	Kanye West & Ludacris	The College Dropout	Hip-Hop/Rap	0
// All Falls Down	3:44	Kanye West & Syleena Johnson	The College Dropout	Hip-Hop/Rap	0
// Spaceship	5:24	Kanye West, GLC & Consequence	The College Dropout	Hip-Hop/Rap	0
// Never Let Me Down	5:24	Kanye West, Jay-Z & J-Ivy	The College Dropout	Hip-Hop/Rap	0
// Two Words	4:26	Kanye West, Mos Def, Freeway & The Harlem Boys Choir	The College Dropout	Hip-Hop/Rap	0
// Get Em High	4:49	Kanye West, Talib Kweli & Common	The College Dropout	Hip-Hop/Rap	0
// Slow Jamz	5:16	Kanye West, Twista & Jamie Foxx	The College Dropout	Hip-Hop/Rap	0	2
// Habibi of Dubai	3:20	Mustang Legendary King	Habibi of Dubai		0	1
// Nina	4:20	Rapsody	Eve	Hip-Hop/Rap	0
// Cleo	4:00	Rapsody	Eve	Hip-Hop/Rap	0
// Aaliyah	3:54	Rapsody	Eve	Hip-Hop/Rap	0
// Oprah (feat. Leikeli47)	5:02	Rapsody	Eve	Hip-Hop/Rap	0
// Whoopi	3:13	Rapsody	Eve	Hip-Hop/Rap	0
// Serena	2:54	Rapsody	Eve	Hip-Hop/Rap	0
// Tyra	2:02	Rapsody	Eve	Hip-Hop/Rap	0
// Maya (feat. K.Roosevelt)	3:42	Rapsody	Eve	Hip-Hop/Rap	0
// Ibtihaj (feat. D'Angelo & GZA)	4:47	Rapsody	Eve	Hip-Hop/Rap	0
// Myrlie (feat. Mereba)	2:21	Rapsody	Eve	Hip-Hop/Rap	0
// Reyna's Interlude	3:49	Rapsody	Eve	Hip-Hop/Rap	0
// Michelle (feat. Elle Varner)	3:50	Rapsody	Eve	Hip-Hop/Rap	0
// Iman (feat. SiR & JID)	4:36	Rapsody	Eve	Hip-Hop/Rap	0
// Hatshepsut (feat. Queen Latifah)	3:16	Rapsody	Eve	Hip-Hop/Rap	0
// Sojourner (feat. J. Cole)	5:31	Rapsody	Eve	Hip-Hop/Rap	0
// Afeni (feat. PJ Morton)	5:53	Rapsody	Eve	Hip-Hop/Rap	0
// Born in the Wild	2:16	Tems	Born in the Wild	R&B/Soul	0	3
// Special Baby (Interlude)	0:59	Tems	Born in the Wild	R&B/Soul	0	3
// Burning	2:55	Tems	Born in the Wild	R&B/Soul	0	6
// Wickedest	2:37	Tems	Born in the Wild	R&B/Soul	0	4
// Love Me JeJe	2:58	Tems	Born in the Wild	R&B/Soul	0	16
// Get it Right (feat. Asake)	3:19	Tems	Born in the Wild	R&B/Soul	0	3
// Ready	3:45	Tems	Born in the Wild	R&B/Soul	0	2
// Gangsta	2:42	Tems	Born in the Wild	R&B/Soul	0	2
// Unfortunate	3:39	Tems	Born in the Wild	R&B/Soul	0	3
// Boy O Boy	2:52	Tems	Born in the Wild	R&B/Soul	0	4
// Forever	3:16	Tems	Born in the Wild	R&B/Soul	0	1
// Free Fall (feat. J. Cole)	3:12	Tems	Born in the Wild	R&B/Soul	0	4
// Voices in My Head (Interlude)	1:27	Tems	Born in the Wild	R&B/Soul	0	1
// Turn Me Up	3:37	Tems	Born in the Wild	R&B/Soul	0	1
// Me & U	3:13	Tems	Born in the Wild	R&B/Soul	0	2
// T-Unit	3:04	Tems	Born in the Wild	R&B/Soul	0	1
// You in My Face	4:29	Tems	Born in the Wild	R&B/Soul	0
// Hold On	4:05	Tems	Born in the Wild	R&B/Soul	0	5
