const bunchOfIfs = (user) => 
  user.age >= 18 &&
  user.age <= 65 &&
  user.employmentStatus === 'employed' &&
  !user.criminalRecord;

if (bunchOfIfs(user)) {
  approveLoan();
}

/*
Было плохо:
Условие в if выглядело громоздким, было сложно сразу понять, что оно проверяет.

Стало лучше:
Вынесли проверку условий в отдельную функцию `isEligibleForLoan`, что сделало код читаемым и переиспользуемым.
*/
