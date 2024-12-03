class Calendar {
  addEvent(event: string): void { // Указали тип для параметра и возвращаемое значение
    // some logic to add event
  }
}

class Director {
  constructor(private calendar: Calendar) {} // Инициализация через конструктор

  scheduleMeeting(event: string): void { // Указали тип для параметра и возвращаемое значение
    this.calendar.addEvent(event);
  }
}

/*
Было плохо:
Не было указано типов для параметров и возвращаемых значений, что снижало типовую безопасность и понятность.

Стало лучше:
Добавили типы для параметров и методов, что улучшило читаемость и защиту от ошибок.
*/
