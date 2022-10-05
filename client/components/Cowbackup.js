import React, { useEffect, useState } from 'react';
import { clickCowActionCreator } from '../actions/actions.js';
import { connect, useDispatch, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';


function CowContainer(props) {
    const dispatch = useDispatch();
    const store = useStore()

    // console.log('stats on Cow.js', props.stats.totalCows)
    const arr = [];

    for (let i = 0; i < props.stats.totalCows; i++) {
        arr.push(<div className="smallCows"><img src={'https://i.imgur.com/sQusjAS.png'} alt="" /></div>)
    }

    return (
        <div className="cowContainerDiv" >
            <div className="cowDisplay">
                {arr}
            </div>
            <div onClick={() => {
                dispatch(clickCowActionCreator())
                console.log(store.getState())
            }} className="hitbox" id="hitbox">
                <img src={'https://i.imgur.com/sQusjAS.png'} alt="" />
            </div>
            {/* you can take this part out....... if you dare.... */}
            {/* <div onClick={() => {
            dispatch(clickCowActionCreator())
            console.log(store.getState())
          }} className="hitbox" id="hitbox2">
              <img height="100px" width="100px" id="extraCows" src={'https://i.imgur.com/P8XvrPJ.jpg'} alt="" />
          </div>
          <div onClick={() => {
            dispatch(clickCowActionCreator())
            console.log(store.getState())
          }} className="hitbox" id="hitbox3">
              <img height="100px" width="100px" id="extraCows" src={'https://i.imgur.com/gX58cIY.png'} alt="" />
          </div>
          <div onClick={() => {
            dispatch(clickCowActionCreator())
            console.log(store.getState())
          }} className="hitbox" id="hitbox4">
              <img height="100px" width="100px" id="extraCows" src={'https://i.imgur.com/rlULwYi.png'} alt="" />
          </div>
          <div onClick={() => {
            dispatch(clickCowActionCreator())
            console.log(store.getState())
          }} className="hitbox" id="hitbox5">
              <img height="100px" id="extraCows" width="100px" src={'https://i.imgur.com/fqmapJJ.png'} alt="" />
          </div> */}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return ({
        clickCow: () => dispatch({ type: 'CLICK' })
    })
}

export default connect(mapDispatchToProps)(CowContainer);
