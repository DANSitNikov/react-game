const CHANGE_MUSIC_VOLUME = 'CHANGE_MUSIC';
const CHANGE_SOUND_VOLUME = 'CHANGE_SOUND_VOLUME';

const initialState = {
	music: 50,
	sound: 50,
}

const soundReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_MUSIC_VOLUME:
			return {
				...state,
				music: action.volume,
			}
		case CHANGE_SOUND_VOLUME:
			return {
				...state,
				sound: action.volume,
			}
		default:
			return state;
	}
};

export const changeMusicVolume = (volume) => ({
	type: CHANGE_MUSIC_VOLUME,
	volume,
});

export const changeSoundVolume = (volume) => ({
	type: CHANGE_SOUND_VOLUME,
	volume,
});

export const setLocalMusicVolume = (volume) => {
	localStorage.setItem('musicVolume', JSON.stringify(volume));
}

export const setLocalSoundVolume = (volume) => {
	localStorage.setItem('soundVolume', JSON.stringify(volume));
}

export default soundReducer;