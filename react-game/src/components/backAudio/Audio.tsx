import React, { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';
// @ts-ignore
import { usePageVisibility } from 'react-page-visibility';
import { useSelector } from 'react-redux';
// @ts-ignore
import musicF from '../../assets/sounds/home.mp3';
// @ts-ignore
import musicD from '../../assets/sounds/horror.mp3';
import { getModeStyle, getMusicValue } from '../../selectors/selectors';

const AudioCreator: React.FC = () => {
	const mode = useSelector(getModeStyle);
	const music = useSelector(getMusicValue);
	const [musicSrc, setMusicSrc] = useState<string>(mode === 'friendly' ? musicF : musicD);
	const audio = useRef<ReactHowler | null>(null);
	const isVisible = usePageVisibility();

	useEffect(() => {
		if (mode === 'friendly') {
			setMusicSrc(musicF);
		} else {
			setMusicSrc(musicD);
		}
	}, [mode]);

	return (
		<ReactHowler
			src={musicSrc}
			playing={!!isVisible}
			loop
			volume={Number(music) / 100}
			ref={audio}
		/>
	);
};

export default AudioCreator;
