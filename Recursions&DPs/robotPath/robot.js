const robotPath = (matrix) => {

  let copy = [];

  for(let i = 0; i < matrix.length; i++) {
    let row = [];
    for(let j = 0 ; j < matrix[i].length; j++) {
      if(matrix[i][j] === false){
        row.push('X');
      } else {
        row.push('O');
      }
    }
    copy.push(row);
  }

  // let found = false;

  const recurse = (row, col) => {
    // if(found) {
    //   return false;
    // }
    if(row === matrix.length-1 && col === matrix[0].length-1) {
      copy[row][col] = 'X'
      found = true;
      return true;
    }
    if(matrix[row] === undefined || matrix[row][col] === undefined || matrix[row][col] === 1) {
      return false;
    }
    copy[row][col] = 'X';
    return recurse(row+1, col) || recurse(row, col+1);
  

  }
  let ans = recurse(0,0);
  console.log(copy)
  return ans
}


let map1 = [
            [0, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 0]
           ];
let map2 = [
            [0, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0]
           ];
let map3 = [
            [0, 0, 1],
            [0, 0, 0],
            [0, 0, 0]
]
// console.log(robotPath(map1))
// console.log(robotPath(map2))
console.log(robotPath(map3))