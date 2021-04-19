import React from 'react';
import ReactHowler from 'react-howler';
import { usePageVisibility } from 'react-page-visibility';
import musicF from '../../assets/sounds/home.mp3';
import musicD from '../../assets/sounds/horror.mp3';
import { useSelector } from 'react-redux';
import { getModeStyle, getMusicValue } from '../../selectors/selectors';

const AudioCreator = () => {
	const mode = useSelector(getModeStyle);
	const music = useSelector(getMusicValue);
	const musicSrc = mode === 'friendly' ? musicF : musicD;
	const audio = React.createRef();
	const isVisible = usePageVisibility();

	return (
		<ReactHowler
			src={musicSrc}
			playing={!!isVisible}
			loop={`${true}`}
			volume={music / 100}
			ref={audio}
		/>
	);
};

export default AudioCreator;
