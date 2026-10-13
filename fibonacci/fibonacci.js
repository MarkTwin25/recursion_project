export const fibs = (num) => {
  let seq = [0, 1];

  if (num == 1) {
    return [seq[0]];
  }

  for (let i = 2; i < num; i++) {
    let curr = seq[i - 1] + seq[i - 2];
    seq.push(curr);
  }

  return seq;
};

export const fibsRec = (num) => {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  const arr = fibsRec(num - 1);
  const newNum = arr.at(-1) + arr.at(-2);

  arr.push(newNum);
  return arr;
};
