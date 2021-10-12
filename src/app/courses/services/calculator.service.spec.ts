import { CalculatorService } from "./calculator.service";

let calculator: CalculatorService, loggerSpy: any;

beforeEach(() => {
  loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
  calculator = new CalculatorService(loggerSpy);
});

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    // const logger = new LoggerService();
    // spyOn(logger, "log");

    const result = calculator.add(2, 2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should substract two numbers", () => {
    const result = calculator.subtract(2, 2);

    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
