import { endpoints } from './endpoints.js'
import { http } from './http.js'

export function getCart() {
  return http(endpoints.cart)
}
