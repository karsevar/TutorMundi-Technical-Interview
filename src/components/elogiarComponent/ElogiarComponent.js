import React, { useState } from "react";
import "./elogiarComponent.scss";

function ElogiarComponent(props) {
  const [elogiarToggle, setElogiarToggle] = useState(false);

  const handleClick = event => {
    console.log("elogiar btn is clicked");
    setElogiarToggle(true);
    event.stopPropagation();
  };
  if (elogiarToggle) {
    return (
      <>
        <h2>Component is toggled</h2>
      </>
    );
  } else {
    return (
      <div className='elogiar-component'>
        <div className='elogiar-container'>
          <button className='elogiar-btn' onClick={event => handleClick(event)}>
            ELOGIAR
          </button>
        </div>
      </div>
    );
  }
}

export default ElogiarComponent;
