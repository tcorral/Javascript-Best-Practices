(function (win) {

    function Combo() {
        var aItemsList = [];
        this.getItemsList = function () {
            return aItemsList;
        };
    }

    Combo.prototype = {

        getItem: function (nIndex) {
            var aItems = this.getItemsList();
            return aItems[nIndex];
        }

    };

    win.Combo = Combo;

}(window));