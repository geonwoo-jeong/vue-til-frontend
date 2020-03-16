import { posts as instance } from './';

/**
 * Get Learn Note API
 */
function fetchPosts() {
  return instance.get('/');
}

function createPost(postData) {
  return instance.post('/', postData);
}

export { fetchPosts, createPost };
