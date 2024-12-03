class SomeClass {
  private neverUsedMethod() {
      console.log("This function is called");
  }

  public someMethod() {
    if (false) {
        doSomethingThatNeverHappens();
    }

    try {
        this.doSomethingSafe();
    } catch (e) {
        console.error(e);  // Используем стандартный метод для логирования ошибок
    }
  }

  private doSomethingSafe() {
     console.log('Safe operation');
  }
}

/*
Было плохо:
Был нестандартный метод вывода ошибок

Стало лучше:
Использовали стандартный метод
*/