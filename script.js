// Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    alert(`Hi I am ${this.name}, My Favorite SuperHero is ${this.type}`);
  }
}

class Marvel extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    alert(`I am ${this.type}`);
  }
}

const Marvel1 = new Marvel(
  prompt("Enter Your Name"),
  prompt("Enter your SuperHero")
);
Marvel1.introduce();
Marvel1.play();
