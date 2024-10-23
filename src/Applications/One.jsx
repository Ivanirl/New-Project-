import { useState } from "react";

export default function One({ start }) {
  // const [start, started] = useState("p");

  if (start === false) {
    return <div className="hood">spaced</div>;
  } else if (start === true) {
    return <div className="hood">regular</div>;
  }
}
