import React from 'react';
import style from './aboutGame.module.scss';

const AboutGame = (props) => {
	const { language } = props;
	let element = 1;

	Object.keys(language.language).forEach((key) => {
		if (key === language.langStatus) {
			element = [
				<div className={style.aboutGame}>
					<h3>{props.language.language[key].aboutGameContent.header}</h3>
					<p>{props.language.language[key].aboutGameContent.body}</p>
				</div>,
			];
		}
	});

	return (
		<div>
			{ element }
		</div>
	);
};

export default AboutGame;
