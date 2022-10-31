const chooseTheDragonAction = {
	setFriendDragon: (dragon: boolean) => ({
		type: 'FRIEND',
		dragon,
	} as const),
	setAngryDragon: (dragon: boolean) => ({
		type: 'BOMB',
		dragon,
	} as const),
};

export const setLocalFriendDragon = (value: boolean) => {
	localStorage.setItem('friendDragon', JSON.stringify(value));
};

export const setLocalAngryDragon = (value: boolean) => {
	localStorage.setItem('angryDragon', JSON.stringify(value));
};

export default chooseTheDragonAction;
