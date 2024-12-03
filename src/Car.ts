class Car {
  // Упростили код с помощью конструктора для инициализации свойств
  constructor(
    private make: string,
    private model: string,
    private year: number,
    private color: string,
    private price: number,
    private mileage: number
  ) {
    //...
  }
}

/*
Было плохо:
Каждое свойство было объявлено отдельно, что увеличивало объем кода и снижало его читаемость.

Стало лучше:
Использовали конструктор для инициализации всех свойств, код стал компактнее и легче поддерживать.
*/
