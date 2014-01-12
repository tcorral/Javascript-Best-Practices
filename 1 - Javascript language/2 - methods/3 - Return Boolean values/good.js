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

        hasItems: function () {
            var aItems = this.getItemsList();
            return aItems.length > 0;
        },

        getItem: function (nIndex) {
            var aItems = this.getItemsList();
            return aItems[nIndex];
        },

        addItem: function (oItem) {
            var aItems = this.getItemsList();
            aItems.push(oItem);
            return this;
        },

        isEmptyItem: function (nIndex) {
            var aItems = this.getItemsList();
            return Object.keys(aItems[nIndex]).length > 0;
        }

    };

    win.Combo = Combo;

}(window));