export const loginHelper = (username: string, descript: string) => {
  if (!username || !descript) {
    console.error('no inputs detected');
  } else {
    return 'logging in';
  }
};
