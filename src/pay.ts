const pay = () => {
  for (let e of employees) {
    if (e.isPayday()) {
      // Вместо создания переменной для pay, сразу передаем результат в deliverPay
      e.deliverPay(e.calculatePay());
    }
  }
};

/*
Было плохо:
Создавалась лишняя переменная `pay`, что увеличивало количество кода без необходимости.

Стало лучше:
Прямо передаем результат метода `calculatePay` в `deliverPay`
*/
