import React from 'react';
import style from './aboutGame.module.scss';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../selectors/selectors';

const AboutGame = () => {
	const language = useSelector(getCurrentLanguage);
	let element = 1;

	Object.keys(language.language).forEach((key) => {
		if (key === language.langStatus) {
			element = (
				<div className={style.aboutGame} key={key}>
					<h3>{language.language[key].aboutGameContent.header}</h3>
					<p>{language.language[key].aboutGameContent.body}</p>
				</div>
			);
		}
	});

	return element;
};

export default AboutGame;
