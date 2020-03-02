/*export const firstLast = (items) => {
  return `First: ${items[0]}, Last: ${items[1]}`
}*/

export const firstLast = (items) => {
  if (items.length === 2) {
    return `First: ${items[0]}, Last: ${items[1]}`
  } else if (items.length > 2) {
    let lastItem = items[items.length - 1]
    return `First: ${items[0]}, Last: ${lastItem}`
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`
  } else if (items.length === 0) {
    return `No items!`
  }
}