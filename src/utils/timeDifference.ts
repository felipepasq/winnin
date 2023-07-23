export const getTimeDifference = (timestamp: number) => {
  const now = new Date().getTime();
  const timestampMilliseconds = timestamp * 1000; // Convert the timestamp to milliseconds
  const timeDifferenceMilliseconds = now - timestampMilliseconds;

  const hours = Math.floor(timeDifferenceMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (timeDifferenceMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  if (hours >= 1) {
    return `${hours} hora${hours > 1 ? "s" : ""}`;
  } else {
    return `${minutes} minutos`;
  }
};
