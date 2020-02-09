import React, { useState, useEffect } from "react";
import "./reviewComponent.scss";
import { ReactComponent as Lamp } from "./lamp.svg";
import { ReactComponent as CheckSheet } from "./checked-sheet.svg";
import { ReactComponent as LookingGlass } from "./looking-glass.svg";
import { ReactComponent as SmileFace } from "./smile-face.svg";
import { ReactComponent as SwissKnife } from "./swiss-knife.svg";

function ReviewComponent(props) {
  const changeHandler = (event, target, value) => {
    event.stopPropagation();
    props.setReview({ ...props.review, [target]: value });
  };

  return (
    <div className='review-component'>
      <div className='selections-container'>
        <div className='selection-header'>
          <h4>Envie um elogio</h4>
        </div>
        <div className='selections'>
          <div
            className={`select-box ${
              props.review["compliment1"] ? "selected" : ""
            }`}
            onClick={event =>
              changeHandler(event, "compliment1", !props.review["compliment1"])
            }
          >
            <Lamp />
            <p>Estimula a criatividade</p>
          </div>
          <div
            className={`select-box ${
              props.review["compliment2"] ? "selected" : ""
            }`}
            onClick={event =>
              changeHandler(event, "compliment2", !props.review["compliment2"])
            }
          >
            <LookingGlass />
            <p>Estimula a curiosidade</p>
          </div>
          <div
            className={`select-box ${
              props.review["compliment3"] ? "selected" : ""
            }`}
            onClick={event =>
              changeHandler(event, "compliment3", !props.review["compliment3"])
            }
          >
            <SwissKnife />
            <p>Se adapta a necessidade</p>
          </div>
          <div
            className={`select-box check-sheet-box ${
              props.review["compliment4"] ? "selected" : ""
            }`}
            onClick={event =>
              changeHandler(event, "compliment4", !props.review["compliment4"])
            }
          >
            <CheckSheet />
            <p>Otima didatica</p>
          </div>
          <div
            className={`select-box ${
              props.review["compliment5"] ? "selected" : ""
            }`}
            onClick={event =>
              changeHandler(event, "compliment5", !props.review["compliment5"])
            }
          >
            <SmileFace />
            <p>Gente boasissima</p>
          </div>
        </div>
      </div>
      <div className='text-container'>
        <h4>Deixe um recado</h4>
        <textarea
          className='elogiar-comment-box'
          name='textarea'
          value={props.review["comment"]}
          onChange={event =>
            changeHandler(event, "comment", event.target.value)
          }
        />
      </div>
    </div>
  );
}

export default ReviewComponent;
