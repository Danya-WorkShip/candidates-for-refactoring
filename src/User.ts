class User {
  constructor(
    private name: string,
    private age: number,
    private address: string,
    private phoneNumber: string,
    private email: string,
    private role: string,
    private isActive: boolean,
    private isVerified: boolean,
    private isPremium: boolean,
    private lastLogin: Date,
    private registrationDate: Date,
    private profilePicture: string,
    private bio: string,
    private interests: string[]
  ) {}

  // ... (other methods)
}

/*
Было плохо:
Был слишком громоздкий код

Стало лучше:
Меньше кода — ты не дублируешь объявление свойств и их инициализацию.
*/
