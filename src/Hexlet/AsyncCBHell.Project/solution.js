export default (countErr, fn, outerCallback) => {
  let count = countErr === 0 ? 5 : countErr;

  const next = (head, previousresult) => {
    // console.log('Function  = ', head);
    const cb = (err, ...args) => {
      if (err && count !== 0) {
        // console.log('previousresult = ', previousresult);
        // console.log('count = ', count);
        count -= 1;
        return head(...previousresult, cb);// head(...previousresult, cb);
      }
      if (count === 0) {
        outerCallback(err, args);
      }
    };
    head(...previousresult, cb);
  };
  next(fn, []);
}

// waterfall
// export default (functions, callback) => { // внешний колбек, который нужен фактически для отображения ошибки, можем забыть о нём
//   if (functions.length === 0) {
//     return callback(); // выполняем коблек с пустыми параметрами без ошибки - ничего не произошло во время выполнения функций, так как их нет
//   }

//   const next = ([head, ...rest], previousresult) => { // head - первая функция, rest - массив остальных функций, previousresult - массив значений, который мы получили из предыдущего уровня,  результаты выполнения колбеков
//     const cb = (err, ...args) => { // создаём коблек по шаблону с дистракчерингом, чтобы передать его в каждый вызов functions, args-массив чего?
//       if (err) {
//         return callback(err, args); // если ошибка в ходе выполения head, вызываем внешний колбек с этой ошибкой, args -? 
//       } else {
//         next(rest, args); // если ошибки нет берём следущую функцию и отдаём туда массив ?? элементов
//       }
//     };
//     head(...previousresult, cb); // выполняем непосредственно ф-июб которая спередом берёт на вход результаты выполнения колбеков и запускает новый колбек 
//   };
//   next(functions, []); // первый запуск итерационной рекурсии
// }
