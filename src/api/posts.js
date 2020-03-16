import { posts as instance } from './';

/**
 * Get Learn Note API
 */
function fetchPosts() {
  return instance.get('/');
}

function fetchPost(postId) {
  return instance.get(postId);
}

function createPost(postData) {
  return instance.post('/', postData);
}

function deletePost(postId) {
  return instance.delete(postId);
}

function editPost(postId, postData) {
  return instance.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
