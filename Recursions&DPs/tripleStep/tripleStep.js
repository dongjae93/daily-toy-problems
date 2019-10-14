/*
  A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
  Implement a method to count how many possible ways the child can run up the stairs.
*/

const tripleStep = (n) => {
  console.time('tripleStep');
  let count = 0;
  let dict = {};
  
  if( n === 0 ) {
    return count;
  }
  const recurse = (n) => {
    //if n = 0 count ++
    if(dict[n]) {
      count += dict[n];
      return;
    }
    if(n === 0 ) {
      count++;
      return;
    }
    //if n < 0 return
    if(n < 0) {
      return;
    }
    //else
    else {
    //choose 1 step
    //recursively check with n-1 remaining steps
    recurse(n-1);
    dict[n-1] = count;
    //choose 2 steps
    //recursively check with n-2 remaining steps
    recurse(n-2);
    //choose 3 steps
    //recursively check with n-4 remaining steps  
    recurse(n-3);
    }
  }
  recurse(n);
  return count;
}

// console.log(tripleStep(100));
console.log(tripleStep(30));
console.timeEnd('tripleStep');