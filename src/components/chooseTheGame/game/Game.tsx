import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Howl } from 'howler';
import { useSelector } from 'react-redux';
import style from './game.module.scss';
import Item from '../gameItem/Item';
import {
  bombsIncludes,
  createBombs,
  createElement,
  createGameData,
  disableAllBtns,
  friendIncludes,
} from '../../../actions/gameAction';
import TimerContainer from '../../timer/TimerContainer';
import OpenCellsContainer from '../../openCells/OpenCellsContainer';
// @ts-ignore
import friendlyDragon from '../../../assets/sounds/friendlydragon.mp3';
import {
  getBombHero,
  getCurrentLanguage,
  getFriendHero,
  getModeStyle,
  getOpenCellsHacked,
} from '../../../selectors/selectors';

const Game: React.FC<any> = (props) => {
  const {
    disableField,
    openCells,
    finishedGame,
    winnerGame,
    soundVolume,
    showBombsBtn,
    autoGameBtn,
    autoWinBtn,
    finishGameBtn,
  } = props;

  const language = useSelector(getCurrentLanguage);
  const mode = useSelector(getModeStyle);
  const friend = useSelector(getFriendHero);
  const bomb = useSelector(getBombHero);
  const openCellsHacked = useSelector(getOpenCellsHacked);

  let { number } = props;

  if (!number) {
    number = JSON.parse(localStorage.getItem('size')!);
  }

  const [bombs] = useState<Array<number>>([...createBombs(number)]);
  const [element] = useState<Array<number>>([...createElement(number)]);
  const [checked] = useState<Array<number>>([]);
  const won = useRef<HTMLDivElement | null>(null);
  const lost = useRef<HTMLDivElement | null>(null);
  const hacked = useRef<HTMLDivElement | null>(null);
  const [friendlyDragonSound] = useState(
    new Howl({
      src: friendlyDragon,
      volume: soundVolume / 100,
    }),
  );
  const gameField = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState<any>();
  const color = mode === 'friendly' ? 'primary' : 'secondary';

  localStorage.setItem('size', JSON.stringify(number));

  if (openCellsHacked === number - bombs.length) {
    finishedGame(true);
    props.changeShowBombsBtnStatus('inactive');
    props.changeFinishGameStatus('inactive');
    setTimeout(() => {
      hacked.current!.classList.add(style.visible);
    }, 1500);
  }

  if (
    openCells === number - bombs.length &&
    openCellsHacked !== number - bombs.length
  ) {
    finishedGame(true);
    winnerGame(true);
    disableAllBtns(gameField);
    props.changeShowBombsBtnStatus('inactive');
    props.changeFinishGameStatus('inactive');
    setTimeout(() => {
      won.current!.classList.add(style.visible);
    }, 1500);
  }

  let phrases: any = {};

  Object.keys(language.language).forEach((key) => {
    if (key === props.language.langStatus) {
      phrases = {
        startGame: props.language.language[key].game.startGame,
        clickToStart: props.language.language[key].game.clickToStart,
        showBombs: props.language.language[key].game.showBombs,
        autoGame: props.language.language[key].game.autoGame,
        autoVictory: props.language.language[key].game.autoVictory,
        finishTheGame: props.language.language[key].game.finishTheGame,
        victory: props.language.language[key].game.victory,
        defeat: props.language.language[key].game.defeat,
        hackingVictory: props.language.language[key].game.hackingVictory,
      };
    }
  });

  const checkItem = (e: any) => {
    let target;
    if (e.target) {
      target = e.target;
    } else {
      target = e;
    }

    if (target.className.includes(style.field)) {
      return;
    }

    const { item, bombsCount, btnText } = createGameData(target, number, bombs);

    if (bombs.includes(item)) {
      bombsIncludes(gameField, bombs, bomb);
      finishedGame(true);
      props.changeShowBombsBtnStatus('inactive');
      props.changeFinishGameStatus('inactive');
      setTimeout(() => {
        lost.current!.classList.add(style.visible);
      }, 1500);
    } else {
      friendIncludes(btnText, friend, target);
      props.setOpenCells(1);
    }

    checked.push(item);

    if (btnText === 0 && !bombs.includes(item)) {
      const checkOtherItems = (arr: Array<number>) => {
        arr.forEach((el: number) => {
          if (!checked.includes(el)) {
            checkItem(gameField.current!.children[el - 1]);
          }
        });
      };

      checkOtherItems(bombsCount);
    }

    props.changeAutoGameStatus('inactive');
    props.changeAutoWinGameStatus('inactive');
  };

  const showBombs = (e: any) => {
    e.preventDefault();

    [...gameField.current!.children].forEach((button) => {
      if (bombs.includes(Number(button.id.split('-')[1]))) {
        if (bomb) {
          button.classList.add(style.aggressiveOne);
        } else {
          button.classList.add(style.aggressiveTwo);
        }
      }
    });

    setTimeout(() => {
      [...gameField.current!.children].forEach((button) => {
        if (bombs.includes(Number(button.id.split('-')[1]))) {
          if (bomb) {
            button.classList.remove(style.aggressiveOne);
          } else {
            button.classList.remove(style.aggressiveTwo);
          }
        }
      });
      props.changeShowBombsBtnStatus('inactive');
    }, 500);
  };

  const autoWin = () => {
    const createItem = (): number => {
      const preItem = Math.ceil(Math.random() * number);
      if (!checked.includes(preItem)) {
        return preItem;
      }
      return createItem();
    };
    const itemGlobal = createItem();

    const autoWinGo = (itemLocal?: number) => {
      const parameter = !itemLocal ? itemGlobal : itemLocal;
      const { item, bombsCount, btnText } = createGameData(
        parameter,
        number,
        bombs,
      );

      friendIncludes(btnText, friend, gameField.current!.children[item - 1]);

      props.setOpenCellsHacked(1);
      props.setOpenCells(1);
      checked.push(item);

      if (btnText === 0 && !bombs.includes(item)) {
        const checkOtherItems = (arr: Array<number>) => {
          arr.forEach((el: number) => {
            if (!checked.includes(el)) {
              const giveItem = Number(
                gameField.current!.children[el - 1].id.split('-')[1],
              );
              autoWinGo(giveItem);
            }
          });
        };

        checkOtherItems(bombsCount);
      }
    };

    autoWinGo();
  };

  const startAutoWinGame = () => {
    disableAllBtns(gameField);
    checked.push(...bombs);

    setStart(
      setInterval(() => {
        if (checked.length === number) {
          clearInterval(start);
        } else {
          friendlyDragonSound.play();
          autoWin();
        }
      }, 2000),
    );

    props.changeShowBombsBtnStatus('inactive');
    props.changeAutoGameStatus('inactive');
    props.changeAutoWinGameStatus('inactive');
  };

  const autoGame = () => {
    const createItem = (): number => {
      const preItem = Math.ceil(Math.random() * number);
      if (!checked.includes(preItem)) {
        return preItem;
      }
      return createItem();
    };
    const itemGlobal = createItem();

    const autoGameGo = (itemLocal?: number) => {
      const parameter = !itemLocal ? itemGlobal : itemLocal;
      const { item, bombsCount, btnText } = createGameData(
        parameter,
        number,
        bombs,
      );

      if (bombs.includes(item)) {
        bombsIncludes(gameField, bombs, bomb);
        finishedGame(true);
        props.changeFinishGameStatus('inactive');
        setTimeout(() => {
          lost.current!.classList.add(style.visible);
        }, 1500);
      } else {
        friendIncludes(btnText, friend, gameField.current!.children[item - 1]);
        props.setOpenCells(1);
      }

      checked.push(item);

      if (btnText === 0 && !bombs.includes(item)) {
        const checkOtherItems = (arr: Array<number>) => {
          arr.forEach((el: number) => {
            if (!checked.includes(el)) {
              const giveItem = Number(
                gameField.current!.children[el - 1].id.split('-')[1],
              );
              autoGameGo(giveItem);
            }
          });
        };

        checkOtherItems(bombsCount);
      }
    };

    autoGameGo();
  };

  const startAutoGame = (e: any) => {
    const target = e.target as HTMLButtonElement;
    target.disabled = true;

    disableAllBtns(gameField);

    setStart(
      setInterval(() => {
        let limit = false;
        if (checked.length !== 0) {
          for (let i = 0; i < checked.length; i += 1) {
            if (bombs.includes(checked[i])) {
              limit = true;
            }
          }
        }
        if (limit) {
          clearInterval(start);
        } else {
          friendlyDragonSound.play();
          autoGame();
        }
      }, 2000),
    );

    props.changeShowBombsBtnStatus('inactive');
    props.changeAutoGameStatus('inactive');
    props.changeAutoWinGameStatus('inactive');
  };

  const gameFieldElement = () => {
    props.changeAboutGameStatus('inactive');
    props.changeGameStatus('inactive');
    props.changeSettingsStatus('inactive');
    props.changeRecordsStatus('inactive');

    return (
      <div
        onClick={(e) => {
          checkItem(e);
          friendlyDragonSound.play();
        }}
        ref={gameField}
        className={`${style.field} ${
          number === 25
            ? style.twentyFive
            : number === 36
            ? style.thirtySix
            : number === 49
            ? style.fortySeven
            : style.impossible
        }`}
      >
        {element.map((item) => (
          <Item key={item} item={item} />
        ))}
      </div>
    );
  };

  const finishTheGame = () => {
    props.changeAboutGameStatus('active');
    props.changeGameStatus('active');
    props.changeSettingsStatus('active');
    props.changeRecordsStatus('active');
    props.changeFinishGameStatus('active');
    props.changeGameStatusControl('finished');
    clearInterval(start);
    props.setFieldStatus(false);
  };

  const startTheGame = () => {
    props.changeGameStatusControl('started');
    props.setFieldStatus(false);
  };

  return (
    <div>
      {disableField ? (
        <div className={style.startingTheGame}>
          <div className={style.needClickToStart}>
            <h2>{phrases.clickToStart}</h2>
          </div>
          <Button
            className={style.startTheGame}
            onClick={startTheGame}
            variant="contained"
            color={color}
          >
            <h4>{phrases.startGame}</h4>
          </Button>
        </div>
      ) : (
        <>
          <div className={style.statistic}>
            <OpenCellsContainer />
            <TimerContainer />
          </div>
          {gameFieldElement()}
          <div className={style.btnWrapper}>
            <Button
              onClick={showBombs}
              variant="contained"
              color={color}
              disabled={showBombsBtn !== 'active'}
            >
              {phrases.showBombs}
            </Button>
            <Button
              onClick={startAutoGame}
              variant="contained"
              color={color}
              disabled={autoGameBtn !== 'active'}
            >
              {phrases.autoGame}
            </Button>
            <Button
              onClick={startAutoWinGame}
              variant="contained"
              color={color}
              disabled={autoWinBtn !== 'active'}
            >
              {phrases.autoVictory}
            </Button>
            <NavLink
              className={
                finishGameBtn === 'inactive' ? style.disableLink : undefined
              }
              to="/game"
            >
              <Button
                disabled={finishGameBtn === 'inactive'}
                className={style.finishBtn}
                onClick={finishTheGame}
                variant="contained"
              >
                {phrases.finishTheGame}
              </Button>
            </NavLink>
          </div>
          <div ref={won} className={style.invisible}>
            <div className={style.backVictory}>
              <h3>{phrases.victory}</h3>
              <NavLink to="/game">
                <Button
                  className={style.finishBtn}
                  onClick={finishTheGame}
                  variant="contained"
                >
                  {phrases.finishTheGame}
                </Button>
              </NavLink>
            </div>
          </div>
          <div ref={lost} className={style.invisible}>
            <div className={style.backDefeat}>
              <h3>{phrases.defeat}</h3>
              <NavLink to="/game">
                <Button
                  className={style.finishBtn}
                  onClick={finishTheGame}
                  variant="contained"
                >
                  {phrases.finishTheGame}
                </Button>
              </NavLink>
            </div>
          </div>
          <div ref={hacked} className={style.invisible}>
            <div className={style.backVictory}>
              <h3>{phrases.hackingVictory}</h3>
              <NavLink to="/game">
                <Button
                  className={style.finishBtn}
                  onClick={finishTheGame}
                  variant="contained"
                >
                  {phrases.finishTheGame}
                </Button>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
