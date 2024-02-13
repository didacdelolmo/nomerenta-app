import axios from 'axios';

const { VITE_REST_API_URL } = import.meta.env;

axios.defaults.baseURL = VITE_REST_API_URL;
axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.data?.message) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(`Something bad happened! ${error.message}`);
  }
});

export const fetchRegisterUser = ({ username, password }) => {
  return axios.post(
    '/register',
    { username, password },
    { withCredentials: true }
  );
};

export const fetchRegisterAnonymousUser = () => {
  return axios.post(
    '/registerAnonimously',
    {},
    { withCredentials: true }
  );
};

export const fetchLoginUser = ({ username, password }) => {
  return axios.post(
    '/login',
    { username, password },
    { withCredentials: true }
  );
};

export const fetchGetCurrentUser = () => {
  return axios.get('/users/me', { withCredentials: true });
};

export const fetchUser = ({ userId }) => {
  return axios.get(`/users/${userId}`);
};

export const fetchUpdateCurrentUserAvatar = ({ file }) => {
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
 */
export const fetchPosts = ({ sortBy, start, limit }) => {
  return axios.get('/posts', {
    params: { sortBy, start: parseInt(start), limit: parseInt(limit) },
  });
};

export const fetchPostById = ({ postId }) => {
  return axios.get(`/posts/${postId}`);
};

export const fetchCurrentUserPosts = () => {
  return axios.get('/users/me/posts', { withCredentials: true });
};

export const fetchUserPosts = ({ userId }) => {
  return axios.get(`/users/${userId}/posts`);
};

export const fetchCreateCurrentUserPost = ({ title, content }) => {
  return axios.post(
    '/users/me/posts',
    { title, content },
    { withCredentials: true }
  );
};

export const fetchUpvotePost = ({ postId }) => {
  return axios.patch(
    `/posts/${postId}/upvote`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const fetchDownvotePost = ({ postId }) => {
  return axios.patch(
    `/posts/${postId}/downvote`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const fetchUnvotePost = ({ postId }) => {
  return axios.patch(
    `/posts/${postId}/unvote`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const fetchUserComments = ({ userId }) => {
  return axios.get(`/users/${userId}/comments`);
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

export const fetchUpvoteComment = ({ commentId }) => {
  return axios.patch(
    `/comments/${commentId}/upvote`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const fetchDownvoteComment = ({ commentId }) => {
  return axios.patch(
    `/comments/${commentId}/downvote`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const fetchUnvoteComment = ({ commentId }) => {
  return axios.patch(
    `/comments/${commentId}/unvote`,
    {},
    {
      withCredentials: true,
    }
  );
};
