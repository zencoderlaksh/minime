import { endpoints } from './endpoints.js'
import { http } from './http.js'

export function getProducts() {
  return http(endpoints.products)
}
