type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};

const Warning = (type: WarningType): TWarning => {
  return { type }; // Убрали излишний перенос строки
};

const addError = (errors: TMutableList<TWarning>): void => {
  // Чёткое указание возвращаемого типа для функции
  errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};

/*
Было плохо:
Не уазали возвращаемый тип для функции `addError`, что могло усложнить понимание кода. В функции `Warning` лишний перенос строки делал код менее компактным.

Стало Лучше:
Добавили явный тип `void` для `addError`, чтобы код был понятнее. Убрали лишний перенос строки в `Warning`, теперь код лаконичнее.
*/
