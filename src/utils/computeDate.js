export const dateToString = (timeInSeconds) => {
    return new Date(Date.now() + timeInSeconds * 1000).toISOString();
};