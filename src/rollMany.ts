const rollMany = (n: number, pins: number): void => {
  // Используем Array.from для генерации нужного количества выводов
  Array.from({ length: n }).forEach(() => console.log(pins));
};

/*
Было плохо:
Цикл `for` был вполне рабочим, но код был более громоздким

Стало лучше:
Использовали `Array.from` с `forEach`, что делает код более современным и кратким.
*/ 
