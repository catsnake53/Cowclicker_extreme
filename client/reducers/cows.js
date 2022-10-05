import * as types from '../constants/actionTypes';

const initialState = {
	totalScore: 0,
	devMode: false,
	milk: 0,
	totalCows: 0,
	totalFields: 0,
	currentMultiplier: 1,
	loggedIn: false,
	username: '',
	cowCost: 10,
	fieldCost: 100,
	gameStage: 0,
};

const cowsReducers = (state = initialState, action) => {

	switch (action.type) {
		// case types.TOGGLE_DEV: {
		// 	let dev_Mode = state.devMode;
		// 	return {
		// 		...state,
		// 		devMode: !dev_Mode
		// 	}
		// }
		case types.LOAD_GAME: {
			// console.log(action.payload);
			const {
				milk,
				totalCows,
				totalFields,
				currentMultiplier,
				cowCost,
				fieldCost,
			} = action.payload;
			console.log('Game Loaded.');
			return {
				...state,
				milk,
				totalCows,
				totalFields,
				currentMultiplier,
				cowCost,
				fieldCost
			};
		};
		case types.ADD_COW: {
			if (state.milk < state.cowCost) return { ...state };
			//purchase new cow
			const newCowCount = state.totalCows + 1;
			const newCowCost = Math.ceil((state.cowCost * 1.3));
			const newMilkCount = state.milk - state.cowCost;
			// console.log('newMilkCount, newCowCount', newMilkCount, newCowCount);
			return {
				...state,
				milk: newMilkCount,
				totalCows: newCowCount,
				cowCost: newCowCost,
			};
		};
		case types.ADD_FIELD: {
			if (state.milk < state.fieldCost) return { ...state };

			const newFieldCount = state.totalFields + 1;
			const newFieldCost = Math.ceil((state.fieldCost * 1.3));
			const newMilkCount = state.milk - state.fieldCost;
			return {
				...state,
				totalFields: newFieldCount,
				fieldCost: newFieldCost,
				milk: newMilkCount,
			}
		}
		case types.CALCULATE: { //changes Milk count
			//should be invoked every second, invocation should happen inside shop component 
			//(whereever stats are being rendered)


			//add upgrades into calculation here: For example
			// const milkFromCows = state.totalCows * cowMultiplier;
			// const milkFromFields = state.totalFields * fieldMultiplier;
			// currMilk = currMilk + (milkFromCows + milkFromFields);
			//temporary simple version
			const currMilkFromCows = (state.totalCows * state.currentMultiplier);
			const currMilkFromFields = (state.totalFields * 5) * state.currentMultiplier;
			const currMilk = state.milk + currMilkFromCows + currMilkFromFields;
			const currScore = state.totalScore + currMilkFromCows + currMilkFromFields;
			// console.log(currScore);
			return {
				...state,
				milk: currMilk,
				totalScore: currScore
			};
		};
		case types.CLICK: {
			// console.log("INSTATE", state)
			//handles click on cow to add one milk
			// console.log("DEV MODE STATE", state.devMode)
			// if (state.devMode === false)  
			const currMilk = state.milk += 1;
			const currScore = state.totalScore += 1;
			// else currMilk = state.milk += 10000;
			// console.log(currScore);
			return {
				...state,
				milk: currMilk,
				totalScore: currScore
			};
		};
		case types.USER: { //Does user login need to be done through state?
			// should signup/login happen purely as post requests in the login component?
			// should store receive a simple boolean for login success?
			//payload is a user object with username and password
			const currUser = action.payload.username;
			return {
				...state,
				username: currUser,
			}
		}
		case types.LOGGED_IN: {
			return {
				...state,
				loggedIn: true ? false : true,
			};
		};
		case types.GAME_STAGE_LEVEL_UP: {
			const newStage = state.gameStage += 1;
			const newMultiplier = state.currentMultiplier += 2;
			return {
				...state,
				gameStage: newStage,
				currentMultiplier: newMultiplier,
			}
		}
		default: {
			return state;
		};
	};
};

export default cowsReducers;