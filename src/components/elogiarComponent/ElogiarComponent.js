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

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form output", review);
    setReview({
      stars: 5,
      comment: "",
      compliment1: false,
      compliment2: false,
      compliment3: false,
      compliment4: false,
      compliment5: false
    });
    setElogiarToggle(false);
  };

  const handleJump = event => {
    event.preventDefault();
    console.log("deleting following form output", review);
    setReview({
      stars: 5,
      comment: "",
      compliment1: false,
      compliment2: false,
      compliment3: false,
      compliment4: false,
      compliment5: false
    });
    setElogiarToggle(false);
    event.stopPropagation();
  };

  return (
    <form className='elogiar-component' onSubmit={event => handleSubmit(event)}>
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
        <button className='pular-btn' onClick={event => handleJump(event)}>
          PULAR
        </button>
        <button className='confirmar-btn' type='submit'>
          CONFIRMAR
        </button>
      </div>
    </form>
  );
}

export default ElogiarComponent;
