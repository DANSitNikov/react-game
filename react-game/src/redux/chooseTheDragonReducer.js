const FRIEND = 'FRIEND';
const BOMB = 'BOMB';

const initialState = {
	friend: true,
	bomb: true,
}

const chooseTheDragonReducer = (state = initialState, action) => {
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

export const setFriendDragon = (dragon) => ({
	type: FRIEND,
	dragon,
});

export const setAngryDragon = (dragon) => ({
	type: BOMB,
	dragon,
});

export const setLocalFriendDragon = (value) => {
	localStorage.setItem('friendDragon', JSON.stringify(value));
};

export const setLocalAngryDragon = (value) => {
	localStorage.setItem('angryDragon', JSON.stringify(value));
};

export default chooseTheDragonReducer;
