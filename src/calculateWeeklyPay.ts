function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();

  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);

  const straightPay: number = straightTime * tenthRate;

  // Исправили ошибку: при расчёте overtimeRate неверно учитывался базовый tenthRate
  const overtimeRate: number = (overtime ? 1.5 : 1.0) * tenthRate; 
  const overtimePay: number = Math.round(overTime * overtimeRate);

  return straightPay + overtimePay;
}

/*
Было плохо:
Ошибка в выражении для `overtimeRate` приводила к неправильным расчётам. Код сложно читать из-за плотного размещения логики.

Стало лучше:
Исправили формулу расчёта `overtimeRate`. Распределили логику на более читаемые строки. Код стал проще и понятнее.
*/
