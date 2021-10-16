// Here we are going to be building step by step a series of simple examples
// that are going to allow us to understand better how the multiple angular
// asynchronous testing utilities work.
// So this is just an example test suite that is not linked to any particular
// angular components.

import { fakeAsync, tick } from "@angular/core/testing";

describe("Async Testing Examples", () => {
  it("Asynchronous test example with Jasmine done()", (done: DoneFn) => {
    let test = false;

    // Simulate than some component is using internally setTimeout() in order to
    // perform some functionallity.
    setTimeout(() => {
      console.log("running assertions");
      test = true;

      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it("Asynchronous test example - setTimeout()", fakeAsync(() => {
    let test = false;

    setTimeout(() => {
      console.log("running assertions setTimeout()");
      test = true;
    }, 1000);
    tick(1000);

    expect(test).toBeTruthy();
  }));
});
