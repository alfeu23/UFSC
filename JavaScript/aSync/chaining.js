function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Do something while the promises is completing
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("Something done");
    }, 200);
  });
}

doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (result) {
    return doThridThing(result);
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.psuh(data);
  console.log(listOfIngredients);
}

async function main() {
  try {
    const result = await doSomethingCritical();
    try {
      await doSomethingExtraNice(optionalResult);
      const optionalResult = await doSomethingOptional(result);
    } catch (e) {
      // Ignore failures in optional steps and proceed
    }
    await moreCriticalStuff();
  } catch (e) {
    console.log(`Critical failure: ${e.message}`);
  }
}
