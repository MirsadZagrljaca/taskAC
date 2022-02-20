let object = { property1: { property2: "Apple", property3: "Orange" } };
let path = "property1.property2";

function lookup(obj, path) {
  if (typeof obj !== "object") return "Params must be Object and String";

  if (typeof path !== "string") return "Params must be Object and String";

  let newPath = path.split(".");

  let result = "Couldn't Find Your Path!";

  for (const [key, value] of Object.entries(obj)) {
    if (key == newPath[0]) {
      result = value;
    }
  }

  for (let i = 1; i < newPath.length; i++) {
    for (const [key, value] of Object.entries(result)) {
      if (key == newPath[i]) {
        result = value;
      }
    }
  }

  return result;
}

var res = lookup(object, path);
console.log(res);

module.exports = lookup;
