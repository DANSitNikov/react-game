const FRIEND = 'FRIEND';
const BOMB = 'BOMB';

export const initialState = {
	friend: true as boolean,
	bomb: true as boolean,
};

type initialStateType = typeof initialState;

const chooseTheDragonReducer = (state = initialState, action: any):initialStateType => {
	switch (action.type) {
	case FRIEND:
		return {
			...state,
			friend: action.dragon,
		};
	case BOMB:
		return {
			...state,
			bomb: action.dragon,
		};
	default:
		return state;
	}
};

type friend = {
	type: typeof FRIEND,
	dragon: boolean,
}

export const setFriendDragon = (dragon: boolean): friend => ({
	type: FRIEND,
	dragon,
});

type angry = {
	type: typeof BOMB,
	dragon: boolean,
}

export const setAngryDragon = (dragon: boolean): angry => ({
	type: BOMB,
	dragon,
});

export const setLocalFriendDragon = (value: boolean) => {
	localStorage.setItem('friendDragon', JSON.stringify(value));
};

export const setLocalAngryDragon = (value: boolean) => {
	localStorage.setItem('angryDragon', JSON.stringify(value));
};

export default chooseTheDragonReducer;
