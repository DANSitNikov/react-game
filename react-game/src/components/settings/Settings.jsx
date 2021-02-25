import React from 'react';
import { Button } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';

const Settings = (props) => {
	const { lang, setEng, setRus, toggleMode, mode } = props;
	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
	};

	const changeLang = lang === 'rus'
		? <Button onClick={setEng}>сменить на английский</Button>
		: <Button onClick={setRus}>change to russian</Button>;

	const onToggleMode = mode === 'friendly'
		? <Button onClick={() => toggleMode('danger')}>сменить на опасность</Button>
		: <Button onClick={() => toggleMode('friendly')}>сменить на дружелюбность</Button>;

	return (
		<div>
			{ changeLang }
			{ onToggleMode }
			<Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
		</div>
	);
};

export default Settings;
