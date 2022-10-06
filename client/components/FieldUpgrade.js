import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { addFieldActionCreator, addResortActionCreator, addSchoolActionCreator, addSpaceshipActionCreator } from '../actions/actions.js';


export function FieldUpgrade(props) {
  const { totalfieldCost } = props;
  const [fieldCost, setFieldCost] = useState(0);
  const [isHovering, toggleHovering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (totalfieldCost !== fieldCost) setFieldCost(totalfieldCost)
  }, [props])

  return (
    <>
      <div
        onMouseEnter={() => toggleHovering(true)}
        onMouseLeave={() => toggleHovering(false)}
        onClick={() => { dispatch(addFieldActionCreator()) }} id="fieldUpgrade" className="shopButton">
        {isHovering &&
          <div className="hoverDiv">
            <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
            <span>{fieldCost}</span>
          </div>}
        {!isHovering &&
          <div className="shopupgradeHeaders"><h2>FIELD</h2></div>}
      </div>
      {
        (props.stage > 0) ? (
          <div
            onMouseEnter={() => toggleHovering(true)}
            onMouseLeave={() => toggleHovering(false)}
            onClick={() => { dispatch(addResortActionCreator()) }} id="fieldUpgrade" className="shopButton">
            {isHovering &&
              <div className="hoverDiv">
                <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
                <span>{fieldCost}</span>
              </div>}
            {!isHovering &&
              <div className="shopupgradeHeaders"><h2>RESORT</h2></div>}
          </div>
        ) : null
      }
      {
        (props.stage > 1) ? (
          <div
            onMouseEnter={() => toggleHovering(true)}
            onMouseLeave={() => toggleHovering(false)}
            onClick={() => { dispatch(addSchoolActionCreator()) }} id="fieldUpgrade" className="shopButton">
            {isHovering &&
              <div className="hoverDiv">
                <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
                <span>{fieldCost}</span>
              </div>}
            {!isHovering &&
              <div className="shopupgradeHeaders"><h2>SCHOOL</h2></div>}
          </div>
        ) : null
      }
      {
        (props.stage > 2) ? (
          <div
            onMouseEnter={() => toggleHovering(true)}
            onMouseLeave={() => toggleHovering(false)}
            onClick={() => { dispatch(addSpaceshipActionCreator()) }} id="fieldUpgrade" className="shopButton">
            {isHovering &&
              <div className="hoverDiv">
                <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
                <span>{fieldCost}</span>
              </div>}
            {!isHovering &&
              <div className="shopupgradeHeaders"><h2>SPACESHIP</h2></div>}
          </div>
        ) : null
      }
    </>
  )
}
