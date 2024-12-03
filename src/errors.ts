const hasNotFoundStatus = (response: Response): boolean => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
};

const hasForbiddenStatus = (response: Response): boolean => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response): boolean => {
  return response.status === HttpStatusCode.SERVICE_UNAVAILABLE_503; // Используем константу для 503
};

/*
Было плохо:
В коде использовалась "магическая" константа 503 вместо использования значения из `HttpStatusCode`.

Стало лучше:
Заменили 503 на `HttpStatusCode.SERVICE_UNAVAILABLE_503`, улучшив читаемость и соответствие стилю текущего кода.
