export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);  // Ensure it's an integer
  const formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

  return `${minutes}:${formattedSeconds}`;
};
