function shiftElement(array,k){
for(let i = 0; i<k; i++){
  array.unshift(array.pop())
}
return array;
}
console.log([1,2,3,4,5])
console.log(shiftElement([1,2,3,4,5],3))

