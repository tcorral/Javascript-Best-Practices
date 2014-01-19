var Person = function () {
    var self;	// a
    self.legs = 2;
    self.arms = 2;
    self.hairColor = 'brown';
    self.teeth = 24;
    self.fingers = 20;
};

// The keywords are not minifed.
//this
//var
//return...


function hasTwoArms( oPerson ) {
    if( oPerson.arms === 2 )
    {
        return true;
    } else {
        return false;
    }
}

function hasTwoArms( oPerson ) {
    var bHasTwoArms = false;
    if( oPerson.arms === 2 )
    {
        bHasTwoArms = true;
    }
    return bHasTwoArms;
}

function hasTwoArms( oPerson ) {
    return oPerson.arms === 2;
}