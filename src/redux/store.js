const store = {
	_state: {
		language: {
			'rus': {
				settings: 'Настройки',
				startTheGame: 'Начать игру',
				aboutGame: 'Об игре',
			},
			'eng': {
				settings: 'Settings',
				startTheGame: 'Start the game',
				aboutGame: 'About the game',
			}
		},
		langStatus: 'rus',
	},
	_callSubscriber() {},

	getState() {
		return this._state;
	},
	subscriber(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 'CHANGE-LANG') {
			if (this._state.langStatus === 'rus') {
				this._state.langStatus = 'eng';
			} else {
				this._state.langStatus = 'rus';
			}
		}
		console.log(this._state.langStatus);
		this._callSubscriber(this._state);
	},
}

export default store;