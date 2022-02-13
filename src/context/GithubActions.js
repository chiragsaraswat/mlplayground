import axios from 'axios';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const searchUsers = async (username) => {
  const {
    data: { items },
  } = await axios.get(`${GITHUB_URL}/search/users`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
    params: {
      q: username,
    },
  });
  return items;
};

export const getUserRepos = async (name) => {
  const response = await fetch(`${GITHUB_URL}/users/${name}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};

export const fetchUser = async (name) => {
  const response = await fetch(`${GITHUB_URL}/users/${name}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();

    return data;
  }
};
