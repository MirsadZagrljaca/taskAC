let a = [
  { id: 1, value: 3 },
  { id: 2, value: 7 },
  { id: 3, value: 3 },
  { id: 4, value: 1 },
  { id: 5, value: 4 },
];

function getNewStruct(oldStruct) {
  if (typeof oldStruct !== "object") return "Not an Object!";

  for (let i = 0; i < oldStruct.length; i++) {
    if (oldStruct[i].value && oldStruct[i].id) {
      continue;
    } else {
      return "Not a valid Array!";
    }
  }

  let newStruck = oldStruct.sort((a, b) =>
    a.value > b.value ? 1 : b.value > a.value ? -1 : 0
  );

  let newId = oldStruct.length + 1;
  let newValue = 0;

  for (let i = 0; i < newStruck.length; i++) {
    let counter = 0;
    let temp = newStruck[i].value;

    for (let i = 0; i < newStruck.length; i++) {
      if (temp === newStruck[i].value) {
        counter++;
      }
    }
    if (counter >= 2 && temp !== newValue) {
      newValue = temp;
    }
  }

  for (let i = 0; i < newStruck.length; i++) {
    if (newValue === newStruck[i].value) {
      newValue = newStruck[i].value + 1;
    }
  }

  oldStruct.push({ id: newId, value: newValue });
  let struct = oldStruct.sort((a, b) =>
    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
  );
  return struct;
}

let b = getNewStruct(a);
console.log(b);

module.exports = getNewStruct;
