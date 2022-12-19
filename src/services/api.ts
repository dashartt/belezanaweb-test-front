import axios from 'axios'
import { ShoppingCart } from 'types/ShoppingCart'

export default async function getProducts(): Promise<ShoppingCart> {
  return axios
    .get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then(({ data }) => data)
    .catch((error) => console.log(error))
}
