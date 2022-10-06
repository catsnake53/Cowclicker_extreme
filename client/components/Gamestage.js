import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { gameStageLevelUp } from '../actions/actions.js';

export function Gamestage(props) {
    const { stage } = props;
    const [gameStage, setGameStage] = useState(0);
    const [isHovering, toggleHovering] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("TOTAL COW COST PROPS: ", totalCowCost)
        if (stage !== gameStage) setGameStage(stage)
    }, [props])

    console.log(props.stage)

    return (
        <div
            onMouseEnter={() => toggleHovering(true)}
            onMouseLeave={() => toggleHovering(false)}
            onClick={() => { dispatch(gameStageLevelUp()) }}
            id="cowUpgrade" className="shopButton">
            {isHovering &&
                <div className="hoverDiv">
                    <img alt="" height="35px" src="https://media.discordapp.net/attachments/1025460102670594119/1026563814637961287/unknown.png" className="" />
                    <span>10000</span>
                </div>}
            {!isHovering &&
                <div className="stageUpgradeHeader"><h2>Stage</h2></div>}
        </div>
    )
}