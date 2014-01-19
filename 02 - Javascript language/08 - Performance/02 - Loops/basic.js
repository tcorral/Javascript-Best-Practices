for( var i = 0; i < a.length; i++ ){
    //
}

var nIndexIteration,
    nLenIterations = 1000,
    oItem;

for ( nIndexIteration = 0; nIndexIteration < nLenIterations; nIndexIteration++ ) {
    oItem = aElements[nIndexIteration];
    //
}

for ( nIndexIteration = 0; nIndexIteration < aElementsDOM.length; nIndexIteration++ ) {
    //
}

var aElementsDOM = document.getElementsByTagName('div');	// 100 capas
for ( nIndexIteration = 0; nIndexIteration < aElementsDOM.length; nIndexIteration++ ) {
    document.body.appendChild( document.createElement( 'div' ) );
}

var aElementsDOM = document.getElementsByTagName('div'),	// 100 capas
    nLenElements = aElementsDOM.length;

for ( nIndexIteration = 0; nIndexIteration < nLenElements; nIndexIteration++ ) {
    document.body.appendChild( document.createElement( 'div' ) );
}

while( --nLenElements ){

}

for-in

    for ( sKey in oObj ) {

    }
(Array.prototype.forEach)

var aElements = [...],
oElement;
while( ( oElement = aElements.shift() ) ) {
    oElement
}

function getArrayFromNodeList( oNodeList ) {
    var aElementsDOM = [];

    try {
        aElementsDOM = Array.prototype.slice.call(document.getElementsByTagName('div'));
    }catch( erError ) {
        //LOOP PARA RELLENAR aElementsDOM
    }
}

function getMaxValueFromArray( aValues ) {
    return Math.max.apply(Math, aValues);
}

getMaxValueFromArray( [3, 5, 1, 10] );

Math.max(3,5,1,10);


var aElements = [...]
function timedProcessArray(items, process, callback){
    var todo = items.concat(); // Array clone

    setTimeout(function recursive(){
        var start = +new Date();

        do{
            process(todo.shift());
        }while(todo.length > 0 && (+new Date() - start < 50));

        if(todo.length > 0){
            setTimeout(recursive, 25);
        }else{
            callback(items);
        }
    }, 25);
}


