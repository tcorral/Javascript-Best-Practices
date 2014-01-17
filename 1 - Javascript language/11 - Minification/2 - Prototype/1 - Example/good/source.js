var Person = function () {
    this.name = '';
    this.surname = '';
    this.age = 0;
    this.hairColor = 'black';
    this.eyesColor = 'brown';
    this.parents = {
        mother: null,
        father: null
    };
};
Person.prototype = {
    setName: function (name) {
        this.name = name;
    },
    setSurname: function (surname) {
        this.surname = surname;
    },
    setAge: function (age) {
        this.age = age;
    },
    setHairColor: function (hairColor) {
        this.hairColor = hairColor;
    },
    setEyesColor: function (eyesColor) {
        this.eyesColor = eyesColor;
    },
    setFather: function (father) {
        this.parents.father = father;
    },
    setMother: function (mother) {
        this.parents.mother = mother;
    }
};

// 721