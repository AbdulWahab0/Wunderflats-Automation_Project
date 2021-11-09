
const isPalindrome = (test) => {
    for (let i = 0; i < Math.floor(test.length / 2); i++) {
      if (test[i] !== test[test.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
 
  module.exports = isPalindrome;
  