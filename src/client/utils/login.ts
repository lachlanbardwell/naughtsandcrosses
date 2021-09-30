export const loginHelper = (username: string, descript: string) => {
  if (!username || !descript) {
    setTimeout(() => console.error('no inputs detected'), 1000);
  } else {
    console.log('logging in');
  }
};
