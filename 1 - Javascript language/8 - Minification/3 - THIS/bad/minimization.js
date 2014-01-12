var Person = function () {
    this.name = "";
    this.surname = "";
    this.age = 0;
    this.hairColor = "black";
    this.eyesColor = "brown";
    this.parents = {mother: null, father: null}
};
Person.prototype = {setName: function (a) {
    this.name = a
}, setSurname: function (a) {
    this.surname = a
}, setAge: function (a) {
    this.age = a
}, setHairColor: function (a) {
    this.hairColor = a
}, setEyesColor: function (a) {
    this.eyesColor = a
}, setFather: function (a) {
    this.parents.father = a
}, setMother: function (a) {
    this.parents.mother = a
}};

// 446