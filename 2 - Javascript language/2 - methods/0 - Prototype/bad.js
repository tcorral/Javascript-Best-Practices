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
    this.setName = function (name) {
        this.name = name;
    };
    this.setSurname = function (surname) {
        this.surname = surname;
    };
    this.setAge = function (age) {
        this.age = age;
    };
    this.setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };
    this.setEyesColor = function (eyesColor) {
        this.eyesColor = eyesColor;
    };
    this.setFather = function (father) {
        this.parents.father = father;
    };
    this.setMother = function (mother) {
        this.parents.mother = mother;
    };
};
