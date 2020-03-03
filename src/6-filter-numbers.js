export const filterNumbers = (array, largerThan) => {
  return array.filter(number => number[1] > largerThan)
}