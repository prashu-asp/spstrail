import React from "react";
import domainDetails from "./domain.js";
import Ddomains from "./Domain.jsx";
import Dddomains from "./maindomain";
import "./Domains.css";

function createDomains(create) {
  const mystyle1 = {
    display: "grid",
    gridTemplateColumns: "3rem 250px 250px 3rem",
    gridTemplateRows: "3rem 250px 250px 3rem",
    gridGap: "1rem",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div>
      <Ddomains
        key={create.id}
        name={create.Name}
        description={create.Description}
      />
      <Dddomains style={mystyle1} name={create.Name} image={create.Image} />
    </div>
  );
}

function Domains() {
  return (
    <div className="nav-domain">
      <header style={{ position: "top center" }}>DOMAINS</header>
      <dl className="domain-details">{domainDetails.map(createDomains)}</dl>
    </div>
  );
}

export default Domains;
