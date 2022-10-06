import * as types from '../constants/actionTypes';

//change puchase to whatever
export const loadGameActionCreator = (resObj) => ({
	type: types.LOAD_GAME,
	payload: resObj,
});

export const addCowActionCreator = () => ({
	type: types.ADD_COW,
});

export const addRelaxedCowActionCreator = () => ({
	type: types.ADD_RELAXED_COW,
});  

export const addEnlightenedCowActionCreator = () => ({
	type: types.ADD_ENLIGHTENED_COW,
});  

export const addCow2ActionCreator = () => ({
	type: types.ADD_COW_TWO,
});  

export const clickCowActionCreator = () => ({
	type: types.CLICK,
});

export const addFieldActionCreator = () => ({
	type: types.ADD_FIELD,
});

export const addResortActionCreator = () => ({
	type: types.ADD_RESORT,
});

export const addSchoolActionCreator = () => ({
	type: types.ADD_SCHOOL,
});

export const addSpaceshipActionCreator = () => ({
	type: types.ADD_SPACESHIP,
});

export const toggleDevMode = () => ({
	type: types.TOGGLE_DEV,
})

export const calculateActionCreator = () => ({
	type: types.CALCULATE,
});

export const userActionCreator = (username) => ({
	type: types.USER,
	payload: username,
});

export const loggedInActionCreator = () => ({
	type: types.LOGGED_IN,
});

export const gameStageLevelUp = () => ({
	type: types.GAME_STAGE_LEVEL_UP,
});  

