import React, { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import musicF from '../../assets/sounds/home.mp3';
import musicD from '../../assets/sounds/horror.mp3';

const AudioCreator = (props) => {
	console.log(props, 'hwoaoa');
	const { mode } = props;
	const music = mode === 'friendly' ? musicF : musicD;

	return (
		<ReactHowler
			src={music}
			playing={true}
			loop={true}
			volume={0.1}
		/>
	);
};

export default AudioCreator;
