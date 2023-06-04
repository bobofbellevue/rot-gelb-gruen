// NOTE TO REVIEWER:
// This is a German traffic light.
// German traffic lights flash red and yellow together briefly before turning green.
// It means: get ready to go.
// Cycling as follows:
// 3 seconds green, 1 second yellow, 2.5 seconds red, 0.5 seconds red + yellow, back to green
import { useState, useEffect } from "react";
import "./AmpelKoerper.css";

export function AmpelKoerper() {
  const [index, stellIndex] = useState(0);

  useEffect(() => {
    const intervall = setInterval(() => {
      let indexNeu = index + 1;
      if (indexNeu > 13) {
        indexNeu = 0;
      }
      stellIndex(indexNeu);
    }, 500);
    return () => clearInterval(intervall);
  });

  return (
    <div className="koerper">
      <div key="rot" className={index < 8 ? "licht rot aus" : "licht rot"}>
        Halt!
      </div>
      <div
        key="gelb"
        className={
          index === 6 || index === 7 || index === 13
            ? "licht gelb"
            : "licht gelb aus"
        }
      >
        Vorsicht
      </div>
      <div
        key="gruen"
        className={index < 6 ? "licht gruen" : "licht gruen aus"}
      >
        Los geht&lsquo;s!
      </div>
    </div>
  );
}
