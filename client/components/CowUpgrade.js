import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { addCowActionCreator, addRelaxedCowActionCreator, addEnlightenedCowActionCreator, addCow2ActionCreator } from '../actions/actions.js';

export function CowUpgrade(props) {
  const { totalCowCost } = props;
  const [cowCost, setCowCost] = useState(0);
  const [isHovering, toggleHovering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("TOTAL COW COST PROPS: ", totalCowCost)
    if (totalCowCost !== cowCost) setCowCost(totalCowCost)
  }, [props])

  return (
    <>
      {/* when clicked, trigger add cow reducer */}
      <div
        onMouseEnter={() => toggleHovering(true)}
        onMouseLeave={() => toggleHovering(false)}
        onClick={() => {
          dispatch(addCowActionCreator());
        }} id="cowUpgrade" className="shopButton">
        {isHovering &&
          <div className="hoverDiv">
            <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
            <span>{cowCost}</span>
          </div>}
        {!isHovering &&
          <div className="shopupgradeHeaders"><h2>Cow</h2></div>}
      </div>
      {(props.stage > 0) ? (
        <div
          onMouseEnter={() => toggleHovering(true)}
          onMouseLeave={() => toggleHovering(false)}
          onClick={() => {
            dispatch(addRelaxedCowActionCreator());
          }} id="cowUpgrade" className="shopButton">
          {isHovering &&
            <div className="hoverDiv">
              <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
              <span>{cowCost}</span>
            </div>}
          {!isHovering &&
            <div className="shopupgradeHeaders"><h2>Relaxed Cow</h2></div>}
        </div>
      ) : null}
      {(props.stage > 1) ? (
        <div
          onMouseEnter={() => toggleHovering(true)}
          onMouseLeave={() => toggleHovering(false)}
          onClick={() => {
            dispatch(addEnlightenedCowActionCreator());
          }} id="cowUpgrade" className="shopButton">
          {isHovering &&
            <div className="hoverDiv">
              <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
              <span>{cowCost}</span>
            </div>}
          {!isHovering &&
            <div className="shopupgradeHeaders"><h2>Enlightened Cow</h2></div>}
        </div>
      ) : null}
      {(props.stage > 2) ? (
        <div
          onMouseEnter={() => toggleHovering(true)}
          onMouseLeave={() => toggleHovering(false)}
          onClick={() => {
            dispatch(addCow2ActionCreator());
          }} id="cowUpgrade" className="shopButton">
          {isHovering &&
            <div className="hoverDiv">
              <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
              <span>{cowCost}</span>
            </div>}
          {!isHovering &&
            <div className="shopupgradeHeaders"><h2>Cow 2.0</h2></div>}
        </div>
      ) : null}
    </>
  )
}