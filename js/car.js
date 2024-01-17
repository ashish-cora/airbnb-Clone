const car = (name, wheel = 4) => {
  return {
    name: name,
    wheel: 4,
    brake: function () {
      return "stop";
    },
  };
};

const bmw = car("bmw", 4);
const honda = car("honda", 2);

class Car {
  constructor(name, wheel = 4) {
    this.name = name;
    this.wheel = wheel;
    this.hitBrake = () => {
      this.brakeMechanism();
    };
  }

  brakeMechanism() {
    //   100 lines
    return "stop";
  }
}

const bmw1 = new Car("bmw", 4);

console.log("asd > > > >", bmw, bmw1);
bmw1.hitBrake();
