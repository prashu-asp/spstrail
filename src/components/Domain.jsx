import React from "react";

function Domain(props) {
  return props.trigger ? (
    <div className="domain-popup">
      <div className="inner-domain-popup">
        {props.children}

        <button className="popup-close" onClick={() => props.setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    " "
  );
}
export default Domain;
