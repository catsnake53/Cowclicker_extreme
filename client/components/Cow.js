import React, { useEffect, useState } from 'react';
import { clickCowActionCreator } from '../actions/actions.js';
import { connect, useDispatch, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';


function CowContainer(props) {
  const [tinyCows, setTinyCows] = useState(props.stats.totalCows);
  const [relaxedCows, setRelaxedCows] = useState(props.stats.totalRelaxedCows);
  const [enlightenedCows, setEnlightenedCows] = useState(props.stats.totalEnlightenedCows);
  const [cows2, setCows2] = useState(props.stats.totalCows2);

  const dispatch = useDispatch();
  const store = useStore()

  // this function returns an integer between min and max (inclusive)
  function setRandomPos(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCow(cows, type) {
    const arr = [];
    const cowDisplay = document.querySelector('.cowDisplay');
    const width = cowDisplay.offsetWidth;
    const height = cowDisplay.offsetHeight;
    let src = '';

    switch (type) {
      case 'cow':
        src = 'https://i.imgur.com/1alMh6g.png';
        break;
      case 'relax':
        src = 'https://i.imgur.com/wo8E9Du.png';
        break;
      case 'enlight':
        src = 'https://i.imgur.com/B1EyoQ8.png';
        break;
      case 'two':
        src = 'https://i.imgur.com/zvZx0aB.png';
        break;
    }

    for (let i = 0; i < cows; i++) {
      const top = setRandomPos(0, height - 100);
      const left = setRandomPos(0, width - 100);
      arr.push(<div className="smallCows" style={{ top: top, left: left }}><img src={src} alt="" /></div>)
    }
    console.log(arr)
    return arr;
  }
  // console.log('stats on Cow.js', props.stats.totalCows)

  useEffect(() => {
    setTinyCows(generateCow(props.stats.totalCows, 'cow'));
    setRelaxedCows(generateCow(props.stats.totalRelaxedCows, 'relax'));
    setEnlightenedCows(generateCow(props.stats.totalEnlightenedCows, 'enlight'));
    setCows2(generateCow(props.stats.totalCows2, 'two'));

  }, [props.stats.totalCows, props.stats.totalRelaxedCows, props.stats.totalEnlightenedCows, props.stats.totalCows2]);

  return (
    <div className="cowContainerDiv" >
      <div className="cowDisplay">
        {(tinyCows) ? tinyCows : null}
        {(relaxedCows) ? relaxedCows : null}
        {(enlightenedCows) ? enlightenedCows : null}
        {(cows2) ? cows2 : null}
      </div>
      <div onClick={() => {
        dispatch(clickCowActionCreator())
        console.log(store.getState())
      }} className="hitbox" id="hitbox">
        <img src={'https://i.imgur.com/edUEWen.png'} alt="" />
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return ({
    clickCow: () => dispatch({ type: 'CLICK' })
  })
}

export default connect(mapDispatchToProps)(CowContainer);
