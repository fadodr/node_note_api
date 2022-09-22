export const dateToString = (timeInSeconds) => {
    return computeDate(timeInSeconds).toISOString();
};

export const computeDate = (timeInSeconds) => {
    return new Date(Date.now() + timeInSeconds * 1000);
};

export const computDateFromEpoch = (epochTime) => {
  return new Date(epochTime * 1000);
};