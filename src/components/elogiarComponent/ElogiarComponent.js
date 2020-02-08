import React, { useState } from "react";
import ReviewComponent from "../reviewComponent/ReviewComponent";
import "./elogiarComponent.scss";

function ElogiarComponent(props) {
  const [elogiarToggle, setElogiarToggle] = useState(false);

  const handleClick = event => {
    console.log("elogiar btn is clicked");
    setElogiarToggle(true);
    event.stopPropagation();
  };

  return (
    <div className='elogiar-component'>
      {elogiarToggle ? (
        <ReviewComponent />
      ) : (
        <div className='elogiar-container'>
          <button className='elogiar-btn' onClick={event => handleClick(event)}>
            ELOGIAR
          </button>
        </div>
      )}

      <div className='confirmar-pular-container'>
        <button className='pular-btn'>PULAR</button>
        <button className='confirmar-btn'>CONFIRMAR</button>
      </div>
    </div>
  );
}

export default ElogiarComponent;
