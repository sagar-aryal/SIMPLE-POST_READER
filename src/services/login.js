import { clientId, loginUri } from './constants'

export const loginUser = (email, name) => {
  const params = new URLSearchParams({ email, name, client_id: clientId })
  return fetch(loginUri, {
    method: 'POST',
    body: params,
  })
}
