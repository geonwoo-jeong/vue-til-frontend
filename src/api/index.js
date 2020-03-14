import axios from 'axios';
import { setInterceptors } from './common/interceptors';

/**
 * Axios Instance Initialize
 */
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

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

/**
 * Get Learn Note API
 */
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
