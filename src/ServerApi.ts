class ServerApi {
  private sendRequest(method: string, url: string, data: any) {
    return this.fetch(method, url, data);
  }

  public processAddAccountRequest(url: string, account: TAccount) {
    return this.sendRequest('POST', url, account);
  }

  public sendDeleteAccountRequest(url: string, accountId: string) {
    return this.sendRequest('DELETE', url, accountId);
  }

  public requestAuth(url: string, credentials: TCredentials) {
    return this.sendRequest('GET', url, credentials);
  }
}

/*
Было плохо:
Каждый метод повторялся с аналогичным кодом для отправки запроса, что делает код громоздким и трудным для изменения.

Стало лучше:
Выделили общий метод `sendRequest`, который унифицирует все запросы, чтобы уменьшить дублирование кода.
*/
