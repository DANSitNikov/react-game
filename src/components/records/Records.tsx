import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './records.module.scss';

const Records: React.FC<any> = (props) => {
  const { easyLevel, averageLevel, hardLevel, impossibleLevel, language } =
    props;

  let element: Array<number> = [];

  Object.keys(language.language).forEach((key) => {
    if (key === props.language.langStatus) {
      element = [
        props.language.language[key].levels.easy,
        props.language.language[key].levels.average,
        props.language.language[key].levels.hard,
        props.language.language[key].levels.impossible,
      ];
    }
  });

  const content = (level: string) => {
    let data;

    if (level === 'easy') {
      data = easyLevel;
    } else if (level === 'average') {
      data = averageLevel;
    } else if (level === 'hard') {
      data = hardLevel;
    } else if (level === 'impossible') {
      data = impossibleLevel;
    }

    if (!data) {
      data = [];
    }

    const markUp = [];

    for (let i = 0; i < 10; i += 1) {
      markUp.push(
        <div className={style.statisticItem}>
          <div>{i + 1})</div>
          <div>
            {data[i] ? (
              <>
                <span>{data[i].m < 10 ? `0${data[i].m}` : data[i].m}</span>
                <span> : </span>
                <span>{data[i].s < 10 ? `0${data[i].s}` : data[i].s}</span>
                <span> : </span>
                <span>{data[i].ml < 10 ? `0${data[i].ml}` : data[i].ml}</span>
              </>
            ) : (
              'X'
            )}
          </div>
        </div>,
      );
    }

    return markUp;
  };

  return (
    <div className={style.records}>
      <div className={style.statisticBlock}>
        <h2>{element[0]}</h2>
        <div>{content('easy')}</div>
      </div>
      <div className={style.statisticBlock}>
        <h2>{element[1]}</h2>
        <div>{content('average')}</div>
      </div>
      <div className={style.statisticBlock}>
        <h2>{element[2]}</h2>
        <div>{content('hard')}</div>
      </div>
      <div className={style.statisticBlock}>
        <h2>{element[3]}</h2>
        <div>{content('impossible')}</div>
      </div>
    </div>
  );
};

export default Records;
