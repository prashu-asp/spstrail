import React from "react";
import { useState } from "react";
import "./Domains.css";
import Popup from "./Domain.jsx";

function MainDomain(props) {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="domain-name">
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.image} onClick={() => setPopUp(true)} />
      <Popup trigger={popUp} setTrigger={setPopUp}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </Popup>
    </div>
  );
}

export default MainDomain;
