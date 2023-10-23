function concatenateStrings(value1, value2) {
  return value1 + value2;
}
function getStringLength(value) {
  return value.length;
}
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
function extractNameFromTemplate(value) {
  const matches = value.match(/Hello, (.*?)!/);
  if (matches) {
    return matches[1];
  }
  return null;
}
function getFirstChar(value) {
  return value.charAt(0);
}
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}
function repeatString(value, count) {
  return value.repeat(count);
}
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}
function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function extractEmails(str) {
  return str.split(';');
}
function getRectangleString(width, height) {
  if (width < 2 || height < 2) {
    return '';
  }
  const horizontalBorder = `┌${'─'.repeat(width - 2)}┐\n`;
  const middleRow = `│${' '.repeat(width - 2)}│\n`;
  const verticalBorder = `└${'─'.repeat(width - 2)}┘\n`;
  const rectangle = `${horizontalBorder}${middleRow.repeat(height - 2)}${verticalBorder}`;
  return rectangle;
}
function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const isUpperCase = char === char.toUpperCase();
    const offset = isUpperCase ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - offset + 13) % 26) + offset);
  });
}
function isString(value) {
  return typeof value === 'string' || (value instanceof String);
}
function getCardId(value) {
  const cards = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return cards.indexOf(value);
}
module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
