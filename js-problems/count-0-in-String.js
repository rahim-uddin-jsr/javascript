// Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

function countZeros(binary_num) {
  //Write your code here
  //Don't forget to return
  let sum = 0;
  for (let index = 0; index < binary_num.length; index++) {
    const element = binary_num[index];
    if (element == 0) {
      sum++;
    }
  }
  return sum;
}
console.log(countZeros("01100"));
