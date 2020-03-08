function createAnalitics() {
  let counter = 0;
  let isDestroyed = false;

  const listener = () => (counter += 1);

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
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
