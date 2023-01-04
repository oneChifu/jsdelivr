let timeout = 0;
let lastCalled = 0;

export default async (func, delay = 100, ...args) => {
    if (Date.now() - lastCalled < delay) {
        return;
    }

    clearTimeout(timeout);
    return new Promise(resolve => {
        timeout = setTimeout(async () => {
            lastCalled = Date.now();
            resolve(await func(...args));
        }, delay);
    });
};
