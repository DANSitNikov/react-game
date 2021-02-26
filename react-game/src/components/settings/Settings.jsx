import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import style from './settings.module.scss';
import Typography from '@material-ui/core/Typography';
import {
	setLocalMusicVolume,
	setLocalSoundVolume
} from '../../redux/soundReducer';

const Settings = (props) => {
	const { lang, setEng, setRus,
		toggleMode, mode, sound,
		music, changeMusicVolume,
		changeSoundVolume} = props;

	const [valueMusic, setValueMusic] = React.useState(music);
	const [valueSound, setValueSound] = React.useState(sound);

	useEffect(() => {
		console.log(music, 'whyyyy');
	//	debugger;
		setValueMusic(music);
		setValueSound(sound);
	})

	const handleChangeMusic = (event, newValue) => {
		setValueMusic(newValue);
		changeMusicVolume(newValue);
		setLocalMusicVolume(valueMusic);
	};

	const handleChangeSound = (event, newValue) => {
		setValueSound(newValue);
		changeSoundVolume(newValue);
		setLocalSoundVolume(newValue);
	};

	const changeLang = lang === 'rus'
		? <Button onClick={setEng}>сменить на английский</Button>
		: <Button onClick={setRus}>change to russian</Button>;

	const onToggleMode = mode === 'friendly'
		? <Button onClick={() => toggleMode('danger')}>сменить на опасность</Button>
		: <Button onClick={() => toggleMode('friendly')}>сменить на дружелюбность</Button>;

	return (
		<div className={style.settings}>
			{ changeLang }
			{ onToggleMode }
			<div>
				<Typography gutterBottom>Music volume</Typography>
				<Slider valueLabelDisplay="auto" value={valueMusic} onChange={handleChangeMusic} className={style.soundSlider} aria-labelledby="continuous-slider" />
			</div>
			<div>
				<Typography gutterBottom>Sound volume</Typography>
				<Slider valueLabelDisplay="auto" value={valueSound} onChange={handleChangeSound} className={style.soundSlider} aria-labelledby="continuous-slider" />
			</div>
		</div>
	);
};

export default Settings;
