function Comp(num) {
  let lastTwo = num % 100;
  let lastOne = num % 10;

  if (lastTwo >= 11 && lastTwo <= 19) {
    return num + " компьютеров";
  } else if (lastOne === 1) {
    return num + " компьютер";
  } else if (lastOne >= 2 && lastOne <= 4) {
    return num + " компьютера";
  } else {
    return num + " компьютеров";
  }
}

console.log(Comp(25));
console.log(Comp(41));
console.log(Comp(1048));

function Sum(arr) {
  function NOD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  function NodMassive(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = NOD(result, arr[i]);
    }
    return result;
  }
  let NodAll = NodMassive(arr);

  let del = [];
  for (let i = 1; i <= NodAll; i++) {
    if (NodAll % i === 0) {
      del.push(i);
    }
  }
  return del;
}
let arr = [42, 12, 18];
console.log(Sum(arr));

function простые_числа(min, max) {
  let простые = [];
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      простые.push(i);
    }
  }

  return простые;
}
let min = 11;
let max = 20;
console.log(простые_числа(min, max));
