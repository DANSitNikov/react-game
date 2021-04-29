import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import style from './aboutGame.module.scss';
import { getCurrentLanguage } from '../../selectors/selectors';

const AboutGame: React.FC = () => {
	const language = useSelector(getCurrentLanguage);
	const header = useRef<HTMLHeadingElement | null>(null);
	const body = useRef<HTMLParagraphElement | null>(null);

	useEffect(() => {
		Object.keys(language.language).forEach(() => {
			if (language.langStatus === 'rus') {
				header.current!.textContent = language.language.rus.aboutGameContent.header;
				body.current!.textContent = language.language.rus.aboutGameContent.body;
			} else {
				header.current!.textContent = language.language.eng.aboutGameContent.header;
				body.current!.textContent = language.language.eng.aboutGameContent.body;
			}
		});
	}, []);

	return (
		<div className={style.aboutGame}>
			<h3 ref={header}>...</h3>
			<p ref={body} />
		</div>
	);
};

export default AboutGame;
