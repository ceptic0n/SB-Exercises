console.log("eek");


//Part One
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    toString(){
        const{make, model, year} = this;
        console.log(`This vehicle is a ${make} ${model} from ${year}`);
    }

    honk(){
        console.log("Beep Beep :|");
    }

}


//Part Two
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part Three
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("Vroom VROOM!");
    }
}


//Part Four
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newCar){
        if(this.vehicles.length === this.capacity){
            console.log("Garage Full!");
            return;
        }

        if(newCar instanceof Vehicle){
            this.vehicles.push(newCar);
            console.log("Vehicle Added!");
        } else {
            console.log("Only Vehicles are allowed here!");
        }
    }
}