class Car2 {
  public static readonly COLORS = ['red', 'blue', 'green'];

  // Упростили метод для проверки наличия цвета
  public static isColorAvailable(color: string): boolean {
    return Car2.COLORS.includes(color); // Используем прямой доступ к классу
  }
}

/*
Было плохо:
Метод использовал `this` для доступа к статическому свойству, что может сбивать с толку.

Стало лучше:
Используем прямой доступ к классу `Car2.COLORS`, что делает код более явным и понятным.
*/
