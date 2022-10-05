import * as types from '../constants/actionTypes';

//change puchase to whatever
export const loadGameActionCreator = (resObj) => ({
	type: types.LOAD_GAME,
	payload: resObj,
});

export const addCowActionCreator = () => ({
	type: types.ADD_COW,
});

export const clickCowActionCreator = () => ({
	type: types.CLICK,
});

export const addFieldActionCreator = () => ({
	type: types.ADD_FIELD,
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
})