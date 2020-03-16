import { instance } from './';

/**
 * Member Register API
 * @param {userData} userData
 */
function registerUser(userData) {
  return instance.post('signup', userData);
}

/**
 * Member Login API
 * @param {userData} userData
 */
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
