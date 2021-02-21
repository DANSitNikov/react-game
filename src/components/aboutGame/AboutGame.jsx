import React from 'react';
import style from './aboutGame.module.scss';

const AboutGame = (props) => {
	let element;
	console.log(props);

	for (let key in props.language.language) {
		if (key === props.language.langStatus) {
			element = [
				<div className={style.aboutGame}>
					<h3>{props.language.language[key].aboutGameContent.header}</h3>
					<p>{props.language.language[key].aboutGameContent.body}</p>
				</div>
			];
		}
	}

	return (
		<div>
			{element}
		</div>
	);
};

export default AboutGame;
