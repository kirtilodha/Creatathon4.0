import React from "react";
import robo from "../images/robocut.png";

function Introduction(props) {

  return (
    <div>
      <div class="grid grid-cols-2">
        <div>
          <img src={robo} className="w-auto px-40 py-6 animate-pulse" />
        </div>

        <div className="m-auto px-20 text-2xl font-serif italic">
            <h4 className="text-2xl not-italic font-bold mb-3">Reliable | Hassle-free | User-friendly</h4>
          A self help robot which delivers medicine to patient bed, hassle free
          and easy to command. It scans the aruco marker on each patient bed and
          opens up the flap to provide particular medication. Our PharmEZ robo
          is capable of differentiating medicine based on command of user.
        </div>
      </div>
    </div>
  );
}

export default Introduction;
