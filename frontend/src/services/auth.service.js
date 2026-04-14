import { endpoints } from './endpoints.js'
import { http } from './http.js'

export function login(payload) {
  return http(endpoints.authLogin, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
