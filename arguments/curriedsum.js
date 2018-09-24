const curriedSum = function (numArgs) {
  let numbers = [];
  function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return this;
    }
  }
  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
    let original = this;
    let inputs = [];
    function _curry(arg) {
      inputs.push(arg);
      if (inputs.length === numArgs) {
        //call the function
        return original(...inputs);
      } else {
        return this;
      }  
    }
    return _curry;
};