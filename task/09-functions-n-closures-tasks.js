
/** ********************************************************************************************
 *                                                                                            *
 * Plese read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions                    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures                           *
 *                                                                                            *
 ********************************************************************************************* */


/**
 * Returns the functions composition of two specified functions f(x) and g(x).
 * The result of compose is to be a function of one argument, (lets call the argument x),
 * which works like applying function f to the result of applying function g to x, i.e.
 *  getComposition(f,g)(x) = f(g(x))
 *
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 *
 * @example
 *   getComposition(Math.sin, Math.asin)(x) => Math.sin(Math.acos(x))
 *
 */
<<<<<<< HEAD
export function getComposition(f, g) {
  return x => f(g(x));
=======
function getComposition(f, g) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the math power function with the specified exponent
 *
 * @param {number} exponent
 * @return {Function}
 *
 * @example
 *   var power2 = getPowerFunction(2); // => x^2
 *   power2(2) => 4
 *   power2(4) => 16
 *
 *   var power05 = getPowerFunction(0.5); // => x^0.5
 *   power05(4) => 2
 *   power05(16) => 4
 *
 */
<<<<<<< HEAD
export function getPowerFunction(exponent) {
  return x => Math.pow(x, exponent);
=======
function getPowerFunction(exponent) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the polynom function of one argument based on specified coefficients.
 * See: https://en.wikipedia.org/wiki/Polynomial#Definition
 *
 * @params {integer}
 * @return {Function}
 *
 * @example
 *   getPolynom(2,3,5) => y = 2*x^2 + 3*x + 5
 *   getPolynom(1,-3)  => y = x - 3
 *   getPolynom(8)     => y = 8
 *   getPolynom()      => null
 */
<<<<<<< HEAD
export function getPolynom() {
  return x => {
    let str = null;
    for (let i = 0; i < arguments.length; i++) {
      str += arguments[i] * Math.pow(x, arguments.length - 1 - i);
    }
    return str;
  };
=======
function getPolynom() {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Memoizes passed function and returns function
 * which invoked first time calls the passed function and then always returns cached result.
 *
 * @params {Function} func - function to memoize
 * @return {Function} memoized function
 *
 * @example
 *   var memoizer = memoize(() => Math.random());
 *   memoizer() => some random number  (first run, evaluates the result of Math.random())
 *   memoizer() => the same random number  (second run, returns the previous cached result)
 *   ...
 *   memoizer() => the same random number  (next run, returns the previous cached result)
 */
<<<<<<< HEAD
export function memoize(func) {
  const obj = {};
  Object.defineProperty(obj, 'prop', {
    value: func()
  });
  return () => obj.prop;
=======
function memoize(func) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the function trying to call the passed function and if it throws,
 * retrying it specified number of attempts.
 *
 * @param {Function} func
 * @param {number} attempts
 * @return {Function}
 *
 * @example
 * var attempt = 0, retryer = retry(() => {
 *      if (++attempt % 2) throw new Error('test');
 *      else return attempt;
 * }, 2);
 * retryer() => 2
 */
<<<<<<< HEAD
export function retry(func, attempts) {
  return () => {
    for (let i = 0; i < attempts; i++) {
      try {
        return func();
      }
      catch (err) {
        continue;
      }
    }
  };
=======
function retry(func, attempts) {
  throw new Error('Not implemented');     
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the logging wrapper for the specified method,
 * Logger has to log the start and end of calling the specified function.
 * Logger has to log the arguments of invoked function.
 * The fromat of output log is:
 * <function name>(<arg1>, <arg2>,...,<argN>) starts
 * <function name>(<arg1>, <arg2>,...,<argN>) ends
 *
 *
 * @param {Function} func
 * @param {Function} logFunc - function to output log with single string argument
 * @return {Function}
 *
 * @example
 *
 * var cosLogger = logger(Math.cos, console.log);
 * var result = cosLogger(Math.PI));     // -1
 *
 * log from console.log:
 * cos(3.141592653589793) starts
 * cos(3.141592653589793) ends
 *
 */
<<<<<<< HEAD
export function logger(func, logFunc) {
  return (...args) => {
    const argsString = JSON.stringify(args);
    logFunc(`${func.name}(${argsString.slice(1, -1)}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${argsString.slice(1, -1)}) ends`);
    return result;
  };
=======
function logger(func, logFunc) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Return the function with partial applied arguments
 *
 * @param {Function} fn
 * @return {Function}
 *
 * @example
 *   var fn = function(x1,x2,x3,x4) { return  x1 + x2 + x3 + x4; };
 *   partialUsingArguments(fn, 'a')('b','c','d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b')('c','d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b','c')('d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b','c','d')() => 'abcd'
 */
<<<<<<< HEAD
export function partialUsingArguments(fn) {
  const args1 = Array.from(arguments).slice(1);
  return (...args2) => {
    const result = args1.concat(args2);
    return fn(...result);
  };
=======
function partialUsingArguments(fn) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}


/**
 * Returns the id generator function that returns next integer starting from specified 
 * number every time when invoking.
 *
 * @param {Number} startFrom
 * @return {Function}
 *
 * @example
 *   var getId4 = getIdGenerator(4);
 *   var getId10 = gerIdGenerator(10);
 *   getId4() => 4
 *   getId10() => 10
 *   getId4() => 5
 *   getId4() => 6
 *   getId4() => 7
 *   getId10() => 11
 */
<<<<<<< HEAD
export function getIdGeneratorFunction(startFrom) {
  return () => {
    return startFrom++;
  };
=======
function getIdGeneratorFunction(startFrom) {
  throw new Error('Not implemented');
>>>>>>> 778a5ea2dbb619ba7271ad97e9070ecbe6d94fb5
}

module.exports = {
  getComposition: getComposition,
  getPowerFunction: getPowerFunction,
  getPolynom: getPolynom,
  memoize: memoize,
  retry: retry,
  logger: logger,
  partialUsingArguments: partialUsingArguments,
  getIdGeneratorFunction: getIdGeneratorFunction
};
