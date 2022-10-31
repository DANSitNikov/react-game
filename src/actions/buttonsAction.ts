const buttonAction = {
	changeShowBombsBtnStatus: (status: string) => ({
		type: 'TOGGLE_SHOW_BTN_STATUS',
		status,
	} as const),
	changeAutoGameStatus: (status: string) => ({
		type: 'TOGGLE_AUTO_GAME_STATUS',
		status,
	} as const),
	changeAutoWinGameStatus: (status: string) => ({
		type: 'TOGGLE_AUTO_WIN_STATUS',
		status,
	} as const),
	changeAboutGameStatus: (status: string) => ({
		type: 'TOGGLE_ABOUT_GAME_STATUS',
		status,
	} as const),
	changeGameStatus: (status: string) => ({
		type: 'TOGGLE_GAME_STATUS',
		status,
	} as const),
	changeRecordsStatus: (status: string) => ({
		type: 'TOGGLE_RECORDS_STATUS',
		status,
	} as const),
	changeSettingsStatus: (status: string) => ({
		type: 'TOGGLE_SETTINGS_STATUS',
		status,
	} as const),
	changeFinishGameStatus: (status: string) => ({
		type: 'TOGGLE_FINISH_STATUS',
		status,
	} as const),
};

export default buttonAction;
