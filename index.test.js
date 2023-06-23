// Async function just returning two different values
async function getVal(n) {
  return n === 1 ? "one" : "two";
}

test.each([
  [1, "one"],
  [2, "two"]
])("WORKS (should succeed)", async function (n, expected) {
  const val = await getVal(n);

  expect(val).toEqual(expected);
});

test.each([
  [1, "NOT ONE"],
  [2, "two"]
])("WORKS (should fail)", async function (n, expected) {
  const val = await getVal(n);

  expect(val).toEqual(expected);
});

test.each([
  [1, "one"],
  [2, "NOT TWO"]
])("NOT WORKING? (should fail but succeeds)", async function (n, expected) {
  const val = await getVal(n);

  expect(val).toEqual(expected);
});