import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  GET_POSTS: `${COMMON_URL}jsonplaceholder.typicode.com/posts`,
  POST_LOGIN: `${COMMON_URL}nodedemo.dhiwise.co/device/auth/login`,
};

export const getPosts = (payload) => apis.get(API_URLS.GET_POSTS, payload);

export const postLogin = (payload) =>
  apis.post(API_URLS.POST_LOGIN, {
    ...payload,
    headers: { "Content-Type": "application/json", ...payload?.headers },
  });
