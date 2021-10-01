export const loginHelper = (username: string, descript: string) => {
  if (!username || !descript) {
    alert('no inputs detected');
  } else {
    return 'logging in';
  }
};
