function testArguments()
{
  "use strict";
  var callback = function settingDummy(){
    var dummy = 'dummy';
    console.log(settingDummy.toString());
  };

  callback();
}
// Logs:
//  function settingDummy(){
//    var dummy = 'dummy';
//    console.log(settingDummy.toString());
//  }
testArguments();