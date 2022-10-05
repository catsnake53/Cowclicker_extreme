import React, {useEffect, useState, useEffect} from 'react';
import { connect, useDispatch, useStore } from 'react-redux'; 

export function Leaderboard(props) {

useEffect(() => {
    const url = '/api/leaderboard';
    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': "application/json, text/plain",
            'Content-Type': 'applciation/json',
            'x-Trigger': 'CORS'
        }
    })
        .then( data => data.json())
        .then( data => {const leaderBoardData = data})
        .then( data => console.log(data))
        .catch(error => console.log(error));
})

leaderBoardData.sort((a, b) => {
    if (a.totalScore < b.totalScore) return 1;
    if (a.totalScore > b.totalScore) return -1;
    else return 0;
});


// useEffect() 
//      send getRequest to DB 
//          findAll topScores in each userDB 
            // Return all username: topScore ? 
// Sort by TopScore 
// Return Array of Top 5 Scores 
// Return 
// box of top scores 
}