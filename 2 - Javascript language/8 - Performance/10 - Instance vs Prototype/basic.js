var Calculator_proto = function () {};
Calculator_proto.prototype = {
    getRegExp: function () {
        return /\\/g
    },
    getArray: function () {
        return [];
    },
    getNumber: function () {
        return 0;
    },
    getString: function () {
        return 'test';
    },
    getObject: function () {
        return {};
    }
};
var Calculator_instance = function () {
    this.getRegExp = function () {
        return /\\/g
    };
    this.getArray = function () {
        return [];
    };
    this.getNumber = function () {
        return 0;
    };
    this.getString = function () {
        return 'test';
    };
    this.getObject = function () {
        return {};
    };
};