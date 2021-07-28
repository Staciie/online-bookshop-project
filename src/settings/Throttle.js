export const throttle = (func, limit) => {
  let lastTime = 0;
  return function (...args) {
    const context = this;
    const now = new Date();
    if (now - lastTime >= limit) {
      func.apply(context, args);
      lastTime = now;
    }
  };
};
