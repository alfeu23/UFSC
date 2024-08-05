function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value);
