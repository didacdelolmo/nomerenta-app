import axios from 'axios';

const { VITE_REST_API_URL } = import.meta.env;

axios.defaults.baseURL = VITE_REST_API_URL;
axios.interceptors.response.use(undefined, (error) => {
  if (error?.response?.data?.message) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(`Ha ocurrido un error: ${error.message}`);
  }
});

export const fetchRegister = ({ username, password, code }) => {
  return axios.post(
    '/register',
    { username, password, code },
    { withCredentials: true }
  );
};

export const fetchLogin = ({ username, password }) => {
  return axios.post(
    '/login',
    { username, password },
    { withCredentials: true }
  );
};

export const fetchLogout = () => {
  return axios.post('/logout', {}, { withCredentials: true });
};

export const fetchUsers = ({ username }) => {
  return axios.get('/users', { params: { username } });
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

  return axios.patch(
    '/users/me/avatar',
    formData,
    { withCredentials: true }
    // { headers: { 'Content-Type': 'multipart/form-data', }, }
  );
};

export const fetchUserFollows = ({ userId }) => {
  return axios.get(`/users/${userId}/following`, { withCredentials: true });
};

export const fetchUserFollowers = ({ userId }) => {
  return axios.get(`/users/${userId}/followers`, { withCredentials: true });
};

export const fetchFollow = ({ userId }) => {
  return axios.post(`/users/${userId}/follow`, {}, { withCredentials: true });
};

export const fetchUnfollow = ({ userId }) => {
  return axios.post(`/users/${userId}/unfollow`, {}, { withCredentials: true });
};

export const fetchSetOutsiderBiography = ({ userId, biography }) => {
  return axios.patch(
    `/users/${userId}/biography`,
    { biography },
    { withCredentials: true }
  );
};

export const fetchSetOutsiderFlair = ({ userId, flair }) => {
  return axios.patch(
    `/users/${userId}/flair`,
    { flair },
    { withCredentials: true }
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

export const fetchFeaturedPosts = () => {
  return axios.get('/posts/featured');
};

export const fetchPostById = ({ postId }) => {
  return axios.get(`/posts/${postId}`);
};

export const fetchCurrentUserPosts = () => {
  return axios.get('/users/me/posts', { withCredentials: true });
};

export const fetchCurrentUserFollowsPosts = () => {
  return axios.get('/users/me/following/posts', { withCredentials: true });
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

export const fetchFeaturePost = ({ postId }) => {
  return axios.patch(
    `/posts/${postId}/feature`,
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

export const fetchCurrentUserNotifications = () => {
  return axios.get('/users/me/notifications', { withCredentials: true });
};

export const fetchCurrentUserUnseenNotificationsCount = () => {
  return axios.get('/users/me/notifications/unseen/count', {
    withCredentials: true,
  });
};

export const fetchMarkCurrentUserNotificationAsSeen = ({ notificationId }) => {
  return axios.patch(
    `/users/me/notifications/${notificationId}/seen`,
    {},
    { withCredentials: true }
  );
};

export const fetchMarkCurrentUserNotificationsAsSeen = () => {
  return axios.patch(
    '/users/me/notifications/seen',
    {},
    { withCredentials: true }
  );
};

export const fetchIncrementCounter = () => {
  return axios.patch('/counter/increment');
};

export const fetchCurrentUserInvitations = () => {
  return axios.get('/users/me/invitations', { withCredentials: true });
};

export const fetchCreateCurrentUserInvitations = ({ email }) => {
  return axios.post(
    '/users/me/invitations',
    { email },
    { withCredentials: true }
  );
};

export const fetchImageUpload = ({ file }) => {
  const formData = new FormData();
  formData.append('image', file);

  return axios.post(
    '/images',
    formData,
    { withCredentials: true }
    // { headers: { 'Content-Type': 'multipart/form-data', }, }
  );
};
