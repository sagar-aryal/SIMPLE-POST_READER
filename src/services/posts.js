import { postsUri } from './constants'

export const getPosts = sl_token => {
  return fetch(`${postsUri}?sl_token=${sl_token}`)
}
