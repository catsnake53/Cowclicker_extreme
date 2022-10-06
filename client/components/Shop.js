import { CowUpgrade } from './CowUpgrade';
import { FieldUpgrade } from './FieldUpgrade';
import React, { useEffect, useState } from 'react';
import { connect, useStore, useDispatch } from 'react-redux';
import { calculateActionCreator, toggleDevMode } from '../actions/actions.js';


export function ShopContainer(props) {
    const { milkCount, totalCows, totalRelaxedCows, totalEnglightenedCows,
        totalCows2, cowCost, fieldCost, totalFields, totalResorts,
        totalSchools, totalSpaceships } = props;

    const [milk, setMilk] = useState(milkCount);
    const [cows, setCows] = useState(totalCows);
    const [relaxedCows, setRelaxedCows] = useState(totalRelaxedCows);
    const [englightenedCows, setEnglightenedCows] = useState(totalEnglightenedCows);
    const [cows2, setCows2] = useState(totalCows2);

    const [fields, setFields] = useState(totalFields);
    const [resorts, setResorts] = useState(totalResorts);
    const [schools, setSchools] = useState(totalSchools);
    const [spaceships, setSpaceships] = useState(totalSpaceships);

    const [cow_Cost, setCowCost] = useState(cowCost);
    const [field_Cost, setFieldCost] = useState(fieldCost);
    const dispatch = useDispatch();


    useEffect(() => {
        //
        if (milkCount !== milk || totalCows !== cows ||
            cowCost !== cow_Cost || fields !== totalFields
            || fields !== totalFields || resorts !== totalResorts || schools !== totalSchools || spaceships !== totalSpaceships) {
            setMilk(milkCount)
            setCows(totalCows)
            setFields(totalFields)
            setCowCost(cowCost)
        }
    })

    return (
        <div onClick={() => { dispatch(toggleDevMode()) }} className="shopContainerDiv">
            <div className="infoDiv">
                <h2>Stats</h2>
                <div className="statsDiv">
                    <p>Milk: <strong>{milk}</strong></p>
                    <p>Cattle: <strong>{cows}</strong></p>
                    <p>Relaxed Cattle: <strong>{cows}</strong></p>
                    <p>Enlightened Cattle: <strong>{cows}</strong></p>
                    <p>Cattle 2.0: <strong>{cows}</strong></p>
                    <p>Fields: <strong>{fields}</strong></p>
                    <p>Resorts: <strong>{fields}</strong></p>
                    <p>Schools: <strong>{fields}</strong></p>
                    <p>Spaceships: <strong>{fields}</strong></p>

                </div>
            </div>
            <div className="shopDiv">
                <div><h2>Shop</h2></div>
                <div className="shopOptions">
                    <CowUpgrade totalCowCost={cow_Cost} />
                    <FieldUpgrade totalfieldCost={fieldCost} />
                    {/* New multiplier component */}
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
        totalEnglightenedCows: state.cows.totalEnlightenedCows,
        totalCows2: state.cows.totalCows2,
        totalFields: state.cows.totalFields,
        totalResorts: state.cows.totalRelaxedCows,
        totalSchools: state.cows.totalSchools,
        totalSpaceships: state.cows.totalSpaceships,
        cowCost: state.cows.cowCost,
        fieldCost: state.cows.fieldCost,
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