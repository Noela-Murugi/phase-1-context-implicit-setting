const byronPoodle = {
    name: "Byron",
    ageInYears: 2,
    warn: function() {
      console.log(`Bark bark bark`);
      console.log(this);
    }
  };
  byronPoodle.warn();

  const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rupturing atomic bark",
    mostHatedThing: "noises in the apartment hallway",
    warn: function() {
      console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
    }
  };

  blakeDoodle.warn();


  class Poodle{
    constructor(name, pronoun){
      this.name = name;
      this.pronoun = pronoun;
      this.sonicAttack = "ear-rupturing atomic bark";
      this.mostHatedThing = "noises in the apartment hallway";
    }

    warn() {
      console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`);
    }
  }

  const byron = new Poodle("Byron", "he");
byron.warn();
