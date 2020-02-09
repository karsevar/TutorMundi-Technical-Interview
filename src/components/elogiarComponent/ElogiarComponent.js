import React, { useState } from "react";
import ReviewComponent from "../reviewComponent/ReviewComponent";
import "./elogiarComponent.scss";

function ElogiarComponent(props) {
  const [elogiarToggle, setElogiarToggle] = useState(false);
  const [review, setReview] = useState({
    stars: 5,
    comment: "",
    compliment1: false,
    compliment2: false,
    compliment3: false,
    compliment4: false,
    compliment5: false
  });
  const handleClick = event => {
    console.log("elogiar btn is clicked");
    setElogiarToggle(true);
    event.stopPropagation();
  };

  return (
    <form className='elogiar-component'>
      {elogiarToggle ? (
        <ReviewComponent review={review} setReview={setReview} />
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
    </form>
  );
}

export default ElogiarComponent;
