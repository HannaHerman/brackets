module.exports = function check (str, bracketsConfig) {
  let arr = [];
  let bracketsString = str.split('');
  let config = Object.fromEntries(bracketsConfig);
  for (let i = 0; i < bracketsString.length; i++) {
    if (arr[0] === bracketsString[i]) {
      arr.shift();
    } else if (config[bracketsString[i]]) {
      arr.unshift(config[bracketsString[i]]);
    } else {
      return false;
    }
  }
  return arr.length === 0;
}
