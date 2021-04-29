const changeLangAction = {
	setRus: () => ({
		type: 'RUS',
		lang: 'rus',
	} as const),
	setEng: () => ({
		type: 'ENG',
		lang: 'eng',
	} as const),
};

export const setLanguage = (lang: string): void => {
	localStorage.setItem('gameLanguage', JSON.stringify(lang));
};

export default changeLangAction;
