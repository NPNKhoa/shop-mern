export const fetchWithAuth = async (url, method, options = {}) => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser || !loggedInUser.token) {
    alert('Invalid token. You need to login again!');
    window.location.href = '/login';
    return Promise.reject('Unauthorized');
  }

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${loggedInUser.token}`,
  };

  const headers = { ...defaultHeaders, ...options.headers };

  const res = await fetch(url, {
    method,
    headers,
    ...options,
  });

  if (res.status === 401) {
    alert('You need to login again!');
    window.location.href = '/login';
    return await Promise.reject('Unauthorized');
  }

  return res;
};
