
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
<<<<<<< HEAD
export function getFizzBuzz(num) {
  return num % 3 === 0 && num % 5 === 0
    ? 'FizzBuzz'
    : num % 3 === 0
      ? 'Fizz'
      : num % 5 === 0
        ? 'Buzz'
        : num;
=======
function getFizzBuzz(num) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
<<<<<<< HEAD
export function getFactorial(n) {
  return n ? n * getFactorial(n - 1) : 1;
=======
function getFactorial(n) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
<<<<<<< HEAD
export function getSumBetweenNumbers(n1, n2) {
  return [...new Array(n2 - n1 + 1).keys()].map((el, i) => n1 + i).reduce((result, el) => result += el, 0);
=======
function getSumBetweenNumbers(n1, n2) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false 
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
<<<<<<< HEAD
export function isTriangle(a, b, c) {
  return a < b + c && b < a + c && c < a + b;
=======
function isTriangle(a, b, c) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
<<<<<<< HEAD
export function doRectanglesOverlap(rect1, rect2) {
  return (
    !(rect1.left < rect2.left && (rect1.left + rect1.width) < rect2.left) &&
    !(rect1.top < rect2.top && (rect1.top + rect1.height) < rect2.top) &&
    !(rect1.left > (rect2.left + rect2.width)) &&
    !(rect1.top > (rect2.top + rect2.height))
  );
=======
function doRectanglesOverlap(rect1, rect2) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
<<<<<<< HEAD
export function isInsideCircle(circle, point) {
  return Math.pow((point.x - circle.center.x), 2) + Math.pow((point.y - circle.center.y), 2) < Math.pow(circle.radius, 2);
=======
function isInsideCircle(circle, point) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
<<<<<<< HEAD
export function findFirstSingleChar(str) {
  for (const symbol of str) {
    if (str.indexOf(symbol) === str.lastIndexOf(symbol)) {
      return symbol;
    }
  }
=======
function findFirstSingleChar(str) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the string representation of math interval, specified by two points and 
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
<<<<<<< HEAD
export function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${Math.min(a, b)}, ${Math.max(a, b)}${isEndIncluded ? ']' : ')'}`;
=======
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
<<<<<<< HEAD
export function reverseString(str) {
  return str.split('').reverse().join('');
=======
function reverseString(str) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
<<<<<<< HEAD
export function reverseInteger(num) {
  return num.toString().split('').reverse().join('');
=======
function reverseInteger(num) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
<<<<<<< HEAD
export function isCreditCardNumber(ccn) {
  return (ccn.toString().split('').map((el, i, arr) => {
    if ((i + arr.length) % 2 === 0) {
      return +el * 2 > 9 ? +el * 2 - 9 : +el * 2;
    }
    return +el;
  }).reduce((result, el) => result += el)) % 10 === 0;
=======
function isCreditCardNumber(ccn) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
<<<<<<< HEAD
export function getDigitalRoot(num) {
  const sum = num.toString().split('').reduce((result, el) => result += +el, 0);
  return sum > 9 ? getDigitalRoot(sum) : sum;
=======
function getDigitalRoot(num) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
<<<<<<< HEAD
export function isBracketsBalanced(str) {
  const stack = [];
  const brackets = { '[': ']', '{': '}', '(': ')', '<': '>' };
  for (let i = 0; i < str.length; i++) {
    if (brackets[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return !stack.length;
=======
function isBracketsBalanced(str) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
<<<<<<< HEAD
export function timespanToHumanString(startDate, endDate) {
  // const diff = (endDate.getTime() - startDate.getTime()) / 1000;
  // if (diff > 0 && diff <= 45) {
  //   return 'a few seconds ago';
  // }
  // if (diff > 45 && diff <= 90) {
  //   return 'a minute ago';
  // }
  // if (diff > 90 && diff <= 2700) {
  //   return diff <= 120 ? '2 minutes ago' : `${Math.floor(diff / 60)} minutes ago`;
  // }
  // if (diff > 2700 && diff <= 5400) {
  //   return 'an hour ago';
  // }
  // if ((diff / 3600 > 5400 / 3600) && (diff / 3600 <= 22)) {
  //   return diff / 60 <= 120 ? '2 hours ago' : `${Math.round((diff - 0.0001) / 3600)} hours ago`;
  // }
  // if ((diff / 3600 > 22) && (diff / 3600 <= 36)) {
  //   return 'a day ago';
  // }
  // if ((diff / 3600 > 36) && (diff / (3600 * 24) <= 25)) {
  //   return diff / 3600 <= 72 ? '2 days ago' : `${Math.round((diff - 0.0001) / (3600 * 24))} days ago`;
  // }
  // if ((diff / (3600 * 24)) > 25 && ((diff / (3600 * 24)) <= 45)) {
  //   return 'a month ago';
  // }
  // if ((diff / (3600 * 24)) > 45 && (diff / (3600 * 24) <= 345)) {
  //   return diff / (3600 * 24) <= 60 ? '2 months ago' : `${Math.round(diff / (3600 * 24 * 30))} months ago`;
  // }
  // if (((diff / (3600 * 24)) > 345 && ((diff / (3600 * 24)) <= 545))) {
  //   return 'a year ago';
  // }
  // if (diff / (3600 * 24) >= 546) {
  //   return diff / (3600 * 24) <= 730 ? '2 years ago' : `${Math.round(diff / (3600 * 24 * 365))} years ago`;
  // }
=======
function timespanToHumanString(startDate, endDate) {
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
  throw new Error('Not implemented');
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
<<<<<<< HEAD
export function toNaryString(num, n) {
  return num.toString(n);
=======
function toNaryString(num, n) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
<<<<<<< HEAD
export function getCommonDirectoryPath(pathes) {
  let temp = [];
  const arr = pathes.slice();
  arr.reduce((result, el) => {
    const a = el.split('/');
    if (result) {
      const b = result.split('/');
      temp = b.slice();
    }
    temp = a.map((elem, i) => {
      if (elem === temp[i]) {
        return elem;
      }
    });
  }
  );
  temp = temp.filter(el => el !== undefined);
  return temp.join('/') + (temp.length > 0 ? '/' : '');
=======
function getCommonDirectoryPath(pathes) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
<<<<<<< HEAD

/**
 *     ┌                    ┐        ┌                    ┐
 *     | a11, a12, ..., a1m |        | b11, b12, ..., b1n |
 * A = | a21, a22, ..., a2m |    B = | b21, b22, ..., b2n |
 *     |  ⋮     ⋮    ⋮     ⋮  |        |  ⋮     ⋮    ⋮    ⋮   |
 *     | al1, al2, ..., alm |        | bm1, bm2, ..., bmn |
 *     └                    ┘        └                    ┘
 *     ┌                    ┐ 
 *     | c11, c12, ..., c1n | 
 * C = | c21, c22, ..., c2n | 
 *     |  ⋮     ⋮    ⋮     ⋮  | 
 *     | cl1, cl2, ..., cln | 
 *     └                    ┘ 
 * cij = Σ(r = 1, m) air brj (i = 1, 2, ..., l; j = 1, 2, ..., n) 
 */

export function getMatrixProduct(m1, m2) {
  const resultMatrix = new Array(m1.length)
    .fill(new Array(m2[0].length)
      .fill(0)
    );
  return resultMatrix.map((el, i) => {
    return el.map((elem, j) => {
      let c = 0;
      for (let k = 0; k < m1[0].length; k++) {
        c += m1[i][k] * m2[k][j];
      }
      return c;
    });
  });
=======
function getMatrixProduct(m1, m2) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
<<<<<<< HEAD
export function evaluateTicTacToePosition(position) {
  const board = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[board.length] = position[i][j];
    }
  }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return undefined;
=======
function evaluateTicTacToePosition(position) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}

module.exports = {
  getFizzBuzz: getFizzBuzz,
  getFactorial: getFactorial,
  getSumBetweenNumbers: getSumBetweenNumbers,
  isTriangle: isTriangle,
  doRectanglesOverlap: doRectanglesOverlap,
  isInsideCircle: isInsideCircle,
  findFirstSingleChar: findFirstSingleChar,
  getIntervalString : getIntervalString,
  reverseString: reverseString,
  reverseInteger: reverseInteger,
  isCreditCardNumber: isCreditCardNumber,
  getDigitalRoot: getDigitalRoot,
  isBracketsBalanced: isBracketsBalanced,
  timespanToHumanString : timespanToHumanString,
  toNaryString: toNaryString,
  getCommonDirectoryPath: getCommonDirectoryPath,
  getMatrixProduct: getMatrixProduct,
  evaluateTicTacToePosition : evaluateTicTacToePosition
};