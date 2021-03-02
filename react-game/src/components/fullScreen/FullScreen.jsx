import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import FullscreenIcon from '@material-ui/icons/Fullscreen';import style from './fullscreen.module.scss';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const FullScreen = (props) => {
	const { status } = props;
	const [zoom] = useState();

	useEffect(() => {
		document.addEventListener("fullscreenchange", function() {
			if (!document.fullscreenElement) {
				props.setFullScreenStatus(false);
			}
		});
	}, []);

	const setSize = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
				.catch((e) => console.log(e));
			props.setFullScreenStatus(true);
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen()
					.catch((e) => console.log(e));
				props.setFullScreenStatus(false);
			}
		}
	};

	return (
		<Button ref={zoom} onClick={setSize} variant="contained" className={style.zoom}>
			{!status ? <FullscreenIcon /> : <FullscreenExitIcon />}
		</Button>
	);
};

export default FullScreen;
