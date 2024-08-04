import { calculationForRequiredFuel } from "./Day1";
import { givenExamples } from "./Day1";
test("Fuel Calculation Function", () =>
  expect(givenExamples.map(calculationForRequiredFuel)).toEqual([
    2, 2, 654, 33583,
  ]));
