// Модуль 1
function calculateTotalPrice(items) {
  // Используем reduce вместо forEach для компактности и читаемости
  return items.reduce((total, item) => total + item.price, 0);
}

// Модуль 2
function applyDiscount(totalPrice, discountPercentage) {
  return totalPrice * (1 - discountPercentage / 100); // Оставили без изменений, код уже понятный и компактный
}

/*
Было плохо:
В `calculateTotalPrice` использовался forEach, что делало код более громоздким и менее выразительным.

Стало лучше:
Заменили forEach на reduce, чтобы сделать код компактнее и проще для восприятия.
*/
