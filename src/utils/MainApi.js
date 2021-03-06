import { setToken } from './token.js';

export const BASE_URL = 'https://app.news.students.nomoredomains.work';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
  .then((res) => {
    return res
  })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
  .then((res => res.json()))
  .then((res) => {
    if (res){
      setToken(res.token);
      return res;
    } else {
      return;
    }
  })
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
};

export const getSavedNews = (token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Опаньки, ошибка: ${res.status}`));
    })
}

export const saveNews = ({ keyword, title, description, date, source, url, img }, token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
    keyword: keyword,
    title: title,
    text: description,
    date: date,
    source: source,
    link: url,
    image: img,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Опаньки, ошибка: ${res.status}`));
    })
}

export const deleteNews = (id, token) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Опаньки, ошибка: ${res.status}`));
    })
}