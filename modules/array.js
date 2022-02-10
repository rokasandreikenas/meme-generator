export function removeItem(array, id) {
  return array.filter((item) => item.id !== id);
}
