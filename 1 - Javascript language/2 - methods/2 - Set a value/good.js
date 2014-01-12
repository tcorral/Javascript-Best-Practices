(function (win) {

    function Combo() {
        var aItemsList = [];
        this.getItemsList = function () {
            return aItemsList;
        };
        this.setItemsList = function (aListItems) {
            aItemsList = aListItems;
        };
    }

    Combo.prototype = {

        getItem: function (nIndex) {
            var aItems = this.getItemsList();
            return aItems[nIndex];
        },

        addItem: function (oItem) {
            var aItems = this.getItemsList();
            aItems.push(oItem);
            return this;
        }

    };

    win.Combo = Combo;

}(window));