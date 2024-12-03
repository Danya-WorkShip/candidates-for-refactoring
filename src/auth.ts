type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService): TPayment => {
  // Избегаем изменения входного объекта, возвращаем новый
  return {
    ...payment,
    rcCode: gateway.sendAuth(payment),
  };
};

/*
Было плохо:
Функция `auth` модифицировала входной объект `payment`, что может приводить к неожиданным побочным эффектам.

Стало лучше:
Функция теперь возвращает новый объект `payment` с обновлённым `rcCode`. Это делает код более предсказуемым и чистым.
*/
