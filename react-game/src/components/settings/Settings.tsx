import React, { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import style from './settings.module.scss';
import soundAction, { setLocalMusicVolume, setLocalSoundVolume } from '../../actions/soundAction';
import friendlyOne from '../../assets/images/svgIcons/friendlyDragon.svg';
import friendlyTwo from '../../assets/images/svgIcons/otherFriendlyDragon.svg';
import angryOne from '../../assets/images/svgIcons/angryDragon.svg';
import angryTwo from '../../assets/images/svgIcons/otherAngryDragon.svg';
import chooseTheDragonAction, { setLocalFriendDragon, setLocalAngryDragon } from '../../actions/chooseTheDragonAction';
import changeLangAction, { setLanguage } from '../../actions/changeLangAction';
import {
	getBombHero,
	getCurrentLanguage,
	getFriendHero,
	getModeStyle,
	getMusicValue,
	getSoundValue,
} from '../../selectors/selectors';
import styleModeAction from '../../actions/styleModeAction';

type Element = {
	changeLang?: string,
	changeTheme?: string,
	chooseCharacter?: string | boolean,
	musicVolume?: any,
	soundVolume?: any,
}

const Settings = () => {
	const friend = useSelector(getFriendHero);
	const bomb = useSelector(getBombHero);
	const lang = useSelector(getCurrentLanguage);
	const mode = useSelector(getModeStyle);
	const music = useSelector(getMusicValue);
	const sound = useSelector(getSoundValue);
	const dispatch = useDispatch();

	const color = mode === 'friendly' ? 'primary' : 'secondary';

	const [valueMusic, setValueMusic] = useState<number | number[]>(music);
	const [valueSound, setValueSound] = useState<number | number[]>(sound);

	const friendlyDragon = React.createRef<HTMLDivElement>();
	const angryDragon = React.createRef<HTMLDivElement>();

	useEffect(() => {
		setValueMusic(music);
		setValueSound(sound);
	});

	const handleChangeMusic = (event: any, newValue: number | number[]) => {
		setValueMusic(newValue);
		dispatch(soundAction.changeMusicVolume(newValue));
		setLocalMusicVolume(valueMusic);
	};

	const handleChangeSound = (event: any, newValue: number | number[]) => {
		setValueSound(newValue);
		dispatch(soundAction.changeSoundVolume(newValue));
		setLocalSoundVolume(newValue);
	};

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	const handleClickAway = () => {
		setOpen(false);
	};

	const chooseBomb = (e: any) => {
		dispatch(chooseTheDragonAction.setAngryDragon(!bomb));
		setLocalAngryDragon(!bomb);
		[...angryDragon.current!.children].forEach((dragon) => {
			if (e.target === dragon) {
				dragon.classList.add(style.activeAngry);
			} else {
				dragon.classList.remove(style.activeAngry);
			}
		});
	};

	const chooseFriend = (e: any) => {
		dispatch(chooseTheDragonAction.setFriendDragon(!friend));
		setLocalFriendDragon(!friend);
		[...friendlyDragon.current!.children].forEach((dragon) => {
			if (e.target === dragon) {
				dragon.classList.add(style.activeFriend);
			} else {
				dragon.classList.remove(style.activeFriend);
			}
		});
	};

	let element: Element = {};

	Object.keys(lang.language).forEach(() => {
		if (lang.langStatus === 'rus') {
			element = {
				changeLang: lang.language.rus.settings.changeLang,
				changeTheme: lang.language.rus.settings.changeTheme,
				chooseCharacter: lang.language.rus.settings.chooseCharacter,
				musicVolume: lang.language.rus.settings.musicVolume,
				soundVolume: lang.language.rus.settings.soundVolume,
			};
		}
		if (lang.langStatus === 'eng') {
			element = {
				changeLang: lang.language.eng.settings.changeLang,
				changeTheme: lang.language.eng.settings.changeTheme,
				chooseCharacter: lang.language.eng.settings.chooseCharacter,
				musicVolume: lang.language.eng.settings.musicVolume,
				soundVolume: lang.language.eng.settings.soundVolume,
			};
		}
	});

	const setLanguageToStorage = () => {
		if (lang.langStatus === 'rus') {
			dispatch(changeLangAction.setEng());
			setLanguage('eng');
		} else {
			dispatch(changeLangAction.setRus());
			setLanguage('rus');
		}
	};

	const chooseMode = () => {
		dispatch(styleModeAction.toggleMode(`${mode === 'friendly' ? 'danger' : 'friendly'}`));
	};

	return (
		<div className={style.settings}>
			<Button variant="contained" color={color} onClick={setLanguageToStorage}><h5>{element.changeLang}</h5></Button>
			<Button variant="contained" color={color} onClick={chooseMode}><h5>{element.changeTheme}</h5></Button>
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
