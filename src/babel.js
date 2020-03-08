async function start() {
  return await Promise.resolve('async is working');
}

start().then(console.log);

class Util {
  static id = Date.now();
}

const unused = 42;

console.log('Util Id:', Util.id);
