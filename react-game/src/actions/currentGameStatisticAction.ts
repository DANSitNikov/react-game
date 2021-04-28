const currentGameStatisticAction = {
	setSeconds: (newSeconds: number) => ({
		type: 'SET_SECONDS',
		newSeconds,
	} as const),
	setOpenCells: (newOpenCells: number) => ({
		type: 'SET_OPEN_CELLS',
		newOpenCells,
	} as const),
	setOpenCellsToZero: () => ({
		type: 'SET_OPEN_CELLS_TO_ZERO',
	} as const),
	setOpenCellsHacked: (newOpenCellsHacked: number) => ({
		type: 'SET_OPEN_CELLS_HACKED',
		newOpenCellsHacked,
	} as const),
	setOpenCellsHackedToZero: () => ({
		type: 'SET_OPEN_CELLS_HACKED_TO_ZERO',
	} as const),
};

type sortStatistic = {
  ml: number,
  s: number,
  m: number
}

const checkStatistic = (time: { ml: number; s: number; m: number; }, level: string) => {
	if (!localStorage.getItem(`record${level}`)) {
		localStorage.setItem(`record${level}`, JSON.stringify([time]));
	} else {
		const arrResult = JSON.parse(localStorage.getItem(`record${level}`)!);
		arrResult.push(time);
		const sorted = arrResult.sort((a: sortStatistic, b: sortStatistic) => (a.ml - b.ml && a.s - b.s
      && a.m - b.m) || (a.ml - b.ml && a.s - b.s) || a.ml - b.ml);
		if (sorted.length > 10) sorted.pop();
		localStorage.setItem(`record${level}`, JSON.stringify(sorted));
	}
};

export const setStatistic = (time: { ml: number; s: number; m: number; }, level: number) => {
	switch (level) {
	case 25:
		return checkStatistic(time, 'easy');
	case 36:
		return checkStatistic(time, 'average');
	case 49:
		return checkStatistic(time, 'hard');
	default:
		return checkStatistic(time, 'impossible');
	}
};

export default currentGameStatisticAction;
