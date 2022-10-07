import React, { useEffect, useState } from 'react';
import { resetGameActionCreator } from '../actions/actions.js';
import { connect, useDispatch, useStore } from 'react-redux';


function Endgame (props) {
    const [endEndGame, immortalizeEndGame] = useState(true);
      const dispatch = useDispatch();

    
    return(
        <div className='endgame'>
        {endEndGame
        ? <div>
            <h1>TIME TO HIT THE OL' DUSTY TRAIL</h1>
            <h2>Your cows have discovered quantum moochanics and have moo'ved on from this world.</h2>
            <h2>A choice now stands before you...</h2>
            <h2>The cows have left behind a gift of a few young calves to remember them by.</h2>
            <h2>You may choose to treat them as you have their ancestors, making them toil endlessly. Or, you may enjoy eternity with your new friend forever.</h2>
            <h2>Choose wisely....</h2>
            <div>
                <button className='signupButton' onClick={() => {dispatch(resetGameActionCreator())}}>Rebuild</button>
                <button className='signupButton' onClick={() => {immortalizeEndGame(false)}}>Coexist</button>
            </div>
        </div>
        : <div>
        <h2> Cow Clicker EXTREME+: </h2>
        <h2> A game originally made by Jackie He, Lisa Tian, Matthew Antosiak, Raymond Kim, and Zoe Harper.</h2>
        <h2> Iterated upon by Cesar Quintanilla, Cera Barrow, Kat Tsai, and Tommy Li.</h2>
        <h2>Enjoy...</h2>
        <img src="https://cdn.discordapp.com/attachments/1020021823703875706/1027736138271694950/cowclick.png" height="600" width="800"></img>
        </div>}
        </div>
    )
}

{/* function mapDispatchToProps(dispatch) {
    return ({
      resetGame: () => dispatch({ type: 'RESET_GAME' })
    })
} */}
  
export default Endgame;