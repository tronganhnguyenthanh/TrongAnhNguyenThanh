// First Way
var sum_to_n_a = function(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
   sum += i
  }
  console.log("Sum is:", sum)
  return sum
}
sum_to_n_a(5)

// Second Way
var sum_to_n_b = function(n){
  let sum = 0; 
  while(n > 0){
   sum += n
   n--
  }
  console.log("Sum is", sum);
  return sum
}
sum_to_n_b(5)

// Third way
var sum_to_n_c = function(n){
  let sum = 0; // Initialize value
  let numbers = Array.from({length:n}, (__, i) => i + 1) // Create an array from 1 -> n
  /*
    Using forEach to loop the data
  */
  numbers.forEach(num => {
    sum += num
  })
  console.log("Sum is:", sum);
  return sum 
}
sum_to_n_c(5)