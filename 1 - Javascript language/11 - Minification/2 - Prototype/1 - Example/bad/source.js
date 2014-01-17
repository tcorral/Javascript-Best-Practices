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
Person.prototype.setName = function (name) {
    this.name = name;
};

Person.prototype.setSurname = function (surname) {
    this.surname = surname;
};

Person.prototype.setAge = function (age) {
    this.age = age;
};

Person.prototype.setHairColor = function (hairColor) {
    this.hairColor = hairColor;
};

Person.prototype.setEyesColor = function (eyesColor) {
    this.eyesColor = eyesColor;
};

Person.prototype.setFather = function (father) {
    this.parents.father = father;
};

Person.prototype.setMother = function (mother) {
    this.parents.mother = mother;
};

// 792