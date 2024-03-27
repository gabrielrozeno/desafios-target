function pertenceSequenciaFibonacci(number) {
  let a = 0;
  let b = 1;

  while (b <= number) {
    if (b === number) {
      return true;
    }

    let next = a + b;

    a = b;
    b = next;
  }

  return false;
}

function calcularSequenciaFibonacci(limit) {
  let a = 0;
  let b = 1;

  let sequence = [a, b];

  while (b <= limit) {
    let next = a + b;
    a = b;
    b = next;
    sequence.push(b);
  }

  return sequence;
}

let number = 6;
if (pertenceSequenciaFibonacci(number)) {
  console.log(number + " pertence à sequência de Fibonacci.");
} else {
  console.log(number + " não pertence à sequência de Fibonacci.");
}
