function findElement(arr, value) {
  return arr.indexOf(value);
}
function generateOdds(len) {
  return Array.from({ length: len }, (_, index) => 2 * index + 1);
}
function doubleArray(arr) {
  return arr.concat(arr);
}
function getArrayOfPositives(arr) {
  return arr.filter((item) => item > 0);
}
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}
function removeFalsyValues(arr) {
  return arr.filter((item) => !!item);
}
function getUpperCaseStrings(arr) {
  return arr.map((item) => item.toUpperCase());
}
function getStringsLength(arr) {
  return arr.map((item) => item.length);
}
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}
function getHead(arr, n) {
  return arr.slice(0, n);
}
function getTail(arr, n) {
  return arr.slice(-n);
}
function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}
function toArrayOfSquares(arr) {
  return arr.map((x) => x * x);
}
function getMovingSum(arr) {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
}
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}
function propagateItemsByPositionIndex(arr) {
  return arr.reduce((result, item, index) => {
    const repetitions = new Array(index + 1).fill(item);
    return result.concat(repetitions);
  }, []);
}
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}
function getPositivesCount(arr) {
  const positiveNumbers = arr.filter((item) => typeof item === 'number' && item > 0);
  return positiveNumbers.length;
}
function sortDigitNamesByNumericOrder(arr) {
  const digitNamesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  arr.sort((a, b) => digitNamesOrder[a] - digitNamesOrder[b]);
  return arr;
}
function getItemsSum(arr) {
  return arr.reduce((sum, currentItem) => sum + currentItem, 0);
}
function getFalsyValuesCount(arr) {
  const falsyValues = arr.filter((item) => !item);
  return falsyValues.length;
}
function findAllOccurrences(arr, item) {
  return arr.reduce((count, currentItem) => {
    if (currentItem === item) {
      return count + 1;
    }
    return count;
  }, 0);
}
function toStringList(arr) {
  return arr.join(',');
}
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}
function getIdentityMatrix(n) {
  return Array.from({ length: n }, (i) => (
    Array.from({ length: n }, (j) => (i === j ? 1 : 0))
  ));
}
function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
function distinct(arr) {
  return arr.filter((item, index, self) => self.indexOf(item) === index);
}
function group(array, keySelector, valueSelector) {
  return array.reduce((resultMap, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!resultMap.has(key)) {
      resultMap.set(key, [value]);
    } else {
      resultMap.get(key).push(value);
    }
    return resultMap;
  }, new Map());
}
function selectMany(arr, childrenSelector) {
  return arr.map(childrenSelector).reduce((acc, val) => acc.concat(val), []);
}
function getElementByIndexes(arr, indexes) {
  if (indexes.length === 1) {
    return arr[indexes[0]];
  }
  const nextIndex = indexes[0];
  const restOfIndexes = indexes.slice(1);
  return getElementByIndexes(arr[nextIndex], restOfIndexes);
}
function swapHeadAndTail(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);
  if (arr.length % 2 === 1) {
    const middleElement = arr.slice(middle, middle + 1);
    return [...tail, ...middleElement, ...head];
  }
  return [...tail, ...head];
}
module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
