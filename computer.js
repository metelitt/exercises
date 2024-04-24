function склонение_компьютера(num) {
  let последние_две_цифры = num % 100;
  let последняя_цифра = num % 10;

  if (последние_две_цифры >= 11 && последние_две_цифры <= 19) {
    return num + " компьютеров";
  } else if (последняя_цифра === 1) {
    return num + " компьютер";
  } else if (последняя_цифра >= 2 && последняя_цифра <= 4) {
    return num + " компьютера";
  } else {
    return num + " компьютеров";
  }
}

console.log(склонение_компьютера(25));
console.log(склонение_компьютера(41));
console.log(склонение_компьютера(1048));

function общие_делители(arr) {
  function НОД(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  function НОД_массива(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = НОД(result, arr[i]);
    }
    return result;
  }
  let НОД_всех = НОД_массива(arr);

  let делители = [];
  for (let i = 1; i <= НОД_всех; i++) {
    if (НОД_всех % i === 0) {
      делители.push(i);
    }
  }
  return делители;
}
let arr = [42, 12, 18];
console.log(общие_делители(arr));
