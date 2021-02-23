import React from 'react';
import { Button } from 'react-bootstrap';

const Settings = (props) => {
	const { lang, setEng, setRus } = props;
	const changeLang = lang === 'rus'
		? <Button onClick={setEng}>сменить на английский</Button>
		: <Button onClick={setRus}>change to russian</Button>;

	return (
		<div>
			{ changeLang }
		</div>
	);
};

export default Settings;
