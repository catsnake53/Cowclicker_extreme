import { CowUpgrade } from './CowUpgrade';
import { FieldUpgrade } from './FieldUpgrade';
import { Gamestage } from './Gamestage';
import React, { useEffect, useState } from 'react';
import { connect, useStore, useDispatch } from 'react-redux';
import { calculateActionCreator, toggleDevMode } from '../actions/actions.js';


export function ShopContainer(props) {
    const { milkCount, totalCows, totalRelaxedCows, totalEnlightenedCows,
        totalCows2, cowCost, fieldCost, totalFields, totalResorts,
        totalSchools, totalSpaceships, gameStage } = props;

    const [milk, setMilk] = useState(milkCount);

    const [cows, setCows] = useState(totalCows);
    const [relaxedCows, setRelaxedCows] = useState(totalRelaxedCows);
    const [enlightenedCows, setEnlightenedCows] = useState(totalEnlightenedCows);
    const [cows2, setCows2] = useState(totalCows2);

    const [fields, setFields] = useState(totalFields);
    const [resorts, setResorts] = useState(totalResorts);
    const [schools, setSchools] = useState(totalSchools);
    const [spaceships, setSpaceships] = useState(totalSpaceships);

    const [cow_Cost, setCowCost] = useState(cowCost);
    const [field_Cost, setFieldCost] = useState(fieldCost);

    const [stage, setStage] = useState(gameStage)

    const dispatch = useDispatch();


    useEffect(() => {
        //
        if (milkCount !== milk
            || totalCows !== cows || totalRelaxedCows !== relaxedCows || totalEnlightenedCows !== enlightenedCows || totalCows2 !== cows2
            || totalFields !== fields || totalResorts !== resorts || totalSchools !== schools || totalSpaceships !== spaceships
            || cowCost !== cow_Cost || fieldCost !== field_Cost || gameStage !== stage) {
            setMilk(milkCount)

            setCows(totalCows)
            setRelaxedCows(totalRelaxedCows)
            setEnlightenedCows(totalEnlightenedCows)
            setCows2(totalCows2)

            setFields(totalFields)
            setResorts(totalResorts)
            setSchools(totalSchools)
            setSpaceships(totalSpaceships)

            setCowCost(cowCost)
            setFieldCost(fieldCost)

            setStage(gameStage)
        }
    })

    return (
        <div onClick={() => { dispatch(toggleDevMode()) }} className="shopContainerDiv">
            <div className="infoDiv">
                <h2>Stats</h2>
                <div className="statsDiv">
                    <p id='milkCount'>Milk: <strong>{milk}</strong></p>
                    <p>Cattle: <strong>{cows}</strong></p>
                    <p>Relaxed Cattle: <strong>{relaxedCows}</strong></p>
                    <p>Enlightened Cattle: <strong>{enlightenedCows}</strong></p>
                    <p>Cattle 2.0: <strong>{cows2}</strong></p>
                    <p>Fields: <strong>{fields}</strong></p>
                    <p>Resorts: <strong>{resorts}</strong></p>
                    <p>Schools: <strong>{schools}</strong></p>
                    <p>Spaceships: <strong>{spaceships}</strong></p>

                </div>
            </div>
            <div className="shopDiv">
                <div><h2>Shop</h2></div>
                <div className="shopOptions">
                    {(stage < 4) ? <Gamestage stage={stage} /> : null}
                    <CowUpgrade totalCowCost={cow_Cost} stage={stage} />
                    <FieldUpgrade totalfieldCost={field_Cost} stage={stage} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        milkCount: state.cows.milk,
        totalCows: state.cows.totalCows,
        totalRelaxedCows: state.cows.totalRelaxedCows,
        totalEnlightenedCows: state.cows.totalEnlightenedCows,
        totalCows2: state.cows.totalCows2,
        totalFields: state.cows.totalFields,
        totalResorts: state.cows.totalResorts,
        totalSchools: state.cows.totalSchools,
        totalSpaceships: state.cows.totalSpaceships,
        cowCost: state.cows.cowCost,
        fieldCost: state.cows.fieldCost,
        gameStage: state.cows.gameStage
    }
}

export default connect(mapStateToProps, null)(ShopContainer);

// const initialState = {
//     totalScore: 0,
//     devMode: false,
//     milk: 0,
//     totalCows: 0,
//     totalRelaxedCows:  0,
//     totalEnlightenedCows: 0,
//     totalCows2: 0,
//     totalFields: 0,
//     totalResorts: 0,
//     totalSchools: 0,
//     totalSpaceships: 0,              
//     currentMultiplier: 1,
//     loggedIn: false,
//     username: '',
//     cowCost: 10,
//     fieldCost: 100,
//     gameStage: 0,
// };