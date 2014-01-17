function test () {
    var local = 'local';    // Using var inside a function
}

var oObj = {
    variable: 'test',
    setVariable: function ( sVariable ) {   // Arguments
        this.variable = sVariable;
    }
};

var Person = function ( sName, sSurname, nAge, sHairColor ) {
    var sHairColor = 'The color of my hair is ' + sHairColor;
    this.name = sName;
    this.surname = sSurname;
    this.age = nAge;
    function dyeYourHair ( sColor ){
        var sSentence = 'The color of my hair is ';
        return sSentence + sColor;
    }
    this.setHairColor = function ( sHairCol ) { // Never use the same variable name
        sHairColor = sHairCol;
    };
    this.sayHairColor = function () {
        return dyeYourHair( sHairColor );
    };
};