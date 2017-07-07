// Реализуйте и экспортируйте по умолчанию функцию retry.
// Задача функции состоит в том, чтобы в случае ошибки повторять вызовы, так, чтобы в сумме,
//  функция была вызвана столько раз, сколько передано первым параметром. Если передан 0,
//   то ставит значение попыток равным 5, что является значением по умолчанию.

// В примере ниже, в худшем случае, функция будет вызвана три раза.

retry(3, callback =>
  fs.readFile('file.txt', (err, body) => {
    callback(err, body);
  }), (err, result) => {
    console.log(result);
});

const fn = innerCallback =>
  fs.readFile('file.txt', (err, body) => {
    innerCallback(err, body);
  });
const outerCallback = (err, result) => {
    console.log(result);
};
retry(3, fn, outerCallback);