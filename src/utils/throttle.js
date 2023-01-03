let timeout;

export default async (func, delay = 100, ...args) => {
    clearTimeout(timeout);
    return (timeout = setTimeout(async () => {
        timeout = undefined;
        await func(...args);
    }, delay));
};
