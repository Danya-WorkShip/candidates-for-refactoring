const createPayment = (isToken: boolean): void => {
  if (isToken) {
    const token = getUrl().slice(); // Проверяем необходимость использования `slice`
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};

/*
Было плохо:
Использование `Boolean` не тоже самое, что и `boolean`, также не использовался тип возвращаемого значения.

Стало лучше:
Использован тип `boolean` с маленькой буквы и добавлен явный тип возвращаемого значения `void` для функции.
*/
