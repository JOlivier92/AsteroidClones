Function.prototype.myBind = function (context) {

  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function bound() {
      //call args are passed to internal function
      //gee why wasnt this mentiined on the 
    const callArgs = Array.from(arguments);
    return fn.apply(context,bindArgs.concat(callArgs));
  };
};

//[1, 2, 3, 4].slice(1) === [2, 3, 4]
//[2,3,4,1,2,3, 4]

Function.prototype.myBindTwo = function(context, ...otherArgs) {
  const fn = this;
  const bindArgs = Array.from(otherArgs);
  return function bound() {
    const callArgs = Array.from(arguments);
    return fn.apply(context, bindArgs.concat(callArgs));
  };
};