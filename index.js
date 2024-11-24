let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = mergeArrays(array1, array2);

console.log(mergedArray);  
// isprime number 
console.log(isPrime(7));    
console.log(isPrime(15));   
console.log(isPrime(7));    
// capitalize first letter  
 function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

   let str = "hello world how are you";
  let capitalizedStr = capitalizeFirstLetter(str);
  console.log(capitalizedStr);  
  // uppercase  
  function toUpperCase(str) {
    return str.toUpperCase();
}