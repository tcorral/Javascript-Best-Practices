var Person = function () {
    this.name = "";
    this.surname = "";
    this.age = 0;
    this.hairColor = "black";
    this.eyesColor = "brown";
    this.parents = {mother: null, father: null}
};
Person.prototype.setName = function (a) {
    this.name = a
};
Person.prototype.setSurname = function (a) {
    this.surname = a
};
Person.prototype.setAge = function (a) {
    this.age = a
};
Person.prototype.setHairColor = function (a) {
    this.hairColor = a
};
Person.prototype.setEyesColor = function (a) {
    this.eyesColor = a
};
Person.prototype.setFather = function (a) {
    this.parents.father = a
};
Person.prototype.setMother = function (a) {
    this.parents.mother = a
};

// 546