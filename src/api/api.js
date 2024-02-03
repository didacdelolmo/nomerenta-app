import axios from 'axios';

const { VITE_REST_API_URL = 'http://127.0.0.1:3000' } = import.meta.env;

axios.defaults.baseURL = VITE_REST_API_URL;

axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.data?.message) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error('Something bad happened!');
  }
});

export const fetchRegisterUser = async ({ username, password }) => {
  return await axios.post(
    '/register',
    { username, password },
    { withCredentials: true }
  );
};

export const fetchLoginUser = async ({ username, password }) => {
  return axios.post(
    '/login',
    { username, password },
    { withCredentials: true }
  );
};

export const fetchGetCurrentUser = async () => {
  return axios.get('/users/me', { withCredentials: true });
};

export const fetchUpdateCurrentUserAvatar = async ({ file }) => {
  const formData = new FormData();
  formData.append('avatar', file);

  return axios.post(
    '/users/me/avatar',
    formData,
    { withCredentials: true }
    // { headers: { 'Content-Type': 'multipart/form-data', }, }
  );
};

/**
 * * All the parameters are optional
 * @param {string} sortBy
 * @param {number} start
 * @param {number} limit
 */
export const fetchPosts = async ({ sortBy, start, limit }) => {
  return axios.get('/posts', { params: { sortBy, start, limit } });
};

export const fetchPostById = async ({ postId }) => {
  return axios.get(`/posts/${postId}`);
};

export const fetchCurrentUserPosts = async () => {
  return axios.get('/users/me/posts', { withCredentials: true });
};

export const fetchPostsByUserId = async ({ userId }) => {
  return axios.get(`/users/${userId}/posts`);
};

export const fetchCreateCurrentUserPost = async ({ title, content }) => {
  return axios.post(
    '/users/me/posts',
    { title, content },
    { withCredentials: true }
  );
};

export const fetchPostComments = ({ postId }) => {
  return axios.get(`/posts/${postId}/comments`);
};

/**
 * * parentId is not required
 */
export const fetchCreatePostComment = ({ postId, content, parentId }) => {
  return axios.post(
    `/posts/${postId}/comments`,
    { postId, content, parentId },
    { withCredentials: true }
  );
};
