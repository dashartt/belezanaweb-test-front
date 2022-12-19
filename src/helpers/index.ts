export function changeItemNavColor(path: string) {
  const itemNav = document.getElementById(path.slice(1))
  itemNav!.style.color = '#FF7800'
}
