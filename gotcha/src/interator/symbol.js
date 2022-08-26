"use strict";

// Symbol ins not visible using normal iterator

const age = Symbol("ageValue");
const email = "emailValue";
const sam = {
  first: "Sam",
  [email]: "sam@example.com",
  [age]: 2,
};

for (let prop in sam) {
  console.log(prop);
}

console.log(">>>>", Object.getOwnPropertySymbols(sam));
