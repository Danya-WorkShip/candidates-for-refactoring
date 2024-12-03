enum ShapeType {
  Circle,
  Square,
}

function calculateArea(shape: ShapeType, size: number): number {
  // Используем объект вместо switch для упрощения
  const areaCalculators: Record<ShapeType, (size: number) => number> = {
    [ShapeType.Circle]: (radius) => Math.PI * Math.pow(radius, 2),
    [ShapeType.Square]: (side) => Math.pow(side, 2),
  };

  return areaCalculators[shape](size);
}

console.log(calculateArea(ShapeType.Circle, 5)); // Output: 78.54

/*
Было плохо:
Использование switch делало код громоздким и сложным для расширения.

Стало лучше:
Заменили switch на объект с функциями. Код стал компактнее, легче читается и проще добавлять новые формы.
*/
