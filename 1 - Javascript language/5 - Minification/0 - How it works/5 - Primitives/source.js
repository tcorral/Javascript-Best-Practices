(function(){
  var positive, string, number, negative, nulled, isNull, isNegative, isPositive;

  positive = true;
  negative = false;
  nulled = null;
  string = 'test';
  number = 100;

  isNull = function (obj){
    return obj === nulled;
  };

  isNegative = function (obj){
    return obj === negative;
  };

  isPositive = function (obj) {
    return obj === positive;
  };
}());