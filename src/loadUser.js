/* eslint-disable import/extensions */
import { httpGet } from './http.js';

export default function loadUser(id) {
  const data = httpGet(`https://server:8000/users/${id}`);
  return JSON.parse(data);
}
