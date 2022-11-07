function Person (pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.personInfo = function () {
        console.group (`${this.name} info:`);
        console.log ("Your name is: " + this.name);
        console.log ("Your age is: " + this.age);
        console.groupEnd ();
    };
};