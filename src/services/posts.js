import { postsUri } from "./constants";

export const getPosts = async (sl_token) => {
  return await fetch(`${postsUri}?sl_token=${sl_token}`);
};
