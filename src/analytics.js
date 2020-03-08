function createAnalitics() {
  let counter = 0;
  let destroyed = false;

  const listener = () => (counter += 1);

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },
    getClick() {
      if (isDestroyed) {
        return `Analitics is destroyed. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
}

window.analitics = createAnalitics();

console.log('test');
