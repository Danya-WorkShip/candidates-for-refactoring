class FilmController {
  private popupOpened: boolean = false; // Инициализируем свойство для проверки статуса окна

  openDetails(): void {
    const popup = new Popup();
    this.popupOpened = true; // Окно открылось, обновляем статус
  }

  isPopupOpened(): boolean {
    return this.popupOpened; // Проверяем статус окна
  }
}

/*
Было плохо:
Свойство `popupOpened` не было явно инициализировано, что могло привести к ошибкам, если метод `openDetails` не был вызван.

Стало лучше:
Инициализировали `popupOpened` значением по умолчанию, улучшив надежность кода.
*/
