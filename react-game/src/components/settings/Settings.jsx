import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import style from './settings.module.scss';
import {
	setLocalMusicVolume,
	setLocalSoundVolume,
} from '../../redux/soundReducer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import friendlyOne from '../../assets/images/svgIcons/friendlyDragon.svg';
import friendlyTwo from '../../assets/images/svgIcons/otherFriendlyDragon.svg';
import angryOne from '../../assets/images/svgIcons/angryDragon.svg';
import angryTwo from '../../assets/images/svgIcons/otherAngryDragon.svg';
import { setLocalAngryDragon, setLocalFriendDragon } from '../../redux/chooseTheDragonReducer';

const Settings = (props) => {
	const {
		lang, setEng, setRus,
		toggleMode, mode, sound,
		music, changeMusicVolume,
		changeSoundVolume, bomb,
		friend, setFriendDragon,
		setAngryDragon
	} = props;

	const [valueMusic, setValueMusic] = React.useState(music);
	const [valueSound, setValueSound] = React.useState(sound);

	const friendlyDragon = React.createRef();
	const angryDragon = React.createRef();

	useEffect(() => {
		setValueMusic(music);
		setValueSound(sound);
	});

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

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	const handleClickAway = () => {
		setOpen(false);
	};

	const chooseBomb = (e) => {
		setAngryDragon(!bomb);
		setLocalAngryDragon(!bomb);
		[...angryDragon.current.children].forEach((dragon) => {
			if (e.target === dragon) {
				dragon.classList.add(style.activeAngry);
			} else {
				dragon.classList.remove(style.activeAngry);
			}
		});
	};

	const chooseFriend = (e) => {
		setFriendDragon(!friend);
		setLocalFriendDragon(!friend);
		[...friendlyDragon.current.children].forEach((dragon) => {
			if (e.target === dragon) {
				dragon.classList.add(style.activeFriend);
			} else {
				dragon.classList.remove(style.activeFriend);
			}
		});
	};

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
			<ClickAwayListener onClickAway={handleClickAway}>
				<div className={style.root}>
					<button type="button" onClick={handleClick}>
						Open menu dropdown
					</button>
					{open ? (
						<div className={`${style.dropdown} ${style.choseImg}`}>
							<div ref={friendlyDragon} onClick={chooseFriend} className={style.imagesBlock}>
								<img className={`${style.images} ${
									friend ? style.activeFriend : null
								}`} src={friendlyOne} alt="good dragon"/>
								<img className={`${style.images} ${
									!friend ? style.activeFriend : null
								}`} src={friendlyTwo} alt="good dragon"/>
							</div>
							<div ref={angryDragon} onClick={chooseBomb} className={style.imagesBlock}>
								<img className={`${style.images} ${
									bomb ? style.activeAngry : null
								}`} src={angryOne} alt="angry dragon"/>
								<img className={`${style.images} ${
									!bomb ? style.activeAngry : null
								}`} src={angryTwo} alt="angry dragon"/>
							</div>
						</div>
					) : null}
				</div>
			</ClickAwayListener>
		</div>
	);
};

export default Settings;
