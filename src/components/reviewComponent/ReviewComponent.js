import React, { useState } from "react";
import { ReactComponent as Lamp } from "./lamp.svg";
import { ReactComponent as CheckSheet } from "./checked-sheet.svg";
import { ReactComponent as LookingGlass } from "./looking-glass.svg";
import { ReactComponent as SmileFace } from "./smile-face.svg";
import { ReactComponent as SwissKnife } from "./swiss-knife.svg";

function ReviewComponent(props) {
  return (
    <div className='review-component'>
      <div className='selections-container'>
        <div className='selection-header'>
          <h4>Envie um elogio</h4>
        </div>
        <div className='selections'>
          <div className='select-box'>
            <Lamp />
            <p>Estimula a criatividade</p>
          </div>
          <div className='select-box'>
            <LookingGlass />
            <p>Estimula a curiosidade</p>
          </div>
          <div className='select-box'>
            <SwissKnife />
            <p>Se adapta a necessidade</p>
          </div>
          <div className='select-box'>
            <CheckSheet />
            <p>Otima didatica</p>
          </div>
          <div className='select-box'>
            <SmileFace />
            <p>Gente boasissima</p>
          </div>
        </div>
      </div>
      <div className='textbox-conainer'>
        <h4>Deixe um recado</h4>
        <textarea className='elogiar-comment-box' name='textarea' />
      </div>
    </div>
  );
}

export default ReviewComponent;
