const CHANGE_MUSIC_VOLUME = 'CHANGE_MUSIC';
const CHANGE_SOUND_VOLUME = 'CHANGE_SOUND_VOLUME';

const initialState = {
	music: 50 as number,
	sound: 50 as number,
};

type InitialState = typeof initialState;

const soundReducer = (state = initialState, action: any): InitialState => {
	switch (action.type) {
	case CHANGE_MUSIC_VOLUME:
		return {
			...state,
			music: action.volume,
		};
	case CHANGE_SOUND_VOLUME:
		return {
			...state,
			sound: action.volume,
		};
	default:
		return state;
	}
};

type MusicVolume = {
	type: typeof CHANGE_MUSIC_VOLUME,
	volume: number | number[],
}

export const changeMusicVolume = (volume: number | number[]): MusicVolume => ({
	type: CHANGE_MUSIC_VOLUME,
	volume,
});

type SoundVolume = {
	type: typeof CHANGE_SOUND_VOLUME,
	volume: number | number[],
}

export const changeSoundVolume = (volume: number | number[]): SoundVolume => ({
	type: CHANGE_SOUND_VOLUME,
	volume,
});

export const setLocalMusicVolume = (volume: number | number[]): void => {
	localStorage.setItem('musicVolume', JSON.stringify(volume));
};

export const setLocalSoundVolume = (volume: number | number[]): void => {
	localStorage.setItem('soundVolume', JSON.stringify(volume));
};

export default soundReducer;
