const styleModeAction = {
  toggleMode: (mode: string) => {
    localStorage.setItem('gameMode', JSON.stringify(mode));
    return {
      type: 'TOGGLE_MODE',
      mode,
    } as const;
  },
};

export default styleModeAction;
