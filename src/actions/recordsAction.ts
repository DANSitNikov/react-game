export interface Record {
  m: number;
  s: number;
  ml: number;
}

const recordsAction = {
  setEasyLevel: (record: Array<Record>) =>
    ({
      type: 'SET_EASY_LEVEL_RECORDS',
      record,
    } as const),
  setAverageLevel: (record: Array<Record>) =>
    ({
      type: 'SET_AVERAGE_LEVEL_RECORDS',
      record,
    } as const),
  setHardLevel: (record: Array<Record>) =>
    ({
      type: 'SET_HARD_LEVEL_RECORDS',
      record,
    } as const),
  setImpossibleLevel: (record: Array<Record>) =>
    ({
      type: 'SET_IMPOSSIBLE_LEVEL_RECORDS',
      record,
    } as const),
};

export default recordsAction;
