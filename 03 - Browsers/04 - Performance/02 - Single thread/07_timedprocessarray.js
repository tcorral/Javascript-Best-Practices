(function () {
    'use strict';
    var oContainer = document.getElementById('container'),
        nRows = 1000,
        nColumns = 1000,
        oRow,
        oColumn,
        nIndexRow,
        nIndexColumn;

    function timedProcessArray(nItems, process, callback){

        setTimeout(function recursive(){
            var start = +new Date();

            do{
                process(--nItems);
            }while(nItems > 0 && (+new Date() - start < 50));

            if(nItems > 0){
                setTimeout(recursive, 25);
            }else{
                callback();
            }
        }, 25);

    }

    function createTable() {
        var nEnd,
            nStart = window.performance.now(),
            oTable = document.createElement('table');

        timedProcessArray( nRows, function ( nIndexRow ) {
            var oRow = document.createElement('tr'),
                nIndexColumn,
                oCell;

            for( nIndexColumn = 0; nIndexColumn < nColumns; nIndexColumn++){
                oCell = document.createElement('td');
                oCell.innerHTML = ((nIndexRow - (nRows - 1) ) * -1) + ':' + nIndexColumn;
                oRow.appendChild(oCell);
            }
            oTable.appendChild(oRow);
        }, function () {
            oContainer.appendChild(oTable);
            nEnd = window.performance.now() - nStart;
            console.log(nEnd);
        });
    }

    document.getElementById('add').addEventListener('click', function () {
        createTable();
    }, false);
}());