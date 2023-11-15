export default function Test() {
  //   const pr = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       //   resolve("ok");
  //       reject(new Error("error"));
  //     }, 1000);
  //   });

  //   pr.then((result) => {
  //     console.log("ok:", result);
  //   })
  //     .catch((err) => {
  //       console.log("err");
  //     })
  //     .finally(() => {
  //       console.log("--end--");
  //     });

  //   pr.then(
  //     function (result) {
  //       return result;
  //     },
  //     function (err) {
  //       return "다시 주문하시오.";
  //     }
  //   );

  const f1 = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("1번 주문됨");
      }, 2000);
    });
  };
  const f2 = (message) => {
    if (message != undefined) console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("2번 주문됨");
      }, 3000);
    });
  };
  const f3 = (message) => {
    if (message != undefined) console.log(message);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("3번 주문됨");
      }, 2000);
    });
  };

  //Promise race
  console.time("x");
  Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
  });

  //Promise all
  //   console.time("x");
  //   Promise.all([f1(), f2(), f3()]).then((res) => {
  //     console.log(res);
  //     console.timeEnd("x");
  //   });

  //Promise chaining
  //   console.log("시작");
  //   f1()
  //     .then((res) => f2(res))
  //     .then((res) => f3(res))
  //     .then((res) => console.log(res))
  //     .catch(console.log)
  //     .finally(() => console.log("the End"));
}
