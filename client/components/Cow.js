import React, { useEffect, useState } from 'react';
import { clickCowActionCreator } from '../actions/actions.js';
import { connect, useDispatch, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';


function CowContainer(props) {
  const [tinyCows, setTinyCows] = useState([]);

  const dispatch = useDispatch();
  const store = useStore()

  // this function returns an integer between min and max (inclusive)
  function setRandomPos(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCow(cows) {
    const arr = [];
    const cowDisplay = document.querySelector('.cowDisplay');
    const width = cowDisplay.offsetWidth;
    const height = cowDisplay.offsetHeight;

    for (let i = 0; i < cows; i++) {
      const top = setRandomPos(0, height - 100);
      const left = setRandomPos(0, width - 100);
      arr.push(<div className="smallCows" style={{ top: top, left: left }}><img src={'https://i.imgur.com/edUEWen.png'} alt="" /></div>)
    }
    console.log(arr)
    return arr;
  }
  // console.log('stats on Cow.js', props.stats.totalCows)

  useEffect(() => {
    setTinyCows(generateCow(props.stats.totalCows));
  }, [props.stats.totalCows]);

  return (
    <div className="cowContainerDiv" >
      <div className="cowDisplay">
        {(tinyCows) ? tinyCows : null}
      </div>
      <div onClick={() => {
        dispatch(clickCowActionCreator())
        console.log(store.getState())
      }} className="hitbox" id="hitbox">
        <img src={'https://i.imgur.com/edUEWen.png'} alt="" />
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
