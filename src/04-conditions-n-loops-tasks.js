function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}
function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}
function getSumBetweenNumbers(n1, n2) {
  return (n2 * (n2 + 1) - n1 * (n1 - 1)) / 2;
}
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
function doRectanglesOverlap(rect1, rect2) {
  const x1 = rect1.left;
  const y1 = rect1.top;
  const x2 = x1 + rect1.width;
  const y2 = y1 + rect1.height;
  const x3 = rect2.left;
  const y3 = rect2.top;
  const x4 = x3 + rect2.width;
  const y4 = y3 + rect2.height;
  return x1 < x4 && x2 > x3 && y1 < y4 && y2 > y3;
}
function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2,
  );
  return distance < circle.radius;
}
function findFirstSingleChar(str) {
  const charCount = new Map();
  str.split('').forEach((char) => {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  });
  const uniqueChar = Array.from(str).find((char) => charCount.get(char) === 1);
  return uniqueChar || null;
}
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return `${startBracket}${min}, ${max}${endBracket}`;
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function reverseInteger(num) {
  const reversedString = num.toString().split('').reverse().join('');
  return parseInt(reversedString, 10);
}
function isCreditCardNumber(ccn) {
  const ccnStr = ccn.toString().replace(/\s/g, '');
  if (/^\d{16}$/.test(ccnStr)) {
    const digits = ccnStr.split('').map(Number);
    const reversedDigits = digits.reverse();
    let sum = 0;
    for (let i = 0; i < reversedDigits.length; i += 1) {
      let digit = reversedDigits[i];
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
        sum = digit;
      }
    }
    return sum % 10 === 0;
  }
  return false;
}
function getDigitalRoot(num) {
  let numStr = num.toString();
  while (numStr.length > 1) {
    let sum = 0;
    for (let i = 0; i < numStr.length; i += 1) {
      sum += parseInt(numStr[i], 10);
    }
    numStr = sum.toString();
  }
  return parseInt(numStr, 10);
}
function isBracketsBalanced(str) {
  const stack = [];
  const brackets = {
    '[': ']',
    '(': ')',
    '{': '}',
    '<': '>',
  };
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
function toNaryString(num, n) {
  if (n < 2 || n > 10) {
    throw new Error('Invalid radix. The radix (n) must be between 2 and 10.');
  }
  if (num === 0) {
    return '0';
  }
  let result = '';
  let number = num;
  while (number > 0) {
    const remainder = number % n;
    result = remainder + result;
    number = Math.floor(number / n);
  }
  return result;
}
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) {
    return '';
  }
  const firstPathComponents = pathes[0].split('/');
  let commonPath = '';
  for (let i = 0; i < firstPathComponents.length; i += 1) {
    const currentComponent = firstPathComponents[i];
    const isCommon = pathes.every((path) => path.split('/')[i] === currentComponent);
    if (!isCommon) {
      break;
    }
    commonPath += `${currentComponent}/`;
  }
  return commonPath;
}
function getMatrixProduct(m1, m2) {
  const rows1 = m1.length;
  const cols1 = m1[0].length;
  const rows2 = m2.length;
  const cols2 = m2[0].length;
  if (cols1 !== rows2) {
    throw new Error('Number of columns in the first matrix must be equal to the number of rows in the second matrix.');
  }
  const result = new Array(rows1).fill(0).map(() => new Array(cols2).fill(0));
  for (let i = 0; i < rows1; i += 1) {
    for (let j = 0; j < cols2; j += 1) {
      for (let k = 0; k < cols1; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}
function evaluateTicTacToePosition(position) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const [a, b, c] = line;
    if (position[a] !== '' && position[a] === position[b] && position[a] === position[c]) {
      return position[a];
    }
  }
  return undefined;
}
module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
