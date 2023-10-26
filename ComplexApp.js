/*
Filename: ComplexApp.js
Description: A complex and sophisticated JavaScript application that simulates a virtual pet game with multiple features and interactions.
*/

// Pet class
class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 50;
    this.energy = 100;
    this.happiness = 100;
  }

  feed() {
    this.hunger -= 10;
    this.energy += 5;
    console.log(`${this.name} has been fed.`);
  }

  play() {
    this.hunger += 5;
    this.energy -= 10;
    this.happiness += 10;
    console.log(`${this.name} is playing.`);
  }

  sleep() {
    this.hunger += 5;
    this.energy += 20;
    console.log(`${this.name} is sleeping.`);
  }

  getStatus() {
    console.log(`
      Name: ${this.name}
      Species: ${this.species}
      Hunger: ${this.hunger}
      Energy: ${this.energy}
      Happiness: ${this.happiness}
    `);
  }
}

// Pet creation
const myPet = new Pet("Buddy", "Dog");

// Interaction with the pet
myPet.feed();
myPet.play();
myPet.sleep();
myPet.getStatus();

// More complex and sophisticated features can be added such as multiple pets, interactive UI, random events, etc.