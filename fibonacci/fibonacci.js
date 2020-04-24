const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) { return 'OOPS'};
  
    let prev = 0;
    let current = 1;
    let sum = 1;
  
    for (let i = 1; i <= num; i++) {
      if ( num === 1 ) {
        return 1;
      } else if (i > 1) {
        sum = current + prev;
        prev = current;
        current = sum;
      }
    }
    return sum;
  }  

module.exports = fibonacci
