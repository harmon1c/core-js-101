function getRectangleArea(width, height) {
  return width * height;
}
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
function getAverage(value1, value2) {
  const average = (value1 / 2) + (value2 / 2);
  return isFinite(average) ? average : 0;
}
function getDistanceBetweenPoints(x1, y1, x2, y2 ) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
function getLinearEquationRoot(a, b) {
  if (a === 0) {
    return null;
  } else {
    return -b / a;
  }
}
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const length1 = Math.sqrt(x1 * x1 + y1 * y1);
  const length2 = Math.sqrt(x2 * x2 + y2 * y2);
  const cosAngle = dotProduct / (length1 * length2);
  const angleInRadians = Math.acos(cosAngle);
  return angleInRadians;
}
function getLastDigit(value) {
  return Math.abs(value) % 10;
}
function parseNumberFromString(value) {
  return Number(value);
}
function getParallelepipedDiagonal( a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}
function roundToPowerOfTen(num, pow) {
  const multiplier = Math.pow(10, pow);
  return Math.round(num / multiplier) * multiplier;
}
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; 
    }
  }
  return true;
}
function toNumber(value, def) {
  const result = parseFloat(value);
  return isNaN(result) ? def : result;
}
module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};