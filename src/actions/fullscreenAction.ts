const fullscreenAction = {
	setFullScreenStatus: (status: boolean) => ({
		type: 'SET_FULL_SCREEN_STATUS',
		status,
	} as const),
};

export default fullscreenAction;
