class Person {
    constructor(name = "Anon", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, you glorious ${this.name} you. You are now ${this.age}. `;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let desc = super.getGreeting();
        if (this.homeLocation) {
            desc += `I am visiting from ${this.homeLocation}`;
        }
        return desc;
    }
}
const me = new Person("Graemeses", 35);
const strange = new Person();

console.log(me.getGreeting());
console.log(strange.getGreeting());

const traveller = new Traveller("Punch Rockgroinll", 48, "BuffsVille");
const traveller2 = new Traveller("Slab Steakfist", 32);

console.log(traveller.getGreeting());
console.log(traveller2.getGreeting());


