async function async1() {
  console.log("async1 start");
  new Promise((resolve) => {
    console.log("promise");
  });
  console.log("async1 end");
}
async1();
console.log("start");
