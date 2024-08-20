/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class engine {
  constructor(
  name,
  material,
  cylinders,
  injectionType,
  intakeSize,
  exhaustSize,
  rpm,
  nitrousOpen,
  newRedline,
) {
  this.name = name;
  this.material = material;
  this.cylinders = cylinders;
  this.injectionType = injectionType;
  this.intakeSize = intakeSize;
  this.exhaustSize = exhaustSize;
  this.rpm = rpm;
  this.nitrousOpen = nitrousOpen;
  this.newRedline = newRedline;
}

}; 



/*class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack;
*/