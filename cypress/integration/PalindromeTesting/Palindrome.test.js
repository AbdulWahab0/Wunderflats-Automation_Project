const isPalindrome = require('./Palindrome');
it('Verify the empty string is a palindrome or not ',
  () => {
   //Empty String
    const toTest = '';
    const result = isPalindrome(toTest);
    expect(result).toBe(true);
  }
);
//Reverse String 
it('Verify the reverse string "ab" is palindrome or not',
  () => {
    const toTest= 'ab';
    const result = isPalindrome(toTest);
    expect(result).toBe(false);
  }
);
// String with Single Character
it('Verify a string constituted only by a single character is a palindrome or not',
  () => {
    const toTest = 'z';
    const result = isPalindrome(toTest);
    expect(result).toBe(true);
  }
);
// String with same character 
it('Verify the string having same character two time "aa" is a palindrome or not',
  () => {
    const toTest = 'aa';
    const result = isPalindrome(toTest);
    expect(result).toBe(true);
  }
);
// String having non-alphanumeric character
it('Verify non-alphanumeric character "(*())((^^$&^" is a palindrome',
  () => {
    const toTest = '*())((^^$&^';
    const result = isPalindrome(toTest);
    expect(result).toBe(false);
  });
it('Verify the string "dad" is a palindrome or not ',
  () => {
    const toTest = 'dad';
    const result = isPalindrome(toTest);
    expect(result).toBe(true);
  });
it('Verify the string "sad" is not a palindrome',
  () => {
    const toTest = 'sad';
    const result = isPalindrome(toTest);
    expect(result).toBe(false);
  }
);
it('Verify the string "drad" is not a palindrome',
  () => {
    const toTest = 'drad';
    debugger;
    const result = isPalindrome(toTest);
    expect(result).toBe(false);
  }
);
