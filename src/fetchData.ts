const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string): void {
  // Применяем таймаут через setTimeout
  const timeoutId = setTimeout(() => {
    console.error('Request timed out');
  }, DEFAULT_TIMEOUT);

  fetch(url)
    .then((response) => {
      clearTimeout(timeoutId); // Очищаем таймаут, если запрос завершился успешно
      console.log(response);
    })
    .catch((error) => {
      clearTimeout(timeoutId); // Очищаем таймаут в случае ошибки
      console.error(error);
    });
}

/*
Было плохо:
Не было реализации таймаута, если запрос зависал. Использовался неподдерживаемый параметр `timeout`.

Стало лучше:
Реализовали таймаут с использованием `setTimeout` и `clearTimeout`, что дает контроль за длительностью запроса.
*/
