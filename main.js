/******************
 * YOUR CODE HERE *
 ******************/

const onlyOdds = function(nums) {
    return nums.filter(function(nums) {
      return nums % 2 === 1
    })
  }


const onlyEvens = function (nums) {
  return nums.filter(function(num) {
    return num % 2 === 0
  })
}

const shortNamesOnly = function (names) {
  return names.filter(function(name) {
    return name.length < 7
  })
}

const sNames = function (names) {
  return names.filter(function(name) {
    return name.startsWith('S')
  })
}

const tripleAll = function (nums) {
  return nums.map(function(num) {
    return num * 3 
  })
}

const negativeValues = function (nums) {
  return nums.map(function(num) {
  if (num > 0) {
    return num * -1 
  } else { 
    return num
  }
  })
}

const questionings = function (str) {
  return str.map(function(strs) {
    return strs + '?'
  })
}

const changeToInitials = function(str) {
  return str.map(function(str) {
      return str[0] + str[str.indexOf(' ')+1]
  })
}

const doubleEven = function (nums) {
  return nums.map(function(num) {
    if (num % 2 === 0) {
      return num * 2
    } else {
      return num
    } 
  })
}

const titleCaseNames = function (names) {
  return names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  })
}

const doubleEveryOther = function (nums) {
  let other = nums.slice(0)
  for (let i = 1; i < other.length; i+=2) {
    other[i] *= 2
    }
    return other
}
  

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
  tripleAll,
  negativeValues,
  questionings,
  changeToInitials,
  doubleEven,
  titleCaseNames,
  doubleEveryOther,
}
