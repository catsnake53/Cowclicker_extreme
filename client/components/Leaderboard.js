import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import { connect, useDispatch, useStore } from 'react-redux'; 

export function Leaderboard(props) {

    const [leaderBoardArray, setLeaderBoard] = useState([]);

    useEffect(() => {
        getLeaders();
    }, [])

    const getLeaders = () => {
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
            .then( data => {
                const leaderBoardData = data;
                leaderBoardData.sort((a, b) => {
                    if (a.totalScore < b.totalScore) return 1;
                    if (a.totalScore > b.totalScore) return -1;
                    else return 0;
                });
                const topFive = [];
                const totalLeaders = 5;
                for (let i = 0; i < totalLeaders; i++){
                    topFive.push(
                        <li class="leaderboarditem">
                            {leaderBoardData[i].username} : {leaderBoardData[i].totalScore}
                        </li>
                    )
                };
                setLeaderBoard(topFive);
            })
            .catch(error => console.log(error));
    }

    return(
        <div className="leaderboard">
            <strong>~~~~~~~FARMHAND HALL OF FAME~~~~~~~</strong>
            <ol>
                {(leaderBoardArray) ? leaderBoardArray : <span>Loading Leaderboard...</span>}
            </ol>
        </div>
    )
}

// useEffect() 
//      send getRequest to DB 
//          findAll topScores in each userDB 
            // Return all username: topScore ? 
// Sort by TopScore 
// Return Array of Top 5 Scores 
// Return 
// box of top scores 
