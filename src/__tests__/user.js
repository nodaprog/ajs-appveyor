/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import loadUser from '../loadUser.js';
import { httpGet } from '../http.js';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('https://server:8000/users/1');
});
