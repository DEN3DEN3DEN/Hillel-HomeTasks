function Car (pModel,pYear) {
    this.model = pModel;
    this.year = pYear;
    this.getCarInfo = function () {
        console.group (`${this.model} info:`);
        console.log ("Model of your car: " + this.model);
        console.log ("Year of issue: " + this.year);
        console.groupEnd();
    };
    this.ownerCar = function (person) {
        console.log(person.name + " is the owner of the " + this.model + " " + this.year);
    };
};
