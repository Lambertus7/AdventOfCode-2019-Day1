/* BATTLEPLAN for Part 1: 
Step 1. First we need to create a function that can even calculate the amount of fuel for a module: √
The given formula for calculating the required fuel of a module is the following: You take the mass devide it by 3 then rounded down (which means we will make it into an interger) and follow through by substracting 2. 
Step 2. Test Calculation Formula with the given examples; if it's consisitent with all examples we can move on to one of the actual data for input mass, may have to map the entirety of the array due to us having to change the list altogether: √
Step 3. Do the rest of the calculation for the InputMass but since we are going to change the array we may have to utilize the map function: √
Step 4. Calculate the sum total of the required fuel for all modules: √

Part 2:
Step 1. Create a Formula where we can calculate the fuel of the fuel until we reach the very base (0): √
It sounds like there will be some use for a loop here until we reach 0. May have to google this one
Step 2. Calculating the total
 */

const givenExamples = [12, 14, 1969, 100756]; //Answers = [2, 2, 654, 33583]

const inputMass = [
  80590, 86055, 92321, 131464, 73326, 144607, 124438, 72589, 96471, 65712,
  107909, 141197, 131589, 149356, 53254, 54742, 94498, 79631, 146271, 72983,
  59687, 50571, 89527, 72175, 72089, 57808, 143395, 74329, 109760, 91254, 79220,
  131610, 74277, 144080, 107992, 93817, 112252, 81157, 74618, 55479, 66420,
  50055, 53864, 75143, 131285, 135352, 63103, 133893, 142154, 144706, 128280,
  92891, 61066, 116696, 132323, 74805, 75160, 76285, 114280, 124461, 86605,
  55868, 117886, 57035, 125382, 96755, 50218, 123795, 141878, 147718, 65396,
  76043, 53013, 60583, 140754, 86844, 99086, 125917, 139895, 60719, 76850,
  99552, 130115, 76143, 113743, 99243, 132678, 130983, 137577, 133118, 70662,
  102478, 132083, 92287, 147977, 60584, 91031, 59910, 147595, 145263,
];

// interface CalculationProps {
//   mass: number;
// }

/*---Part 1---*/
//Formula:
const calculationForRequiredFuel = (mass: number) => {
  return Math.floor(mass / 3) - 2;
}; //Math.floor does the rounding down to the closest interger.

// const testRun = givenExamples.map(CalculationForRequiredFuel);
const requiredFuel = inputMass.map(calculationForRequiredFuel);

console.log("The required fuel for each module:", requiredFuel);

const sumTotalFuel = requiredFuel.reduce((acc, fuel) => acc + fuel, 0);
console.log(
  "The sum total for the required fuel for all modules(Part1):",
  sumTotalFuel
);

/*---Part 2---*/
//Calculate the total fuel requirement, including this inception for having fuel for the fuel:
const calculateTotalFuel = (mass: number): number => {
  let totalFuel = 0;
  let additionalFuel = calculationForRequiredFuel(mass);

  //Loop:
  while (additionalFuel > 0) {
    totalFuel += additionalFuel;
    additionalFuel = calculationForRequiredFuel(additionalFuel);
  }

  return totalFuel;
};
// Calculate the total fuel:
const totalFuelRequired = inputMass
  .map(calculateTotalFuel)
  .reduce((acc, fuel) => acc + fuel, 0);

console.log(
  "The sum total for the required fuel for all modules(Part 2):",
  totalFuelRequired
);
