import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import style from './fullscreen.module.scss';

interface Props {
  status: boolean;
  setFullScreenStatus: (bool: boolean) => void;
}

const FullScreen: React.FC<Props> = (props) => {
  const { status, setFullScreenStatus } = props;
  const zoom = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        setFullScreenStatus(false);
      }
    });
  }, []);

  const setSize = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => console.log(e));
      setFullScreenStatus(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch((e) => console.log(e));
      setFullScreenStatus(false);
    }
  };

  return (
    <Button
      ref={zoom}
      onClick={setSize}
      variant="contained"
      className={style.zoom}
    >
      {!status ? <FullscreenIcon /> : <FullscreenExitIcon />}
    </Button>
  );
};

export default FullScreen;
