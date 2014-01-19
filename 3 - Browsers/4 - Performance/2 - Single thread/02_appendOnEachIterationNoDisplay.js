(function () {
    'use strict';
    var oContainer = document.getElementById('container'),
        nRows = 1000,
        nColumns = 1000,
        oRow,
        oColumn,
        nIndexRow,
        nIndexColumn;

    function createTable() {
        var nEnd,
            nStart = window.performance.now(),
            oTable = document.createElement('table');

        oContainer.style.display = 'none';
        oContainer.appendChild(oTable);
        for (nIndexRow = 0; nIndexRow < nRows; nIndexRow++) {
            oRow = document.createElement('tr');
            oTable.appendChild(oRow);
            for (nIndexColumn = 0; nIndexColumn < nColumns; nIndexColumn++) {
                oColumn = document.createElement('td');
                oColumn.innerHTML = nIndexRow + ':' + nIndexColumn;
                oRow.appendChild(oColumn);
            }
        }
        oContainer.style.display = '';
        nEnd = window.performance.now() - nStart;
        console.log( nEnd );
    }

    document.getElementById('add').addEventListener('click', function () {
        createTable();
    }, false);
}());