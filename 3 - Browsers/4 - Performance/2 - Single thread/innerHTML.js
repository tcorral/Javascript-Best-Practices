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
        var sTemplate = '',
            sStartTable = '<table>',
            sEndTable = '</table>',
            sStartRow = '<tr>',
            sEndRow = '</tr>',
            sStartCell = '<td>',
            sEndCell = '</td>';

        sTemplate += sStartTable;

        for (nIndexRow = 0; nIndexRow < nRows; nIndexRow++) {
            sTemplate += sStartRow;
            for (nIndexColumn = 0; nIndexColumn < nColumns; nIndexColumn++) {
                sTemplate += sStartCell;
                sTemplate += nIndexRow + ':' + nIndexColumn;
                sTemplate += sEndCell;
            }
            sTemplate += sEndRow;
        }

        sTemplate += sEndTable;
        console.log(sTemplate);
        //oContainer.innerHTML = sTemplate;
    }

    document.getElementById('add').addEventListener('click', function () {
        createTable();
    }, false);
}());