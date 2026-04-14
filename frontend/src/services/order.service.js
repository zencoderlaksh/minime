import { endpoints } from './endpoints.js'
import { http } from './http.js'

export function getOrders() {
  return http(endpoints.orders)
}
