import React from "react";
import book from "./book.png";
import { ReactComponent as Star } from "./star.svg";
import "./headerTutor.scss";

function HeaderTutor(props) {
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    starArray.push(<Star />);
  }

  console.log(starArray);
  return (
    <div className='header-component'>
      <div className='header-image-container'>
        <img src={book} className='header-image' />
      </div>
      <div className='header-text-container'>
        <h2>
          Como foi a ajuda
          <br /> do tutor?
        </h2>
      </div>
      <div className='star-container'>
        {starArray.map(star => {
          return star;
        })}
      </div>
    </div>
  );
}

export default HeaderTutor;
