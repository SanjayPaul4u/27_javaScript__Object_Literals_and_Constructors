console.log("This tutorial 27");


//OBJECT LITERALS FOR CREATING OBJECT📌📌
let car ={
    name: "maruti",
    topSpeed: "100km/h",
    run: function(){
        console.log("Car is running.");
    }
}

// console.log(car);
// console.log(car.name);
// console.log(car.run());


//CONSTRUCTORS IN OBJECT LITERALS📌📌

function Cars(givenName, givenSpeed){
    this.carName = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.carName} is running.`);
    }
    this.analyze = function(){
        console.log(`${this.carName} car is slower ${500-this.topSpeed}km/h than Marcedies`);
    }

}

let car1 = new Cars("MarutiFast", 100);
car = new Cars("FararySecond", 300);//we can add let.
// console.log(car1);
// console.log(car);
// console.log(car.carName);
// console.log(car.topSpeed);
// console.log(car.run());
// console.log(car.analyze());



//THIS CONSTRUCTORS IS MAKING BY ME HELP WHITH FIRST ONE.📌📌
function Comparision(firstCarObj, secondCarObj){
    this.firstCar =firstCarObj;
    this.secondCar =secondCarObj;
    this.fasterCar = function(){
        if(this.firstCar.topSpeed<this.secondCar.topSpeed){
            console.log(`${this.secondCar.carName} car is faster than ${this.firstCar.carName}`);
        }
        else if(this.firstCar.topSpeed>this.secondCar.topSpeed){
            console.log(`${this.firstCar.carName} car is faster than ${this.secondCar.carName}`);
        }
        else{
            console.log("Both's car speed is same.");
        }
    }
}

comp1 = new Comparision(car1, car);
// console.log(comp1);
console.log(comp1.fasterCar());