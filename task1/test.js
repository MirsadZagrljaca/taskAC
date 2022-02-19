let getNewStruct = require("./index");

describe("Testing the algorithm", () => {
  it("should return new struct with a new pair", () => {
    let a = [
      { id: 1, value: 3 },
      { id: 2, value: 7 },
      { id: 3, value: 3 },
      { id: 4, value: 1 },
      { id: 5, value: 4 },
    ];

    let b = getNewStruct(a);
    let c = b[b.length - 1];
    expect((c = { id: 6, value: 5 }));
  });

  it("should return new struct with a new pair (2nd test)", () => {
    let a = [
      { id: 1, value: 3 },
      { id: 2, value: 7 },
      { id: 3, value: 3 },
      { id: 4, value: 5 },
      { id: 5, value: 4 },
    ];

    let b = getNewStruct(a);
    let c = b[b.length - 1];
    expect((c = { id: 6, value: 6 }));
  });
});
