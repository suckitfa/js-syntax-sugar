let Car = class {
    constructor(cColor, iDoors) {
        this.color = cColor; //颜色
        this.doors = iDoors; //车门数量
    }
    showColor() {
        console.log(`The color of the car is ${this.color}.`);
    }
    showDoors() {
        console.log(`The Car has ${this.doors} doors.`);
    }
}

// Test
let mycar = new Car('Yellow', 2);
mycar.showColor();
mycar.showDoors();