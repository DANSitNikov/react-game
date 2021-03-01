import React, { useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import style from './settings.module.scss';
import {
	setLocalMusicVolume,
	setLocalSoundVolume,
} from '../../redux/soundReducer';
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
		setAngryDragon,
	} = props;

	const color = mode === 'friendly' ? 'primary' : 'secondary';

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

	let element = {};

	Object.keys(lang.language).forEach((key) => {
		if (key === props.lang.langStatus) {
			element = {
				changeLang: props.lang.language[key].settings.changeLang,
				changeTheme: props.lang.language[key].settings.changeTheme,
				chooseCharacter: props.lang.language[key].settings.chooseCharacter,
				musicVolume: props.lang.language[key].settings.musicVolume,
				soundVolume: props.lang.language[key].settings.soundVolume,
			};
		}
	});

	return (
		<div className={style.settings}>
			<Button variant="contained" color={color} onClick={lang.langStatus === 'rus' ? setEng : setRus}><h5>{element.changeLang}</h5></Button>
			<Button variant="contained" color={color} onClick={() => toggleMode(`${mode === 'friendly' ? 'danger' : 'friendly'}`)}><h5>{element.changeTheme}</h5></Button>
			<div>
				<Typography gutterBottom>
					<h4>{element.musicVolume}</h4>
				</Typography>
				<Slider valueLabelDisplay="auto" value={valueMusic} color={color} onChange={handleChangeMusic} className={style.soundSlider} aria-labelledby="continuous-slider" />
			</div>
			<div>
				<Typography gutterBottom>
					<h4>{element.soundVolume}</h4>
				</Typography>
				<Slider valueLabelDisplay="auto" value={valueSound} onChange={handleChangeSound} color={color} className={style.soundSlider} aria-labelledby="continuous-slider" />
			</div>
			<ClickAwayListener onClickAway={handleClickAway}>
				<div className={style.root}>
					<Button variant="contained" color={color} type="button" onClick={handleClick}>
						<h5>{element.chooseCharacter}</h5>
					</Button>
					{open ? (
						<div className={`${style.dropdown} ${style.choseImg}`}>
							<div ref={friendlyDragon} onClick={chooseFriend} className={style.imagesBlock}>
								<img
									className={`${style.images} ${
										friend ? style.activeFriend : null
									}`}
									src={friendlyOne}
									alt="good dragon"
								/>
								<img
									className={`${style.images} ${
										!friend ? style.activeFriend : null
									}`}
									src={friendlyTwo}
									alt="good dragon"
								/>
							</div>
							<div ref={angryDragon} onClick={chooseBomb} className={style.imagesBlock}>
								<img
									className={`${style.images} ${
										bomb ? style.activeAngry : null
									}`}
									src={angryOne}
									alt="angry dragon"
								/>
								<img
									className={`${style.images} ${
										!bomb ? style.activeAngry : null
									}`}
									src={angryTwo}
									alt="angry dragon"
								/>
							</div>
						</div>
					) : null}
				</div>
			</ClickAwayListener>
		</div>
	);
};

export default Settings;
