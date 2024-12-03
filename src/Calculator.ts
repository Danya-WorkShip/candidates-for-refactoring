class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }

  public subtract(a: number, b: number): number {
    return a - b;
  }

  public multiply(a: number, b: number): number {
    return a * b;
  }

  public divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed."); // Добавили проверку на деление на ноль
    }
    return a / b;
  }
}

/*
Было плохо:
Не было проверки на деление на ноль, что могло привести к ошибкам.

Стало лучше:
Добавили проверку на деление на ноль в методе `divide`. Теперь класс безопаснее в использовании.
*/
