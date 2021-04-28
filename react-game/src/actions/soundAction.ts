const soundAction = {
	changeMusicVolume: (volume: number | number[]) => ({
		type: 'CHANGE_MUSIC_VOLUME',
		volume,
	} as const),
	changeSoundVolume: (volume: number | number[]) => ({
		type: 'CHANGE_SOUND_VOLUME',
		volume,
	} as const),
};

export const setLocalMusicVolume = (volume: number | number[]): void => {
	localStorage.setItem('musicVolume', JSON.stringify(volume));
};

export const setLocalSoundVolume = (volume: number | number[]): void => {
	localStorage.setItem('soundVolume', JSON.stringify(volume));
};

export default soundAction;
