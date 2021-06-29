const subLength = (str, char) => {
  let arr = str.split(char)
  if (arr.length === 3) {
    return arr[1].length + 2
  } else {
    return 0
  }
}

console.log(subLength('Saturday', 'a'))
console.log(subLength('summer', 'm'))
console.log(subLength('digitize', 'i'))
console.log(subLength('cheesecake', 'k'))