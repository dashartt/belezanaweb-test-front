export function changeItemNavColor(path: string) {
  const itemNav = document.getElementById(path.slice(1))
  itemNav!.style.color = '#FF7800'
}

export function formatPrice(price = 0) {
  return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

export function showEndCardNumber(cardNumber: number) {
  return cardNumber.toString().replace(/\d.{13}/, '****.****.****')
}
