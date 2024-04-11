var sum_to_n_a = function(n){
 let sum = 0
 for(let i = 0; i <=n; i++){
   sum += i
 }
 console.log("Sum is", sum)
}
sum_to_n_a(5)

var sum_to_n_b = function(n){
  let sum = 0
  while(n > 0){
   sum += n
   n--;
 }
 console.log("Sum is", sum)
}

sum_to_n_b(5)

var sum_to_n_c = function(){
 let sum = [1, 2, 3, 4, 5]
 sum = sum.reduce((total, number) => total + number)
 console.log("Sum is", sum)
}
sum_to_n_c()