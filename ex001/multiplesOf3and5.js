function multiplesOf3and5(number) {
    // I need to find all the numbers multiple of 3 and 5 below a provider number and return the sum of all these numbers
    let res = 0;
  
    for (let i = 1; i < number; i++) {
      if ( i % 3 == 0 || i % 5 == 0)
        res += i
    }
  
    return res;
  }