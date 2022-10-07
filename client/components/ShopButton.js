import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { addCowActionCreator, addRelaxedCowActionCreator, addEnlightenedCowActionCreator, addCow2ActionCreator } from '../actions/actions.js';
import { addFieldActionCreator, addResortActionCreator, addSchoolActionCreator, addSpaceshipActionCreator } from '../actions/actions.js';
import { gameStageLevelUp } from '../actions/actions.js';

export function ShopButton(props) {
    const [isHovering, toggleHovering] = useState(false);
    const dispatch = useDispatch();

    function shopOption(type, stage) {
        if (type === 'cow' && stage === 0) {
            return addCowActionCreator();
        }
        if (type === 'cow' && stage === 1) {
            return addRelaxedCowActionCreator();
        }
        if (type === 'cow' && stage === 2) {
            return addEnlightenedCowActionCreator();
        }
        if (type === 'cow' && stage === 3) {
            return addCow2ActionCreator();
        }
        if (type === 'field' && stage === 0) {
            return addFieldActionCreator();
        }
        if (type === 'field' && stage === 1) {
            return addResortActionCreator();
        }
        if (type === 'field' && stage === 2) {
            return addSchoolActionCreator();
        }
        if (type === 'field' && stage === 3) {
            return addSpaceshipActionCreator();
        }
        if (type === 'stage' && stage < 5) {
            return gameStageLevelUp();
        }
    }


    return (
        <div
            onMouseEnter={() => toggleHovering(true)}
            onMouseLeave={() => toggleHovering(false)}
            onClick={() => {
                // change action creator based on type and stage
                dispatch(shopOption(props.type, props.stage));
            }} id="cowUpgrade" className="shopButton">
            {isHovering &&
                <div className="hoverDiv">
                    <h2>
                        <img alt="" height="28px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
                        {/* change price based on cost type and stage */}
                        {props.cost}
                    </h2>
                </div>}
            {!isHovering &&
                <div className="shopupgradeHeaders">
                    {/* change h2 header based on type */}
                    <h2>{props.itemName ? props.itemName : props.stage == 0 ? 'Cow Spa Treatment' :
                        props.stage == 1 ? 'Industrial Revolution' : props.stage == 2 ? 'Cow University'
                            : props.stage == 3 ? 'Quantum Moochanics' : null
                    }</h2>
                </div>}
        </div>
    )
}