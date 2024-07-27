export const fetchWithAuth = async (url, method, options = {}) => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser || !loggedInUser.token) {
    alert('Invalid token. You need to login again!');
    localStorage.removeItem('loggedInUser');
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

export const fetchByAdmin = async (
  url,
  method,
  headers,
  body,
  options = {}
) => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser || !loggedInUser.token) {
    alert('Invalid token. You need to login again!');
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login';
    return Promise.reject('Unauthorized');
  }

  const defaultHeaders = {
    Authorization: `Bearer ${loggedInUser.token}`,
  };

  const lastHeader = { ...defaultHeaders, ...headers };

  const res = await fetch(url, {
    method,
    headers: lastHeader,
    body,
    ...options,
  });

  if (res.status === 403 || res.status === 401) {
    alert('You need to login again!');
    localStorage.removeItem('loggedInUser');
    window.location.href = '/admin/login';
    return await Promise.reject('Unauthorized');
  }

  return res;
};