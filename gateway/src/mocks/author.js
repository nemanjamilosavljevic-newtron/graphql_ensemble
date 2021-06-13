function* generateNames() {
  while (true) {
    yield "John Doe";
    yield "John Snow";
    yield "Me";
    yield "You";
    yield "Too";
  }
}
function* generateIds() {
  while (true) {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
}

const name = generateNames();
const id = generateIds();

module.exports = {
  id: () => id.next().value,
  name: () => name.next().value,
};
