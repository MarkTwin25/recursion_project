export const mergeSort = (list) => {
  if (list.length <= 1) {
    return list;
  }

  const mid = Math.floor(list.length / 2);
  const leftSide = list.slice(0, mid);
  const rightSide = list.slice(mid);

  const left = mergeSort(leftSide);
  const right = mergeSort(rightSide);
  return merge(left, right);
};

function merge(leftSide, rightSide) {
  const newList = [];
  let i = 0;
  let j = 0;

  while (i < leftSide.length && j < rightSide.length) {
    if (leftSide[i] <= rightSide[j]) {
      newList.push(leftSide[i]);
      i++;
    } else {
      newList.push(rightSide[j]);
      j++;
    }
  }

  while (i < leftSide.length) {
    newList.push(leftSide[i]);
    i++;
  }

  while (j < rightSide.length) {
    newList.push(rightSide[j]);
    j++;
  }

  return newList;
}

console.log(mergeSort([9, 6]));
