
class Vehicle {
    startEngine() {
      throw new Error("startEngine() must be implemented");
    }
    stopEngine() {
      throw new Error("stopEngine() must be implemented");
    }
  }
  
  
  class Car extends Vehicle {
    #make; 
    #model; 
    #year; 
  
    constructor(make, model, year) {
      super();
      this.#make = make;
      this.#model = model;
      this.#year = year;
    }
  
    
    getMake() {
      return this.#make;
    }
  
    setMake(make) {
      this.#make = make;
    }
  
    
    getModel() {
      return this.#model;
    }
  
    setModel(model) {
      this.#model = model;
    }
  
    
    getYear() {
      return this.#year;
    }
  
    setYear(year) {
      this.#year = year;
    }
  
    
    start() {
      console.log("Car started.");
    }
  
    displayInfo() {
      console.log(`Make: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`);
    }
  
    getDescription() {
      return `${this.#year} ${this.#make} ${this.#model}`;
    }
  
    
    startEngine() {
      console.log("Engine started.");
    }
  
    stopEngine() {
      console.log("Engine stopped.");
    }
  }
  
  
  class ElectricCar extends Car {
    #batteryCapacity; 
  
    constructor(make, model, year, batteryCapacity) {
      super(make, model, year);
      this.#batteryCapacity = batteryCapacity;
    }
  
    
    getBatteryCapacity() {
      return this.#batteryCapacity;
    }
  
    setBatteryCapacity(capacity) {
      this.#batteryCapacity = capacity;
    }
  
    charge() {
      console.log("Car is charging...");
    }
  
    
    getDescription() {
      return `${super.getDescription()} with a battery capacity of ${this.#batteryCapacity} kWh.`;
    }
  }
  
  
  const myCar = new Car("Mercedes", "Benz", 2022);
  myCar.start();
  myCar.displayInfo();
  console.log(myCar.getDescription());
  myCar.startEngine();
  myCar.stopEngine();
  
  const myElectricCar = new ElectricCar("Tesla", "Model 3", 2023, 75);
  myElectricCar.start();
  myElectricCar.displayInfo();
  console.log(myElectricCar.getDescription());
  myElectricCar.charge();
  