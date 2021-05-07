let mycar = new class {
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
}('Blue', 1);

// Test
mycar.showColor();
mycar.showDoors();