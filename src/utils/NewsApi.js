class NewsApi {

  constructor({
    url,
    headers,
    fromdate,
    todate
  }) {
    this._url = url;
    this._headers = headers;
    this._fromdate = fromdate;
    this._todate = todate;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Опаньки, ошибка: ${res.status}`));
}

getNews(search) {
  return fetch(this._url +
    'language=ru&' +
    `q=${search}&` +
    'sortBy=popularity&' +
    `from=${this._fromdate}&` +
    `to=${this._todate}&` +
    'pageSize=100&' +
    'apiKey=8a9ed8705b1c49f7b9372c8d34946c60', {
      method: 'GET',
    })
    .then((res) => this._getResponseData(res));
}

getProfile() {
  return fetch(`${this._url}/users/me`, {
    headers: this._headers,
  })
    .then((res) => this._getResponseData(res));
}

}

const todate = new Date();
todate.setDate(todate.getDate() - 7);

const newsApi = new NewsApi({
  url: 'http://newsapi.org/v2/everything?',
  headers: {
    'Content-Type': 'application/json',
  },
  fromdate: new Date().toISOString().slice(0,10),
  todate: todate.toISOString().slice(0,10)
});

export { newsApi };