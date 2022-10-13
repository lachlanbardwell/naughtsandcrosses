export const loginHelper = (username: string, opponent: string) => {
  if (!username || !opponent) {
    console.error('no inputs detected');
  } else {
    return 'logging in';
  }
};
