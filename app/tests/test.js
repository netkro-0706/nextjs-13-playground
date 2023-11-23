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
        //rej(new Error("...is error"));
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

  //async
  async function order() {
    console.log("시작");
    try {
      const result = await Promise.all([f1(), f2(), f3()]);
      // const result1 = await f1();
      // const result2 = await f2(result1);
      // const result3 = await f3(result2);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    console.log("종료");
  }
  order();

  //Promise race
  //가장 먼저 완료된 결과를 반환
  // console.time("x");
  // Promise.race([f1(), f2(), f3()]).then((res) => {
  //   console.log(res);
  //   console.timeEnd("x");
  // });

  //Promise all
  //전부 완료되길 기다렸다가 결과를 출력 - 가장 느린시간 까지 기다림
  //   console.time("x");
  //   Promise.all([f1(), f2(), f3()]).then((res) => {
  //     console.log(res);
  //     console.timeEnd("x");
  //   });

  //Promise chaining
  //전체실행 - 차례대로 전부 하나씩 실행
  // console.log("시작");
  // f1()
  //   .then((res) => f2(res))
  //   .then((res) => f3(res))
  //   .then((res) => console.log(res))
  //   .catch(console.log)
  //   .finally(() => console.log("the End"));
}
